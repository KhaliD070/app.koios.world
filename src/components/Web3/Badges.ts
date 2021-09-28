import { selectedAccount } from "./Web3";
import { FetchImage, FetchJson } from "./Ipfs";

const GetBadges = async () => {
  const query = `
    {
      users (first: 1000){
        id
        tokens {
          id
          contentURI
        }
      }
    }
  `;
  const URL = "https://api.thegraph.com/subgraphs/name/corwin96/koios-badges";
  let body = JSON.stringify({ query: query });
  var res = await fetch(URL, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: body,
  });
  var json = await res.json();
  return json;
};

const BadgesJson = async (ipfs: any) => {
  let resultArray: any = [];
  const badgeHolders = await GetBadges();
  for (let user of badgeHolders.data.users) {
    if (selectedAccount) {
      if (selectedAccount.toLowerCase() === user.id) {
        let limit = user.tokens.length;
        if (user.tokens.length > 3) limit = 3;
        for (let i = 0; i < limit; i++) {
          let entry = await FetchJson(ipfs, user.tokens[i].contentURI);
          resultArray.push(entry);
        }
      }
    }
  }
  return resultArray;
};

export const ShowBadges = async (ipfs: any) => {
  const badgesJson = await BadgesJson(ipfs);
  let resultArray: any = [];
  for (let badges of badgesJson) {
    let entry = { name: badges.name, image: await FetchImage(ipfs, badges.image) };
    resultArray.push(entry);
  }
  return resultArray;
};
