const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lessonsSchema = new Schema(
  {
    lesson: String,
    imageUrl: String,
    text: String,
    englishTranslation: String,
    description: String
  },
  {
    timestamps: true,
  }
);

const LessonSpanish = mongoose.model("SpanishLesson", lessonsSchema,"SpanishLesson");
const LessonFrench = mongoose.model("LessonFrench", lessonsSchema,"LessonFrench");
const LessonGerman = mongoose.model("LessonGerman", lessonsSchema,"LessonGerman");
const LessonItalian = mongoose.model("LessonItalian", lessonsSchema,"LessonItalian");
const LessonPortuguese = mongoose.model("LessonPortuguese", lessonsSchema,"LessonPortuguese");


module.exports = {LessonSpanish, LessonFrench, LessonGerman, LessonItalian, LessonPortuguese};
