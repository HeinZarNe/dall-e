import mongoose from "mongoose";
const conncetDB = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => console.log("Mongo Db connect"))
    .catch((err) => console.log(err));
};

export default conncetDB;
