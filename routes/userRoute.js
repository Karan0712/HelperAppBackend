const jwt = require('jsonwebtoken');
const db = require('../model')
const Users = db.users;
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
const authenticateToken = require("./middleware/auth");

router.post("/user", createUser);

router.post("/login", login);

router.post("/reuse", checkEmailReuse);

router.get("/detailsById/:id", getUserBasedOnId);

router.post("/all",authenticateToken, getAllUsers);

router.post("/sort", sortUsers);

router.patch("/profile/:id",authenticateToken, updateProfile);

router.post("/tokenIsValid", async (req, res) => {
  try {
    const authHeader =  req.headers['authorization'] || req.headers['Authorization']

    const token = authHeader && authHeader.split(' ')[1]

  if (!token) return res.json(false);
  const verified = jwt.verify(token, process.env.JWT_SECRET);
  if (!verified) return res.json(false);
  console.log(verified)
  const user =  await Users.findOne({ where: { id: verified.id } });
  if (!user) return res.json(false);
  const data = {
    userId: user.id,
    userName: user.name,
    userEmail: user.email,
    token: token
  };
  return res.json({data});
  } catch (err) {
  res.status(500).json({ error: err.message });
  }
  });

module.exports = router;
