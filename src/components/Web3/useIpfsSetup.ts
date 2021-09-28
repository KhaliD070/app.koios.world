import { useEffect, useState, useDebugValue } from "react";
import IPFS from "ipfs";


// window.ipfsLoaded hack to keep a global ipfs instance
const useIpfsSetup = (config) => {
  const [ipfs, setIpfs] = useState(null);

  useEffect(() => {
    const ipfsInit = async () => {
      if (!ipfs) {
      const ipfsObj = await IPFS.create(config);
      setIpfs(ipfsObj);
      //const peerId = (await ipfs.id()).id;
      //console.log(peerId)
      }
    };
    ipfsInit();
  }, [ipfs, config]);

  useDebugValue(ipfs ?? 'Loading...');

  return [ipfs];
};

export default useIpfsSetup;