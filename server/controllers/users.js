const User = require("../models/users.js");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const signIn = async (req, res) => {
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
        process.env.TOKEN_KEY,
        { expiresIn: "1h" }
      );

      res.status(200).json({ result: existingUser, token });
    }
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};
const signUp = async (req, res) => {
  const { email, password, firstName, lastName, confirmPassword } = req.body;

  // not valid form data  - return
  if(!email || !password || !firstName || !lastName || !confirmPassword) {
    return res.status(400).send({message:"Invalid Form Data"})
  }

  try {
    // check for already existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).send({ message: "User Already Exists" });
    }

    // check if password matches or not
    if (password !== confirmPassword) {
      return res.status(400).send({ message: "Passwords does not match" });
    }

    // hashing password
    const hashedPassword = await bcrypt.hash(password, parseInt(process.env.HASH_SALT_ROUNDS));

    // create user document
    const user = new User({
        name: `${firstName} ${lastName}`,
        password: hashedPassword,
        email: email,
      });

    const result = await user.save();

    const token = jwt.sign({ id: result._id, email: email }, process.env.TOKEN_KEY, {
      expiresIn: "1h",
    });

    result && res.json({ result: {id: result._id,name:result.name,email:result.email}, token });

  } catch (error) {
    res.status(500).send({ message: `Error ${error && error.message}` });
  }
};


module.exports = {
  signIn,
  signUp
}