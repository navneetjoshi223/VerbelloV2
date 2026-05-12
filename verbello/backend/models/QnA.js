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

const French = mongoose.model("FrenchQuiz", qnaSchema,"FrenchQuiz");
const Spanish = mongoose.model("SpanishQuiz", qnaSchema,"SpanishQuiz");
const German = mongoose.model("GermanQuiz", qnaSchema,"GermanQuiz");
const Italian = mongoose.model("ItalianQuiz", qnaSchema,"ItalianQuiz");
const Portuguese = mongoose.model("PortugueseQuiz", qnaSchema,"PortugueseQuiz");

module.exports = {French,Spanish,German, Italian, Portuguese};
