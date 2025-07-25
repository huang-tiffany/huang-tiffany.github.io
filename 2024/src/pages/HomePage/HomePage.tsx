import "../HomePage/HomePage.css";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import logo from "/images/logo white.png";
import { useEffect } from "react";

export default function HomePage() {
  const navigate = useNavigate();

  const relocate = (newLoc: string) => {
    const elements: NodeListOf<Element> | null = document.querySelectorAll(".fadein");
    if (elements) {
      for (let i = 0; i < elements.length; i++) {
        const elt = elements[i];
        elt.classList.remove("fadein");
        elt.classList.add("fadeout");
      }
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
 
  useEffect(() => {
    const vid: HTMLVideoElement | null = document.querySelector("video");
    setTimeout(() => {
      vid?.play();
    }, 1750);
  }, [])

  return (
    <main className="homePage fadein">
      <div id="table">
        <div className="table-cell" id="cell0">
          <img className="fadein" id="logo" src={logo} alt="Logo" />
          <hr className="fadein"></hr>
          <hr className="vert fadein"></hr>
        </div>
        <div className="table-cell" id="cell1">
          <hr className="vert fadein"></hr>
        </div>
        <div className="table-cell" id="cell2">
          <div className="nav-links fadein">
            <a onClick={() => relocate("/work")}>work</a>
            <a target="_blank" href="https://th-archive.github.io/">
              archive
            </a>
            <a target="_blank" href="mailto:tiffanyhuang1258@gmail.com">
              contact
            </a>
          </div>
        </div>
        <div className="table-cell" id="cell3"></div>
        <div className="table-cell" id="cell4">
          <div className="title fadein">
            <h1>TIFFANY</h1>
            <h1>HUANG</h1>
          </div>
          <p className="text-container fadein">
            is an interdisciplinary designer and developer working at the intersection of 2D, 3D, and 4D.
          </p>
          <hr className="fadein"></hr>
        </div>
          <div className="table-cell" id="cell5">
            <video id="reel" className="fadein" loop muted playsInline>
              <source src="/videos/highlight reel 2024.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="table-cell" id="cell6">
          <div id="version" className="fadein">
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
                target="_blank"
                href="https://huang-tiffany.github.io/2023"
                className="hidden ver"
                onMouseOver={() => hoverMenu("hover", "ver")}
                onMouseOut={() => hoverMenu("out", "ver")}
              >
                v. 2023
              </a>
              <a
                onMouseOver={() => hoverMenu("hover", "ver")}
                onMouseOut={() => hoverMenu("out", "ver")}
              >
                v. 2024
              </a>
          </div>
        </div>
        <div className="table-cell" id="cell7">
          <div className="text-container fadein">
            <div className="text-group">
              <p className="header">currently...</p>
              <p>
              industrial design, computer science, creative computation @ <a target="_blank" href="https://www.brown.edu/academics/brown-risd-dual-degree/home">the brown | risd dual degree program</a> <br></br>
              design engineering @ <a target="_blank" href="https://nvidia.com/">nvidia</a> </p>
            </div>
            <div className="text-group">
              <p className="header">previously...</p>
              <p>
              brand design @ <a target="_blank" href="https://ramp.com/">ramp</a><br></br>
              frontend swe @ <a target="_blank" href="https://nvidia.com/">nvidia</a> <br></br>
              brand design @ <a target="_blank" href="https://www.santaclaraca.gov/our-city/departments-g-z/parks-recreation">santa clara county parks and rec</a>
              </p>
            </div>
          </div>
          <hr className="vert fadein"></hr>
        </div>
        <div className="table-cell" id="cell8">
          <div id="additional-links" className="fadein">
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
            <a
              onMouseOver={() => hoverMenu("hover", "addlink")}
              onMouseOut={() => hoverMenu("out", "addlink")}
            >
              additional links
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
