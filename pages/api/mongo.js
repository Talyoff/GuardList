import mongoose from 'mongoose';
require('dotenv').config();

const connectDB = async () => {

  const mongo_user = "yoffetal"
  const mongo_pass = "SspbTaSi8z5oB8VX"
  const mongo_host_port = "cluster0.vi4mvlp.mongodb.net"
  const mongo_db = "gaurdinglist?retryWrites=true&w=majority"

  console.log(mongo_user)
  console.log(mongo_pass)
  try {
    const uri = `mongodb+srv://${mongo_user}:${mongo_pass}@${mongo_host_port}/${mongo_db}`;
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('MongoDB disconnection error:', error);
  }
};

export default async function handle(req, res) {

  await connectDB();

}

export { connectDB, disconnectDB };
