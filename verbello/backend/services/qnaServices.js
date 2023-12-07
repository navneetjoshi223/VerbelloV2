const bcrypt = require("bcrypt");
const { French, Spanish, German } = require("../models/QnA");




async function getQuizData(language,lesson) {
    if(language==="Spanish"){
        return Spanish.find({ lesson:lesson }).lean();;
    }
    else if(language==="French"){
        return French.find({ lesson:lesson });
    }
    else{
        throw new Error('Language not found');
    }
  }

//   async function getLessonData(language,lesson) {
//     if(language==="Spanish"){
//         return SpanishQuiz.find({ lesson:lesson });
//     }
//     else if(language==="French"){
//         return FrenchQuiz.find({ lesson:lesson });
//     }
//     else{
//         throw new Error('Language not found');
//     }
//   }



module.exports = {

    getQuizData
};
