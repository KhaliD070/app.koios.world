import { useEffect, useState, useContext, useRef } from "react";

import useSetupOrbit from "../components/Web3/useSetupOrbit";
import orbitContext from "../Context/orbitContext";
import { useIpfs } from "../providers/IpfsProvider";

export const OrbitProvider = ({ children }) => {
  const { ipfs } = useIpfs();
  const { ipfsLoaded } = useIpfs();
  const [orbit] = useSetupOrbit(ipfs);
  const orbitLoaded = useRef(false);
  const [value1, setValue1] = useState({ orbit, orbitLoaded });

  useEffect(() => {
    if (ipfsLoaded.current && orbit) {
      setValue1({ orbit, orbitLoaded });
      ipfsLoaded.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ipfs, orbit]);
  return (
    <orbitContext.Provider value={value1}>{children}</orbitContext.Provider>
  );
};

export const useOrbit = () => {
  const context = useContext(orbitContext);
  if (context === undefined) {
    throw new Error("use Ipfs must be used within a ipfsProvider");
  }
  return context;
};
