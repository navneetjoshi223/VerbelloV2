const userService = require('../services/qnaServices');

async function check(req, res) {
  // const { email, password } = req.body;
  console.log('GOLI')
  res.json({ message: 'Insidee'});


  // try {
  //   if (!email || !password) {
  //     return res.status(400).json({ message: 'Email and password are required' });
  //   }

  //   const user = await userService.authenticateUser(email, password);

  //   res.json({ message: 'Login successful', user });
  // } catch (error) {
  //   console.error(error.message,"IIIII");
  //   res.status(401).json({ message: error.message });
  // }
}

module.exports = {
  check
};
