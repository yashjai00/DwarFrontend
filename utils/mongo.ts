import mongoose from 'mongoose';
import dbConnect from '../utils/mongoose';
import User from '../models/user';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/warranty';

// try {
//   mongoose.connect(uri, () => {
//     console.log(" Mongoose is connected");
//     // const temp = mongoose.model("temp", userSchema);
//     // temp.findOne().then(console.log);
//   });
// } catch (e) {
//   console.log("could not connect");
//   throw e;
// }

//create user model
async function getUser(userID: string) {
  await dbConnect();
  //where id = userID or wallet = userID
  const res = await User.find({ $or: [{ id: userID }, { wallet: userID }] });
  if (res.length === 0) return null;
  if (res.length > 1) throw new Error('Multiple users with same id or wallet');

  return res[0];
}

async function createUser(userID: string, isWallet: boolean) {
  await dbConnect();

  // if (await getUser(userID)) throw new Error("User already exists");
  await User.create({
    id: userID,
    wallet: isWallet ? userID : null,
    warranties: [],
  });
}
async function addWarranty(userID: string, warrantyID: string) {
  await dbConnect();
  const user = await getUser(userID);
  if (!user) throw new Error('User does not exist');
  user.warranties.push(warrantyID);
  await user.save();
}
async function updateWallet(userID: string, wallet: string) {
  await dbConnect();

  const user = await getUser(userID);
  if (!user) throw new Error('User does not exist');
  user.wallet = wallet;
  await user.save();
}
export { getUser, createUser, addWarranty, updateWallet };
