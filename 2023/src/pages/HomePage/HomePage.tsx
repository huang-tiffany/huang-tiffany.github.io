import "../HomePage/HomePage.css";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import bgVid from "../../../../2022/videos/reel hd.mp4";

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
        if (menu.includes("featured")) {
          menus[i].classList.add("hover");
        }
      } else {
        if (menus[i].classList.contains("spotlight")) {
          menus[i].classList.remove("hidden");
        } else {
          menus[i].classList.add("hidden");
          if (menu.includes("featured")) {
            menus[i].classList.remove("hover");
          }
        }
      }
    }
  }

  return (
    <main className="homePage fadein">
      <div id="backgroundvid">
        <video id="background-video" autoPlay loop muted playsInline>
          <source src={bgVid} type="video/mp4" />
        </video>
        <video id="background-video-lg" autoPlay loop muted playsInline>
          <source src={bgVid} type="video/mp4" />
        </video>
      </div>
      <div id="background-overlay"></div>
      <nav>
        <div className="container-fluid">
          <div className="row no-gutters flex-nowrap">
            <div className="col-12">
              <div id="title">
                <h1>TIFFANY</h1>
                <hr />
                <h1>HUANG</h1>
              </div>
            </div>
          </div>
          <div className="nav-content row no-gutters flex-nowrap">
            <div className="col-6">
              <p>
                is an interdisciplinary creator that works at the intersection
                of design and code. at the heart of her practice, she enjoys
                drawing cross-functional connections between the past, present,
                and future by exploring the humanities, arts, and sciences.
              </p>
            </div>
            <div className="col-2">
              <a onClick={() => relocate("/work")}>work</a>
            </div>
            <div className="col-2">
              <a target="_blank" href="https://th-archive.github.io/">
                archive
              </a>
            </div>
            <div className="col-2">
              <a target="_blank" href="mailto:tiffanyhuang1258@gmail.com">
                contact
              </a>
            </div>
          </div>
        </div>
      </nav>
      <main></main>
      <footer>
        <div className="container-fluid">
          <div className="row no-gutters flex-nowrap">
            <div className="col-6" id="version">
              <a
                target="_blank"
                href="https://huang-tiffany.github.io/2021"
                className="hidden ver"
                onMouseOver={() => hoverMenu("hover", "ver")}
                onMouseOut={() => hoverMenu("out", "ver")}
              >
                v. 2021
              </a>
              <br />
              <a
                target="_blank"
                href="https://huang-tiffany.github.io/2022"
                className="hidden ver"
                onMouseOver={() => hoverMenu("hover", "ver")}
                onMouseOut={() => hoverMenu("out", "ver")}
              >
                v. 2022
              </a>
              <br />
              <a
                onMouseOver={() => hoverMenu("hover", "ver")}
                onMouseOut={() => hoverMenu("out", "ver")}
              >
                v. 2023
              </a>
            </div>
            <div className="col-6" id="instagram">
              <br />
              <a
                id="ig"
                target="_blank"
                href="https://www.instagram.com/relatiffity/"
              >
                instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
