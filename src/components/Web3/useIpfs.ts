import { useEffect, useState } from "react";
import IPFS from "ipfs";


// window.ipfsLoaded hack to keep a global ipfs instance
const useIpfs = (config) => {
  const [ipfs, setIpfs] = useState(null);

  useEffect(() => {
    const ipfsInit = async () => {
      if (typeof window !== "undefined" && (window as any).ipfsLoaded) {
        setIpfs((window as any).ipfsLoaded);
        return;
      }
      const ipfs = await IPFS.create(config);
      if (typeof window !== "undefined") (window as any).ipfsLoaded = ipfs;
      const peerId = (await ipfs.id()).id;
      console.log(peerId)
      setIpfs(ipfs);
    };
    ipfsInit();
    return () => {
      if (ipfs) {
        ipfs.stop();
      }
    };
  }, [ipfs, config]);

  return [ipfs];
};

export default useIpfs;