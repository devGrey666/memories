const express = require("express")
const {getPostsBySearch, getPosts, createPost, updatePost, deletePost, likePost} = require("../controllers/posts.js");
const { requireAuth } =  require("../middleware/auth.js");
const router = express.Router()

router.get("/search", getPostsBySearch);
router.get("/", getPosts);
router.post("/", requireAuth, createPost);
router.patch("/:id", requireAuth, updatePost);

router.patch("/:id/like-post", requireAuth, likePost);
router.delete("/:id", requireAuth, deletePost);

module.exports = {
    PostRouter : router
}
