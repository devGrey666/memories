const express = require("express")
const {getPostsBySearch, getPosts, createPost, updatePost, deletePost, likePost} = require("../controllers/posts.js");
const { Auth } =  require("../middleware/auth.js");
const router = express.Router()

router.get("/search", getPostsBySearch);
router.get("/", getPosts);
router.post("/", Auth, createPost);
router.patch("/:id", Auth, updatePost);

router.patch("/:id/likePost", Auth, likePost);
router.delete("/:id", Auth, deletePost);

module.exports = {
    PostRouter : router
}
