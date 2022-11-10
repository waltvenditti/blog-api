const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  author: { type: String },
  date_and_time_published: { type: Date },
  content: { type: String },
  // which article is this a comment on
  //article: { type: Schema.Types.ObjectId, ref: "Article" },
})

module.exports = mongoose.model("Comment", commentSchema);