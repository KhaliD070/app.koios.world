import { useEffect, useState} from "react";
import useIpfs from "./useIpfs";
import useOrbit from "./useOrbit";
import IPFS_CONFIG from "./ipfs-config";

const useOrbitDb = (address, options = {}) => {
  const [ipfs] = useIpfs(IPFS_CONFIG)
  const [orbit] = useOrbit(ipfs)
  const [records, setRecords] = useState(null);
  const [orbitDb, setDb] = useState(null);
  useEffect(() => {
    if (orbitDb) return;
    if (!address) return;

    const createDb = async () => {
      const allOptions = {
        indexBy: "course",
        create: false,
        type: "keyvalue",
        overwrite: false,
        accessController: {write: ["*"]},
      };
      const db = await orbit.open(address, allOptions);
      const refreshDb = async () => {
        await db.load();
        if (!orbitDb) {
          setDb(db);
        }
        if (db.type === "keyvalue") {
          setRecords({ ...(db.all || {}) });
        } else if (db.type === "eventlog") {
          const allEvents = await db
            .iterator({ limit: -1 })
            .collect()
            .map((e) => e.payload.value);
          setRecords([...allEvents] || []);
        } else if (db.type === "docstore") {
          setRecords(db.query(() => true));
        }
      };

      db.events.on("replicate", (address) => {
        //refreshDb();
      });

      db.events.on("replicated", (address) => {
        refreshDb();
      });

      db.events.on("write", (address) => {
        refreshDb();
      });
      await refreshDb();
    };
    if (orbit) {
      createDb();
    }
    return () => {
      if (orbitDb) {
        orbitDb.close();
      }
    };
    // eslint-disable-next-line
  }, [orbit, address, options]);

  const state = { orbit, db: orbitDb, records };
  return state;
};

export default useOrbitDb;