const { QuizFrench, QuizSpanish, QuizGerman, QuizItalian, QuizPortuguese } = require("../models/QnA");
const { LessonSpanish, LessonFrench, LessonGerman, LessonItalian, LessonPortuguese} = require("../models/LessonsModel");


// .lean() is intentional — options use 'type' as a field name which
// conflicts with Mongoose schema syntax, so we skip hydration to Mongoose documents and return plain JavaScript objects instead.
async function getQuizData(language,lesson) {
    if(language==="Spanish"){
        return QuizSpanish.find({ lesson:lesson }).lean();
    }
    else if(language==="French"){
        return QuizFrench.find({ lesson:lesson }).lean();
    }
    else if(language==="German"){
        return QuizGerman.find({ lesson:lesson }).lean();
    }
    else if(language==="Italian"){
        return QuizItalian.find({ lesson:lesson }).lean();
    }
    else if(language === "Portuguese") {
        return QuizPortuguese.find({ lesson: lesson }).lean();
    }
    else{
        throw new Error('Language not found');
    }
  }

  async function getLessonData(language,lesson) {
    console.log('getLessonData called with params: ', language);
    if(language==="Spanish"){
        return LessonSpanish.find({ lesson:lesson }).lean();
    }
    else if(language==="French"){
        return LessonFrench.find({ lesson:lesson }).lean();
    }
    else if(language === "German") {
        return LessonGerman.find({lesson: lesson}).lean();
    }
    else if(language === "Italian") {
        return LessonItalian.find({lesson: lesson}).lean();
    }
    else if(language === "Portuguese") {
        return LessonPortuguese.find({ lesson: lesson }).lean();
    }
    else{
        throw new Error('Language not found');
    }
  }



module.exports = {
    
    getQuizData,
    getLessonData
};
