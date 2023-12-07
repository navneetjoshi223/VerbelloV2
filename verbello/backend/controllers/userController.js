const userService = require('../services/userServices');

async function loginUser(req, res) {
  const { email, password } = req.body;
  console.log(email,password,'CRED')

  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await userService.authenticateLogin(email, password);
    console.log(user,'USER')
    // req.session.user = { _id: user._id };
    console.log(user._id,user.fullName,'Credentails')
    
    req.session._id=user._id;
    req.session.fullName=user.fullName
    await req.session.save();
    console.log(req.session.user)

    res.json({ message: 'Login successful', user });
  } catch (error) {
    console.error(error.message,"IIIII");
    res.status(401).json({ message: error.message });
  }
}

async function signupUser(req, res) {
    const {fullName, email, password } = req.body;
    console.log(fullName,email,password,'CRED')
  
    try {
      if (!fullName || !email || !password) {
        return res.status(400).json({ message: 'All fields are mandatory!' });
      }
  
      const user = await userService.authenticateSignup(fullName,email, password);
      
  
      res.json({ status:200,message: 'Signup successful'});
    } catch (error) {
      console.error(error.message,"IIIII");
      res.json({status:401, message: error.message });
    }
  }

  async function logoutUser(req, res) {
    console.log('MEHH')
    req.session.destroy((err) => {
      if (err) {
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.clearCookie("session-id"); 
        res.json({ message: 'Logout successful' });
      }
    });
  };

  async function checkSession(req, res) {
    if (req.session._id) {
      console.log("logged in");
     // return res.status(200).send(req.session.email1);
      return res.json({ valid: true, _id: req.session._id ,fullName:req.session.fullName });
    } else {
      console.log("dhccchs");
      return res.json({valid: false});
    }
  };

module.exports = {
  loginUser,
  signupUser,
  logoutUser,
  checkSession
};
