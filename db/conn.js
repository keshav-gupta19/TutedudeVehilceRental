const mongoose = require("mongoose");

const DB = process.env.DATABASE;
// console.log(DB);

mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DataBase Connected"))
  .catch((errr) => {
    console.log(errr);
  });
