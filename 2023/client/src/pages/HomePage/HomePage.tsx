import "../HomePage/HomePage.css";
import "../../App.css";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const relocate = (newLoc: string) => {
    const body: HTMLElement | null = document.querySelector(".homePage");
    if (body) {
      body.classList.remove("fadein");
      body.classList.add("fadeout");
    }
    setTimeout(() => {
      navigate(newLoc);
    }, 1000);
  };

  function hoverMenu(inout: string, menu: string) {
    const menus = document.getElementsByClassName(menu);
    for (let i = 0; i < menus.length; i++) {
      if (inout === "hover") {
        menus[i].classList.remove("hidden");
      } else {
        if (menus[i].classList.contains("spotlight")) {
          menus[i].classList.remove("hidden");
        } else {
          menus[i].classList.add("hidden");
        }
      }
    }
  }

  return (
    <main className="homePage fadein">
      <div id="backgroundvid">
        <video id="background-video" autoPlay loop muted playsInline>
          <source src="/videos/highlight reel 2023.mp4" type="video/mp4" />
        </video>
      </div>
      <div id="background-overlay"></div>
      <nav>
        <div className="nav-links">
          <div id="work-link">
            <a onClick={() => relocate("/work")}>work</a>
          </div>
          <div className="nav-sublinks">
            <a target="_blank" href="https://th-archive.github.io/">
              archive
            </a>
            <a target="_blank" href="mailto:tiffanyhuang1258@gmail.com">
              contact
            </a>
          </div>
        </div>
        <div id="title">
          <h1>TIFFANY</h1>
          <h1>HUANG</h1>
        </div>

        <div className="bio-links">
          <div className="bio">
            <p>
              is an interdisciplinary designer/developer that works at the
              intersection of (2D/3D) design and code. when she is not doing
              work for classes, she is doing work for fun.
            </p>
          </div>
          <div className="link-container">
            <div className="link-container" id="instagram">
              <a
                id="ig"
                target="_blank"
                href="https://www.instagram.com/relatiffity/"
              >
                instagram
              </a>
            </div>
            <div id="version">
              <a
                target="_blank"
                href="https://huang-tiffany.github.io/2021"
                className="hidden ver"
                onMouseOver={() => hoverMenu("hover", "ver")}
                onMouseOut={() => hoverMenu("out", "ver")}
              >
                v. 2021
              </a>
              <a
                target="_blank"
                href="https://huang-tiffany.github.io/2022"
                className="hidden ver"
                onMouseOver={() => hoverMenu("hover", "ver")}
                onMouseOut={() => hoverMenu("out", "ver")}
              >
                v. 2022
              </a>
              <a
                onMouseOver={() => hoverMenu("hover", "ver")}
                onMouseOut={() => hoverMenu("out", "ver")}
              >
                v. 2023
              </a>
            </div>
          </div>
        </div>
      </nav>
    </main>
  );
}
