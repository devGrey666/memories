const jwt = require("jsonwebtoken")
const requireAuth = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(400).json({ message: "Bad Credentials" });
  }
  const decodedData = jwt.verify(token, process.env.TOKEN_KEY);
  req.userId = decodedData?.id;
  next();
};

module.exports = {
  requireAuth:requireAuth
}