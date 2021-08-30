import User from "../models/users.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const signIn = async (req, res) => {
  let isCorrectPassword;
  const { email, password } = req.body;
  // console.log(email, password);
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      res.status(404).send({ message: "No record Found" });
    } else {
      isCorrectPassword = await bcrypt.compare(password, existingUser.password);
    }

    if (!isCorrectPassword) {
      res.status(400).send({ message: "Bad Credentials" });
    } else {
      const token = jwt.sign(
        { id: existingUser._id, email: existingUser.email },
        "test",
        { expiresIn: "1h" }
      );

      res.status(200).json({ result: existingUser, token });
    }
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};
export const signUp = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(409).send({ message: "User Already Exists" });
    }
    if (password !== req.body.confirmPassword) {
      res.status(400).send({ message: "Passwords does not match" });
    } else {
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({
        name: `${req.body.firstName} ${req.body.lastName}`,
        password: hashedPassword,
        email: req.body.email,
      });
      const result = await user.save();
      const token = jwt.sign({ id: result._id, email: result.email }, "test", {
        expiresIn: "1h",
      });

      result && res.json({ result: result, token });
    }
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};
