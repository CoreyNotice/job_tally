const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = require('express').Router();
const db = require('../models');
const { User } = db;

router.post('/register', async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ where: { userName } });
    if (user) {
      return res.json({ message: 'User already exists!' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ userName, password: hashedPassword });
    await newUser.save();
    res.json({ message: 'User Registered Successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ where: { userName } });
    if (!user) {
      return res.json({ message: "User Doesn't Exist!" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.json({ message: 'Username or Password Is Incorrect!' });
    }
    const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET);
    res.json({ token, userID: user.id });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
