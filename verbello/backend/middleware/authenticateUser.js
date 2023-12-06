// middleware/authenticateUser.js
const authenticateUser = (req, res, next) => {
  console.log('Checking')
  console.log(req.session,'SESSION')
    if (req.session && req.session.user) {
      // User is authenticated
      console.log('valid user')
      next();
    } else {
      // User is not authenticated
      res.status(401).json({ error: 'Unauthorized' });
    }
  };
  
  module.exports = authenticateUser;