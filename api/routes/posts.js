import express from 'express';
import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  updatePost,
} from '../controllers/post.js';

import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//CREATE
router.post('/', verifyAdmin, createPost);
//UPDATE
router.put('/:id', verifyAdmin, updatePost);

//DELETE
router.delete('/:id', verifyAdmin, deletePost);
//GET
router.get('/:id', getPost);
//GET ALL
router.get('/', getAllPosts);
export default router;
