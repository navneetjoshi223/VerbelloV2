const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const qnaSchema = new Schema(
  { lesson:String,
    question: String,
    options: [
      { type: String, isAnswer: Boolean },
      { type: String, isAnswer: Boolean },
      { type: String, isAnswer: Boolean },
      { type: String, isAnswer: Boolean },
    ],
  },
  {
    timestamps: true,
  }
);

const QuizFrench = mongoose.model("FrenchQuiz", qnaSchema,"FrenchQuiz");
const QuizSpanish = mongoose.model("SpanishQuiz", qnaSchema,"SpanishQuiz");
const QuizGerman = mongoose.model("GermanQuiz", qnaSchema,"GermanQuiz");
const QuizItalian = mongoose.model("ItalianQuiz", qnaSchema,"ItalianQuiz");
const QuizPortuguese = mongoose.model("PortugueseQuiz", qnaSchema,"PortugueseQuiz");

module.exports = {QuizFrench,QuizSpanish,QuizGerman, QuizItalian, QuizPortuguese};
