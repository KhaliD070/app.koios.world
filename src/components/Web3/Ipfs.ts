// import useIpfs from "./useIpfs";
import IPFS_CONFIG from "./ipfs-config";
import IPFS from "ipfs";

//const ipfsHttpClient = require('ipfs-http-client')
//const ipfs = ipfsHttpClient('https://ipfs.infura.io:5001');

const ipfs = IPFS.create(IPFS_CONFIG)

const ipfsprefix1 = "https://ipfs.io/ipfs/"
const ipfsprefix2 = "ipfs://ipfs/"
const ipfsprefix3 = "ipfs://"

const stripipfsprefix = (cid) => {
  if (cid.includes(ipfsprefix1)) {
    cid = cid.replace(ipfsprefix1, "");// just keep the cid
  }
  if (cid.includes(ipfsprefix2)) {
    cid = cid.replace(ipfsprefix2, "");// just keep the cid
  }
  if (cid.includes(ipfsprefix3)) {
    cid = cid.replace(ipfsprefix3, "");// just keep the cid
  }
  return cid;
}

export const FetchImage = async (hash: string) => {
  hash = stripipfsprefix(hash)
  let ui8arr: any = [];
  await ipfs
  // @ts-ignore
  for await (const result of ipfs.cat(hash)) {
    ui8arr.push(result);
  }
  let blob = new Blob(ui8arr, { type: "image/jpeg" });
  let url = URL.createObjectURL(blob);
  return url;
}

export const FetchJson = async (hash: string) => {
  hash = stripipfsprefix(hash);
  let str="";
  await ipfs
  // @ts-ignore
  for await (const result of ipfs.cat(hash)) {
    str += String.fromCharCode.apply(null, result);
  }

  if (str === "") {
    return undefined
  } 

  let json = JSON.parse(str);
  return json;
}