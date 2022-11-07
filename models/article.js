const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String },
  date_and_time_published: { type: Date },
  content: { type: String },
  published: { type: Boolean },
  // array of comment objects
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
})

module.exports = mongoose.model("Article", articleSchema);