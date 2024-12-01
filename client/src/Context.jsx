import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

export const Context = createContext(null);
import { fetchUser } from "./api/api";

export function ContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("ContextProvider useEffect");
    console.log(user);
    (async () => {
      const user = await fetchUser();
      setUser(user);
    })();
  }, []);

  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
}
