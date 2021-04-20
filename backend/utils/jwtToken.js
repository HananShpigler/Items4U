// Create, send a token and save it in the cookie.
const sendToken = (user, statusCode, res) => {
  // Create JWT Token
  const token = user.getJwtToken();

  // Options for the cookie
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
    ),
    // prevents client-side scripts from accessing data
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
    user,
  });
};

module.exports = sendToken;
