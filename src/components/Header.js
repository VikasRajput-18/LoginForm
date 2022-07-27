import React from "react";
import "./Header.css";
import "antd/dist/antd.css";

import { Button } from "antd";

const Header = () => {
  return (
    <nav className="shadow-sm py-3 bg-white">
      <div className="container d-flex  align-items-center justify-content-between mx-auto ">
        <h2 className="fw-bold logo">
          ATools <span className="text-danger">.</span>
        </h2>
        <div className=" d-flex gap-3">
          <Button
            style={{ background: "#002F46" }}
            className="btn login-btn text-white px-5 py-2"
            size="large"
          >
            Start Free Trial
          </Button>
          <Button
            style={{ background: "#FB8500" }}
            className="btn login-btn text-white px-5 py-2"
            size="large"
          >
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
