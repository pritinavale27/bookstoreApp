import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";


import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"

const app = express();

app.use(cors());
app.use(express.json())

dotenv.config();

const PORT = process.env.PORT || 4000;
const URL = process.env.MongoDBURL;

// connect to the Mongodb
try{
  mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("connected to mongoDB");
}catch(error){
  console.log("Error: ",error)
}

// defining routes
app.use("/book",bookRoute); 
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})
