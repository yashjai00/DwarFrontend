import { ethers } from 'ethers';
import { Contract, ContractWithSigner } from './ether';

async function mintNFT(
  serialNo: string,
  ownerWallet: string,
  IPFShash: string
) {
  if (!ethers.utils.isAddress(ownerWallet))
    throw new Error('Invalid wallet address');

  console.log({ serialNo, ownerWallet, linkIPFS: IPFShash });

  try {
    await ContractWithSigner.safeMint(ownerWallet, serialNo, IPFShash);
  } catch (error) {
    console.log('🔥 Error');
  }
}

async function listNFTs(address: string) {
  const number = await Contract.balanceOf(address);
  const listNFTs: string[] = [];
  for (let i = 0; i < number; i++) {
    const tokenID = await Contract.tokenOfOwnerByIndex(address, i);
    const tokenURI = await Contract.tokenURI(tokenID);
    listNFTs.push(tokenURI);
  }
  return listNFTs;
}

async function getTokenURIs(tokenIDs: string[]) {
  const tokenURIs = [];
  for (let i = 0; i < tokenIDs.length; i++) {
    const tokenURI = Contract.tokenURI(tokenIDs[i]);
    tokenURIs.push(tokenURI);
  }

  return await Promise.all(tokenURIs);
}

export { mintNFT, listNFTs, getTokenURIs };
