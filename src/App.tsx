import "./App.css";
import DropdownComponent from "./app/DropdownComponent/DropdownComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className="button">LOGO</span>
        <a className="button" href="https://canadapproval.com/">
          HOME
        </a>
        <DropdownComponent></DropdownComponent>
        <a
          className="button"
          href="https://canadapproval.com/common-questions-asked/"
        >
          FAQ
        </a>
        <DropdownComponent></DropdownComponent>
        <DropdownComponent></DropdownComponent>
        <a href="https://canadapproval.com/blog/" className="button">
          BLOG
        </a>
        <button className="button">GET APPROVED</button>
      </header>
      <main>MAIN</main>
      <footer>FOOTER </footer>
    </div>
  );
}

export default App;
