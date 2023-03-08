import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URI, {})
    .then(() => console.log('DB connected'.green.inverse))
    .catch((err) => console.log('DB Error => '.red.inverse, err));
};

export default connectDB;
