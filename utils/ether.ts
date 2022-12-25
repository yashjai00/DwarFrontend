import { ethers } from 'ethers';
import ABI from '../artifacts/contracts/Warranty.sol/DecentralizedWarranty.json';

const CONTRACT_ADDRESS: string = process.env.CONTRACT_ADDRESS || '';
const SHM_PRIVATE_KEY: string = process.env.SHM_PRIVATE_KEY || '';

const provider = new ethers.providers.JsonRpcProvider(
  `https://liberty20.shardeum.org/`
);

const signer = new ethers.Wallet(SHM_PRIVATE_KEY, provider);

const Contract = new ethers.Contract(CONTRACT_ADDRESS, ABI.abi, provider);

const ContractWithSigner = Contract.connect(signer);

export { provider, signer, Contract, ContractWithSigner };
