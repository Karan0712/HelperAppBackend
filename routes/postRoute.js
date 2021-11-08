const router = require("express").Router();
const {
  createPost,
  getAllPosts,
  getMyPosts,
  getIdPost,
  updatePost,
  deletePost,
} = require("../src/post/postController");
const { getPostDetailsById } = require("../src/post/postService");
const { route } = require("./commonRoute");

router.post("/post", createPost);

// router.post("/login", login);

// router.post("/reuse", checkEmailReuse);
// router.post("/postDetailsById", getPostDetailsById);
router.post("/postDetails/:id", getIdPost);

router.post("/allPosts", getAllPosts);

router.post("/myPosts", getMyPosts);

router.patch("/updatePost/:id", updatePost);

router.post("/deletePost/:id", deletePost);

module.exports = router;
