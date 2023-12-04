const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const qnaSchema = new Schema(
  {
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

const QnA = mongoose.model("QnA", qnaSchema);

module.exports = QnA;
