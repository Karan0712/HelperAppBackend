const router = require("express").Router();
const {
  createUser,
  login,
  checkEmailReuse,
  getUserBasedOnId,
  getAllUsers,
  updateProfile,
  sortUsers,
} = require("../src/user/userController");

router.post("/user", createUser);

router.post("/login", login);

router.post("/reuse", checkEmailReuse);

router.post("/detailsById/:id", getUserBasedOnId);

router.post("/all", getAllUsers);

router.post("/sort", sortUsers);

router.patch("/profile/:id", updateProfile);

module.exports = router;
