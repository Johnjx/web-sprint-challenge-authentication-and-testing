const Users = require('./auth-model');

const checkUsernameExists = async (req, res, next) => {
  const { username } = req.body;
  const existingUser = await Users.findBy({ username });

  if (existingUser != null) {
    next({ status: 401, message: "username taken" });
    return;
  }

  next();
}

module.exports = {
  checkUsernameExists,
}
