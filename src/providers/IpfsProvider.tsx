import * as React from "react";
import { useEffect, useState, useContext } from "react";

import useIpfsSetup from "../components/Web3/useIpfsSetup";
import ipfsContext from "../Context/ipfsContext";
import IPFS_CONFIG from "../components/Web3/ipfs-config";

export const IpfsProvider = ({ children }) => {
  const [ipfs] = useIpfsSetup(IPFS_CONFIG);
  const [value1, setValue1] = useState({});
  useEffect(() => {
    if (ipfs) {
      setValue1({ ipfs });
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
