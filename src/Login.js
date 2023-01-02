import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/user";
import { useState } from "react";
import { useSelector } from "react-redux";

function Login() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.value);
  return (
    <div>
      {!userInfo.name && (
        <div>
          {" "}
          <h1 style={{ padding: "50px" }}>Update Details</h1>
          <label>Enter the Name: </label>
          <input
            type="text"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
          <br />
          <br />
          <label>Enter the Age: </label>
          <input
            type="number"
            onChange={(event) => setAge(event.target.value)}
            value={age}
          />
          <br />
          <br />
          <label>Enter the Email: </label>
          <input
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          <br />
          <br />
        </div>
      )}

      {!userInfo.name ? <button onClick={() => dispatch(login({ name, age, email }))}>
        Login
      </button>:
      <button onClick={() => dispatch(logout())} style={{ marginLeft: "15px" }}>
        Logout
      </button>}
    </div>
  );
}

export default Login;
