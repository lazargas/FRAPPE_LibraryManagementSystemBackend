import mongoose from "mongoose";


const Connection = async () => {
  const URL = 'mongodb+srv://lazargas09:nPC7bm3A69m0kvRf@cluster0.no7mymb.mongodb.net/?retryWrites=true&w=majority';
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database Connected Succesfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export default Connection;