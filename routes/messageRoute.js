const router = require("express").Router();
const {
  sendMessage,
  getMessageList,
  getMessagesWithUser,
} = require("../src/message/messageController");

router.post("/message", sendMessage);
router.get("/message/list/:id", getMessageList);

router.get("/messages/:userId/:receiverId", getMessagesWithUser);

// router.post("/post", createPost);

// router.post("/login", login);

// router.post("/reuse", checkEmailReuse);
// // router.post("/postDetailsById", getPostDetailsById);
// router.post("/postDetails/:id", getIdPost);

// router.post("/allPosts", getAllPosts);

// router.post("/myPosts", getMyPosts);

// router.patch("/updatePost/:id", updatePost);

// router.post("/deletePost/:id", deletePost);

module.exports = router;
