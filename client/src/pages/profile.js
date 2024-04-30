import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const profile = () => {
  return (
    <div style={{ alignItems: "center", justifyContent: "center" }}>
      <h1>Login as:</h1>
      <Link to="/login">
        <button>User</button>
      </Link>
      <Link to="/adminlogin">
        <button>Admin</button>
      </Link>
    </div>
  );
};

export default profile;
