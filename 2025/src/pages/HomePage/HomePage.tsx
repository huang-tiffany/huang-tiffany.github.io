import "../HomePage/HomePage.css";
import "../../App.css";
import { useEffect } from "react";
import NavBar from "../../components/NavBar";

export function hoverMenu(inout: string, menu: string) {
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

export default function HomePage() {
  useEffect(() => {
    const vid: HTMLVideoElement | null = document.querySelector("video");
    setTimeout(() => {
      vid?.play();
    }, 1750);
  }, []);

  return (
    <div className="homePage fadein">
      <main>
        <NavBar />
        <div id="reel">
          <video className="fadein" loop muted playsInline>
            <source src="/videos/2025 demo reel.mp4" type="video/mp4" />
          </video>
        </div>
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
            target="_blank"
            href="https://huang-tiffany.github.io/2024"
            className="hidden ver"
            onMouseOver={() => hoverMenu("hover", "ver")}
            onMouseOut={() => hoverMenu("out", "ver")}
          >
            v. 2024
          </a>
          <a
            onMouseOver={() => hoverMenu("hover", "ver")}
            onMouseOut={() => hoverMenu("out", "ver")}
          >
            v. 2025
          </a>
        </div>
      </main>
      <div className="text-container fadein">
        <div className="text-group" id="mobile-name">
          <h2>
            tiffany huang <br /> <p>( design engineer )</p>
          </h2>
        </div>
        <div className="text-group">
          <p className="header">currently...</p>
          <p>
            industrial design, computer science, creative computation @{" "}
            <a
              target="_blank"
              href="https://www.brown.edu/academics/brown-risd-dual-degree/home"
            >
              the brown | risd dual degree program
            </a>{" "}
            <br />
            design engineering @{" "}
            <a target="_blank" href="https://nvidia.com/">
              nvidia
            </a>{" "}
          </p>
        </div>
        <div className="text-group">
          <p className="header">previously...</p>
          <p>
            brand design @{" "}
            <a target="_blank" href="https://ramp.com/">
              ramp
            </a>
            <br />
            frontend swe @{" "}
            <a target="_blank" href="https://nvidia.com/">
              nvidia
            </a>{" "}
            <br />
            brand design @{" "}
            <a
              target="_blank"
              href="https://www.santaclaraca.gov/our-city/departments-g-z/parks-recreation"
            >
              santa clara county parks and rec
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
