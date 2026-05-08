const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTE

exports.register = async (req, res) => {
  try {

    const { name, email, password } = req.body;

    // ======================
    // REQUIRED FIELD CHECK
    // ======================

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    // ======================
    // NAME VALIDATION
    // ======================

    if (name.length < 3) {
      return res.status(400).json({
        message: "Name must be at least 3 characters"
      });
    }

    // ======================
    // EMAIL VALIDATION
    // ======================

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Invalid email format"
      });
    }

    // ======================
    // PASSWORD VALIDATION
    // ======================

    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters"
      });
    }

    // ======================
    // CHECK EXISTING USER
    // ======================

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    // ======================
    // HASH PASSWORD
    // ======================

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    // ======================
    // CREATE TOKEN
    // ======================

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(201).json({
      message: "Registration successful",
      token,
      user
    });

  } catch (error) {

    res.status(500).json({
      message: "Server error"
    });

  }
};

// LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // ======================
    // CHECK USER
    // ======================

    const user = await User.findOne({ email });

    // USER NOT FOUND
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not registered. Please register first.",
      });
    }

    // ======================
    // CHECK PASSWORD
    // ======================

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid password",
      });
    }

    // ======================
    // TOKEN
    // ======================

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // ======================
    // RESPONSE
    // ======================

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};

// LOGOUT
exports.logout = async (req, res) => {
  res.json({
    message: "Logout successful",
  });
};
