import React, { useState } from "react";
import firebase from "../lib/firebase";
//import auth from "../lib/firebase";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../constants/routes";

export default function Login() {
  const history = useHistory();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    //firebase stuff
    return firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then((user) => {
        //push to browse page means => if ' then ' is success, go to the Home page
        console.log("inside then", user);
        history.push(ROUTES.HOME);
      })
      .catch((error) => {
        setEmailAddress("");
        setPassword("");
        setError(error.message);
        console.log("insdie catch");
      });
  };

  return (
    <>
      <form onSubmit={handleLogin} method="POST">
        <h1>Login or Signup</h1>
        <input
          type="text"
          placeholder="email address"
          onChange={({ target }) => setEmailAddress(target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <button type="submit">Continue</button>
      </form>
    </>
  );
}
