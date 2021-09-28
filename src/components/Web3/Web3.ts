import Web3 from "web3";
import { web3Modal } from './WalletProvider';
import { FindProfile } from './FindProfile';
import { FetchImage } from "./Ipfs";

export let provider;
export let selectedAccount;
export let selectedProfile;
export let profilePicture;
export let profileName;

const fetchAccountData = async (ipfs: any) => {
  const web3 = new Web3(provider);

  const accounts = await web3.eth.getAccounts();
  selectedAccount = accounts[0];
  selectedProfile = await FindProfile(selectedAccount);
  if (selectedProfile.image) {
    profilePicture = await FetchImage(ipfs, selectedProfile.image);
  }
  if (selectedProfile.name) {
    profileName = selectedProfile.name;
  }
}

export const connectWeb3 = async (ipfs: any) => {
  try {
    provider = await web3Modal.connect();
    if(!selectedAccount)
      await fetchAccountData(ipfs);
  } catch (e) {
    console.log("Could not get a wallet connection", e);
  }
};

export const firstRun = async (ipfs: any) => {
  if (web3Modal.cachedProvider) {
    await connectWeb3(ipfs);
  }
}

export const disconnectWeb3 = async () => {
  if (provider) {
    await web3Modal.clearCachedProvider();
    provider = null;
  }
  localStorage.removeItem(selectedAccount);
  selectedAccount = null;
};
