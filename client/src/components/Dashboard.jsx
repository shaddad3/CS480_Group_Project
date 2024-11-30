import { useContext } from "react";

import { Context } from "../Context.jsx";

import "./Dashboard.css";

export default function Dashboard() {
  const { user } = useContext(Context);

  console.log("User:", user);

  return <div>Dashboard</div>;
}
