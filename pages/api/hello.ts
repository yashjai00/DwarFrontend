// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import pinToIpfs from "../../utils/pinata";
import {provider, signer, ContractWithSigner} from "../../utils/ether";

type Data = {
  name: string;
  // bal: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // if (req.method !== "POST") return;
  const body = req.body;
  console.log(body);

  // pinToIpfs(body).then(console.log);
  res.status(200).json({ name: "John Doe" });
}
