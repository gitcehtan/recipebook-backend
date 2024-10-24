const express = require("express");
const { login, signup } = require("../controllers/authController");
const { loginValidation, signupValidation } = require("../middlewares/AuthValidation");
const router = express.Router();


router.post('/login',loginValidation,login);
router.post('/signup',signupValidation,signup);


module.exports = router;