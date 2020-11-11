import React from "react";
import "./App.css";
import DropdownComponent from "./app/DropdownComponent/DropdownComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className="header-text">LOGO</span>
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
        <button className="header-button">GET APPROVED</button>
      </header>
      <main>MAIN</main>
      <footer>FOOTER </footer>
    </div>
  );
}

export default App;
