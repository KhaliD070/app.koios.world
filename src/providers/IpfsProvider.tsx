import { useEffect, useState, useContext, useRef } from "react";

import useIpfsSetup from "../components/Web3/useIpfsSetup";
import ipfsContext from "../Context/ipfsContext";
import IPFS_CONFIG from "../components/Web3/ipfs-config";

export const IpfsProvider = ({ children }) => {
  const [ipfs] = useIpfsSetup(IPFS_CONFIG);
  const ipfsLoaded = useRef(false);
  const [value1, setValue1] = useState({ ipfs, ipfsLoaded });

  useEffect(() => {
    if (ipfs) {
      setValue1({ ipfs, ipfsLoaded });
      ipfsLoaded.current = true;
    }
  }, [ipfs]);
  return <ipfsContext.Provider value={value1}>{children}</ipfsContext.Provider>;
};

export const useIpfs = () => {
  const context = useContext(ipfsContext);
  if (context === undefined) {
    throw new Error("use Ipfs must be used within a ipfsProvider");
  }
  return context;
};
