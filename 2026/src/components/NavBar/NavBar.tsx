import { useNavigate } from "react-router-dom";
import "../../App.css";
import logo from "/images/logo white.png";
import "../NavBar/NavBar.css";

export default function NavBar() {
  const navigate = useNavigate();
  const relocate = (newLoc: string) => {
    const elements: NodeListOf<Element> | null =
      document.querySelectorAll(".fadein");
    if (elements) {
      for (let i = 0; i < elements.length; i++) {
        const elt = elements[i];
        elt.classList.remove("fadein");
        elt.classList.add("fadeout");
      }
    }
    setTimeout(() => {
      navigate(newLoc);
    }, 500);
  };

  return (
    <nav>
      <div id="logo-container">
        <a id="logo" onClick={() => relocate("/")}>
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div id="desktop-name">
        tiffany huang <br /> <p>( design engineer )</p>
      </div>
      <div className="links">
        <a onClick={() => relocate("/work")}>work</a>
        <a
          id="contact"
          target="_blank"
          href="mailto:tiffanyhuang1258@gmail.com"
        >
          contact
        </a>
      </div>
    </nav>
  );
}
