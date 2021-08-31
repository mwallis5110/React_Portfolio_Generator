const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/_____FILL THIS IN_________",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
