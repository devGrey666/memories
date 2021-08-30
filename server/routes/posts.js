import express from "express";
import {
  getPostsBySearch,
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";
import { Auth } from "../middleware/auth.js";
const router = express.Router();
router.get("/search", getPostsBySearch);
router.get("/", getPosts);

router.post("/", Auth, createPost);
router.patch("/:id", Auth, updatePost);

router.patch("/:id/likePost", Auth, likePost);
router.delete("/:id", Auth, deletePost);
export default router;
