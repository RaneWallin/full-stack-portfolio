const requireLogin = (req, res, next) => {
  // if (!req.user)
  //   return res
  //     .status(403)
  //     .json({ message: "You are not authorized to access this page." });

  next();
};

module.exports = requireLogin;
