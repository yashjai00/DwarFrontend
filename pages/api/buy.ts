import type { NextApiRequest, NextApiResponse } from 'next';
import { addWarranty, getUser } from '../../utils/mongo';
import { mintNFT } from '../../utils/NFThelpers';
import pinToIpfs from '../../utils/pinata';
import { products } from '../../data/product';

type Body = {
  userID: string;
  productID: number;
  isWallet: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(400).json({ message: 'Bad request' });
    return;
  }

  const { productID, userID, isWallet } = req.body as Body;
  let wallet = process.env.WALLET_ADDRESS as string;

  if (!wallet) throw new Error('Default Wallet not found in .env');

  if (isWallet) {
    wallet = userID;
  } else {
    const user = await getUser(userID);
    if (user && user.wallet) wallet = user.wallet;
  }
  // generate 5 digit random integer
  const serialNo = Math.floor(10000 + Math.random() * 90000);
  const product = products.find((p) => p.id === productID);

  console.log(product);

  if (!product) throw new Error('Product not found');

  const jsonToPin = {
    uid: product.id + serialNo,
    product_type: product.id,
    warrantyDuration: product.warrantyDuration,
  };

  console.log(jsonToPin);

  const hash = await pinToIpfs(jsonToPin);
  console.log(hash);

  const productSerial: string = productID.toString() + serialNo.toString();

  console.log('productSerial', wallet);
  mintNFT(productSerial, wallet, hash);

  addWarranty(userID, productSerial);
  res.status(200).json({ productSerial, ipfsHash: hash });
}
