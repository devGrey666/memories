const jwt = require("jsonwebtoken")
const Auth = (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];
  if (!token) {
    res.status(400).json({ message: "Bad Credentials" });
  } else {
    const decodedData = jwt.verify(token, "test");
    req.userId = decodedData?.id;
  }
  next();
};

module.exports = {
  Auth
}