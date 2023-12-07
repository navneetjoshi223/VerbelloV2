const qnaService = require('../services/qnaServices');

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

async function fetchQuestion(req, res) {
  const { language,lesson } = req.query;
  console.log(language,lesson,'CRED')
  try {
    const quizData = await qnaService.getQuizData(language,lesson)
    res.json({status:200, data:quizData });
  } catch (error) {
    console.error(error.message,"IIIII");
    res.status(401).json({ message: error.message });
  }
}

async function fetchLesson(req, res) {
  const { language,lesson } = req.query;
  console.log(language,lesson,'CRED')
  try {
    const lessonData = await qnaService.getLessonData(language,lesson)
    res.json({status:200, data:lessonData });
  } catch (error) {
    console.error(error.message,"IIIII");
    res.status(401).json({ message: error.message });
  }
}

module.exports = {
  check,fetchQuestion, fetchLesson
};
