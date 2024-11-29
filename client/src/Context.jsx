import { createContext, useEffect, useState } from "react";

import { fetchAllTables } from "./api/api";

export const Context = createContext(null);

export function ContextProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      setData(await fetchAllTables());
    })();
  }, []);

  return (
    <Context.Provider value={{ data, setData }}>{children}</Context.Provider>
  );
}
