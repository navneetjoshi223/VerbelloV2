const bcrypt = require("bcrypt");
const User = require("../models/User");

async function findUserByEmail(email) {
  return User.findOne({ email });
}

async function findUserByID(_id) {
  return User.findById(_id).select("-password");

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
  console.log(user,'USER')

  return { _id:user._id, fullName: user.fullName };
}
async function authenticateSignup(fullName, email, password) {
  const user = await findUserByEmail(email);
  // console.log(user)

  if (user) {
    throw new Error("Email id already taken! ");
  } else {
    const hashPassowrd = await bcrypt.hash(password, 5);

    const newUser = new User({
      fullName: fullName,
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
  authenticateLogin,
  findUserByID
};
