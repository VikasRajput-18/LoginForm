import React from "react";
import "./Main.css";
import "antd/dist/antd.css";
import Login from "./Login";

const Main = () => {
  
  return (
    <main className="main-container d-flex justify-content-between">
      <section className="login-section d-flex flex-column justify-content-center items-center">
        <div className="login-page mx-auto">
          <h1 className="text-center fw-bold" style={{ color: "#002F46" }}>
            Welcome Back
          </h1>
          <p className="text-center text-muted" style={{ color: "#002F46" }}>
            Sub-title text goes here
          </p>
          <Login/>
          
        </div>
      </section>

      <section className="image-section">
        <img src="/images/img.jpg" className="img-fluid" alt="" />
      </section>
    </main>
  );
};

export default Main;
