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

export function hoverDiamond(inout: string, number: number) {
  const quads = document.getElementsByClassName("quad");
  if (inout === "out") {
    (quads[0] as HTMLElement).style.borderEndEndRadius = "8px";
    (quads[1] as HTMLElement).style.borderBottomLeftRadius = "8px";
    (quads[2] as HTMLElement).style.borderStartEndRadius = "8px";
    (quads[3] as HTMLElement).style.borderStartStartRadius = "8px";
    return;
  }
  switch (number) {
    case 1:
      (quads[0] as HTMLElement).style.borderEndEndRadius = "32px";
      (quads[1] as HTMLElement).style.borderBottomLeftRadius = "24px";
      (quads[2] as HTMLElement).style.borderStartEndRadius = "20px";
      (quads[3] as HTMLElement).style.borderStartStartRadius = "12px";
      break;
    case 2:
      (quads[0] as HTMLElement).style.borderEndEndRadius = "16px";
      (quads[1] as HTMLElement).style.borderBottomLeftRadius = "36px";
      (quads[2] as HTMLElement).style.borderStartEndRadius = "12px";
      (quads[3] as HTMLElement).style.borderStartStartRadius = "36px";
      break;
    case 3:
      (quads[0] as HTMLElement).style.borderEndEndRadius = "20px";
      (quads[1] as HTMLElement).style.borderBottomLeftRadius = "12px";
      (quads[2] as HTMLElement).style.borderStartEndRadius = "44px";
      (quads[3] as HTMLElement).style.borderStartStartRadius = "24px";
      break;
    case 4:
      (quads[0] as HTMLElement).style.borderEndEndRadius = "12px";
      (quads[1] as HTMLElement).style.borderBottomLeftRadius = "28px";
      (quads[2] as HTMLElement).style.borderStartEndRadius = "20px";
      (quads[3] as HTMLElement).style.borderStartStartRadius = "56px";
      break;
    default:
      break;
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
      {/* <main>
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
          </p>
        </div>
        <div className="text-group">
          <p className="header">previously...</p>
          <p>
            frontend swe, design engineering @{" "}
            <a target="_blank" href="https://nvidia.com/">
              nvidia
            </a>{" "}
            <br />
            brand design @{" "}
            <a target="_blank" href="https://ramp.com/">
              ramp
            </a>
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
      </div> */}
      <NavBar />
      <main>
        <div
          className="quad"
          onMouseOver={() => hoverDiamond("hover", 1)}
          onMouseOut={() => hoverDiamond("out", 1)}
        ></div>
        <div
          className="quad"
          onMouseOver={() => hoverDiamond("hover", 2)}
          onMouseOut={() => hoverDiamond("out", 2)}
        ></div>
        <div
          className="quad"
          onMouseOver={() => hoverDiamond("hover", 3)}
          onMouseOut={() => hoverDiamond("out", 3)}
        ></div>
        <div
          className="quad"
          onMouseOver={() => hoverDiamond("hover", 4)}
          onMouseOut={() => hoverDiamond("out", 4)}
        ></div>
      </main>
    </div>
  );
}
