import { Core } from '@self.id/core';
import { getLegacy3BoxProfileAsBasicProfile } from '@self.id/3box-legacy';

// Connect to clay testnet - change to mainnet once live
const core = new Core({ ceramic: 'testnet-clay' });

export const FindProfile = async (address: string) => {
  try {
    const accountdid = await core.getAccountDID(address);
    let profile = await core.get('basicProfile', accountdid);
    if (!profile) {
      profile = await getLegacy3BoxProfileAsBasicProfile(address);
      console.log("Switch to new profile using 'edit profile'");
    }
    let profilename: string = profile.name ? profile.name : address;
    let picturesource;
    if (profile.image) {
      console.log("image: ", profile.image);
      picturesource = profile.image.original.src;
    }
    let entry = { "name": profilename, "image": picturesource };
    return entry;
  }
  catch {
    console.error("Profile not found");
  }
}