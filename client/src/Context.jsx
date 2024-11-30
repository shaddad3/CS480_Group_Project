import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

export const Context = createContext(null);
import { User } from "./api/api";

export function ContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("ContextProvider useEffect");

    (async () => {
      const token = Cookies.get("auth_token");
      if (token) {
        const user = await User(token);

        console.log("User:", user);
        setUser(user);
      }
    })();
  }, []);

  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
}
