import { createContext, useState, useEffect } from "react";

export const Context = createContext(null);
import { profile } from "./api/authentication";

export function ContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("user:", user);
    (async () => {
      const user = await profile();
      setUser(user);
    })();
  }, []);

  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
}
