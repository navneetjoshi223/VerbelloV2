const bcrypt = require("bcrypt");
const User = require("../models/User");

async function findUserByEmail(email) {
  return User.findOne({ email });
}

async function authenticateLogin(email, password) {
  const user = await findUserByEmail(email);
  // console.log(user)

  if (!user) {
    throw new Error("No user found");
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    throw new Error("Invalid Password!");
  }

  return { _id:user._id,email: user.email, fullName: user.fullName };
}
async function authenticateSignup(fullname, email, password) {
  const user = await findUserByEmail(email);
  // console.log(user)

  if (user) {
    throw new Error("Email id already taken! ");
  } else {
    const hashPassowrd = await bcrypt.hash(password, 5);

    const newUser = new User({
      fullname: fullname,
      email: email,
      password: hashPassowrd,
    });
    newUser
      .save()
      .then((savedUser) => {
        console.log("User added successfully:", savedUser);
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
    return { email: newUser.email, fullName: newUser.fullName };
  }
}

module.exports = {

  authenticateSignup,
  authenticateLogin
};
