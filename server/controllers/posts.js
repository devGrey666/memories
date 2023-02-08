const {Post} = require("../models/posts")
const mongoose = require("mongoose")

// get all posts
const getPosts = async (req, res) => {
  // if query page is undefined that its first page
  const page = Number(req.query.page ?? 1)
  try {
    const LIMIT = 8;
    // start index for posts  hint : for first page its 0
    const startIndex = (page - 1) * LIMIT;

    const total = await Post.countDocuments({});
    const posts = await Post.find()
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startIndex);

    if (posts.length < 1) {
      return res.status(200).send({message: "No record Found"});
    }
    // returns posts with current page and total pages
    res.send({
        data: posts,
        currentPage: page,
        totalPages: Math.ceil(total / LIMIT),
      });

  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const createPost = async (req, res) => {
  const post = req.body;
  post.tags = post.tags.split(",");

  const newPost = new Post({ ...post, creator: req.userId });
  try {
    const createdPost = await newPost.save();
    res.status(201).send(createdPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
const updatePost = async (req, res) => {
  const post = req.body;
  // post.tags = post.tags.split(",");
  const { id: _id } = req.params;
  const isValid = mongoose.Types.ObjectId.isValid(_id);

  if (!isValid) {
    return res.status(404).send({ message: "Not a valid id" });
  }
  try {
    const updatedPost = await Post.findByIdAndUpdate(_id, post, {
      new: true,
    });
    res.status(200).send({ result: updatedPost });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }

};

const deletePost = async (req, res) => {
  const { id: _id } = req.params;
  const isValid = mongoose.Types.ObjectId.isValid(_id);

  if (!isValid) {
     return res.status(404).send({ message: "Not a valid id" });
  }

  try {
    await Post.findByIdAndRemove(_id);
    res.status(202).send({ message: "Post Deleted" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
const likePost = async (req, res) => {
  const { id } = req.params;

  if (!req.userId){
    return res.status(400).json({ message: "Bad Credentials Not Authenticated" });
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
     return res.status(404).send({ message: "Something went wrong" });
  }

  try {
    const post = await Post.findById(id);
    const index = post.likes.findIndex((id) => id === String(req.userId));
    if (index === -1) {
      post.likes.push(req.userId);
    } else {
      post.likes = post.likes.filter((id) => id !== String(req.userId));
    }
    const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true });
    res.send(updatedPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }

};
const getPostsBySearch = async (req, res) => {
  console.log(req.query);
  const { searchQuery, tags } = req.query;
  try {

    const title = new RegExp(searchQuery.trim(), "i");

    const posts = await Post.find({
      $or: [{ title }, { tags: { $in: tags.split(",") } }],
    });

    res.status(200).json({ data: posts });
  } catch (error) {
    res.status(404).json({ message: "Not Found" });
  }
};


module.exports = {
  getPostsBySearch,
  likePost,
  deletePost,
  createPost,
  updatePost,
  getPosts
}
