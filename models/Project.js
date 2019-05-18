const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence");

const { Schema } = mongoose;

const projectSchema = new Schema(
  {
    _id: { type: Number, default: 0 },
    name: String,
    github: String,
    hosted: String,
    tags: [],
    description: String,
    timeframe: String,
    _user: { type: Schema.Types.ObjectId, ref: "User" }
  },
  { _id: false }
);

projectSchema.plugin(AutoIncrement);

mongoose.model("projects", projectSchema);
