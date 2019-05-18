const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const { Schema } = mongoose;

const projectSchema = new Schema({
  id: Number,
  name: String,
  github: String,
  hosted: String,
  tags: [],
  description: String,
  timeframe: String,
  _user: { type: Schema.Types.ObjectId, ref: "User" }
});

projectSchema.plugin(AutoIncrement, {
  inc_field: "id",
  collection_name: "projectCounter"
});

mongoose.model("projects", projectSchema);
