import { useContext } from "react";

import { Context } from "../Context";

import "./Dashboard.css";

export default function Dashboard() {
  const { user } = useContext(Context);

  return (
    <>
      {user.role === "administrator" && <div>adminstrator</div>}
      {user.role === "instructor" && <div>Instructor</div>}
      {user.role === "student" && <div>Student</div>}
    </>
  );
}
