const bcrypt = require('bcrypt');

const userDao = require('../models/userDao');

const hashPassword = async (plaintextPassword) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);

  return await bcrypt.hash(plaintextPassword, salt);
}

const signUp = async (name, email, password, profileImage) => {
	const emailRegex    =/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
	const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
  
  if (!emailRegex.test(email)) {
    const err = new Error('EMAIL_IS_NOT_VALID');
    err.statusCode = 400;
    throw err;
  }

  if (!passwordRegex.test(password)) {
    const err = new Error('PASSWORD_IS_NOT_VALID');
    err.statusCode = 400;
    throw err;
  }

  const hashedPassword = await hashPassword(password);

  return await userDao.createUser(
    name,
    email,
    hashedPassword,
    profileImage
  );
};

module.exports = {
  signUp
}