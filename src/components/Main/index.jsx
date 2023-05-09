import React from "react";
import "./index.css";

export const Main = () => {
  return (
    <div className="containerMain">
      <main className="main">
        <h2 className="titleLogin">login</h2>
        <input className="input" type="text" placeholder="User/Email" />
        <input className="input" type="password" placeholder="Password" />
        <a className="forgotPassword" href="#">
          Forgot password?
        </a>
        <button className="sigIng">Sing in</button>
        <p className="singupNow">
          Create an account <a href="#">Singup now</a>
        </p>
      </main>
    </div>
  );
};
export default Main;
