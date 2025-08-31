import { useNavigate } from "react-router-dom";
import "../App.css";
import logo from "/images/logo white.png";
import { hoverMenu } from "../pages/HomePage/HomePage";

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
      <a id="logo" onClick={() => relocate("/")}>
        <img src={logo} alt="Logo" />
      </a>
      <div className="links">
        <a onClick={() => relocate("/work")}>work</a>
        <a target="_blank" href="https://th-archive.github.io/">
          archive
        </a>
        <a
          id="mobile-contact"
          target="_blank"
          href="mailto:tiffanyhuang1258@gmail.com"
        >
          contact
        </a>
        <a
          id="desktop-contact"
          onMouseOver={() => hoverMenu("hover", "addlink")}
          onMouseOut={() => hoverMenu("out", "addlink")}
        >
          contact
        </a>
        <a
          target="_blank"
          href="mailto:tiffanyhuang1258@gmail.com"
          className="hidden addlink"
          onMouseOver={() => hoverMenu("hover", "addlink")}
          onMouseOut={() => hoverMenu("out", "addlink")}
        >
          email
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/tiffanyhuang1258"
          className="hidden addlink"
          onMouseOver={() => hoverMenu("hover", "addlink")}
          onMouseOut={() => hoverMenu("out", "addlink")}
        >
          linkedin
        </a>
        <a
          target="_blank"
          href="https://instagram.com/relatiffity"
          className="hidden addlink"
          onMouseOver={() => hoverMenu("hover", "addlink")}
          onMouseOut={() => hoverMenu("out", "addlink")}
        >
          instagram
        </a>
      </div>
      <div className="piece-preview">
        <div className="piece-preview-year"></div>
        <div className="piece-preview-title"></div>
        <img className="piece-preview-image" />
        <div className="piece-preview-description"></div>
      </div>
    </nav>
  );
}
