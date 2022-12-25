// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { listNFTs } from '../../utils/NFThelpers';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
  }
  console.log("boddy : ", req.body);
  const address = req.body.address;

  console.log(address);

  const list: string[] = await listNFTs(address);
  res.status(200).json(list);
}
