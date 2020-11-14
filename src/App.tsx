import React from "react";
import "./App.css";
import DropdownComponent from "./app/DropdownComponent/DropdownComponent";

function App() {
  return (
    <div className="App">
      <div className="ca-global-header">
        <div className="ca-global-header-inner">
          <div className="ca-logo">
            <a href="https://canadapproval.com/">
              <img src="app/ca_logo.PNG"></img>
            </a>
            <span>LOGO</span>
          </div>
          <div className="ca-nav">
            <a className="header-text" href="https://canadapproval.com/">
              HOME
            </a>
            <DropdownComponent></DropdownComponent>
            <a
              className="header-text"
              href="https://canadapproval.com/common-questions-asked/"
            >
              FAQ
            </a>
            <DropdownComponent></DropdownComponent>
            <DropdownComponent></DropdownComponent>
            <a href="https://canadapproval.com/blog/" className="header-text">
              BLOG
            </a>
            <div className="">
              <a className="ca-nav-button">GET APPROVED</a>
            </div>
          </div>
        </div>
      </div>

      <main>MAIN</main>
      <footer>FOOTER </footer>
    </div>
  );
}

export default App;
