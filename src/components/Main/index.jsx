import React from "react";

export const Main = () => {
  return (
    <>
    <div className="containerMain">
      <main>
        <h2 className="titleLogin">login</h2>
        <input type="text" placeholder="User/Email" />
        <input type="password" placeholder="Password" />
        <button className="sigIng">Sing in</button>
        <a href="#">Forgot password?</a>
      </main>
      </div>
    </>
  );
};
export default Main;