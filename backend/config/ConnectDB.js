import mongoose from "mongoose";
import dotenv from "dotenv";

// dotenv.config();
// const ConnectDB = async () => {
//   try {
//     const connect = await mongoose.connect(process.env.MONGO_URI);
//     console.log(`mongoDB connected:`);
//   } catch (erorr) {
//     console.log(error);
//     process.exit(1);
//   }
// };

// export default ConnectDB;

// const startServer = async () => {
//   //this is for start database first
//   try {
//     await ConnectDB();

//     app.listen(5000, () => {
//       console.log(`server started at ${port}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// startServer();
