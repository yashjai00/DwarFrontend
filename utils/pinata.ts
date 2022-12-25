import pinataSDK from '@pinata/sdk';
const pinataJWTKey = process.env.PINATA_JWT_KEY;
const pinata = new pinataSDK({ pinataJWTKey });

async function pinToIpfs(toPin: any) {
  const { IpfsHash } = await pinata.pinJSONToIPFS(toPin);
  return IpfsHash;
}

export default pinToIpfs;
