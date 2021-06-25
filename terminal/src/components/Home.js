import React from "react";
import { auth } from "../firebase";
import AddMatch from "./AddMatch.js";
const Home = () => {
  return (
    <div>
      <h1>Welcome home</h1>
      <AddMatch />
      <p>
        <button onClick={() => auth.signOut()}>Sign out</button>
      </p>
    </div>
  );
};

export default Home;
