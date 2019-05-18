const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const { Schema } = mongoose;

// MongoDB does not require a schema, but mongoose does. Set the
// Scehema object here
const userSchema = new Schema(
  {
    _id: Number,
    name: String,
    subHeading: String,
    email: String,
    phone: String,
    bio: String,
    githubID: String
  },
  { _id: false }
);

userSchema.plugin(AutoIncrement, { collection_name: "userCounter" });

// Tell mongodb to create a model named users
mongoose.model("users", userSchema);
