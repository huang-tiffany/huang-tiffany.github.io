import "../HomePage/HomePage.css";
import "../../App.css";
import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";

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
  // if (inout === "out") {
  //   (quads[0] as HTMLElement).style.borderEndEndRadius = "8px";
  //   (quads[1] as HTMLElement).style.borderBottomLeftRadius = "8px";
  //   (quads[2] as HTMLElement).style.borderStartEndRadius = "8px";
  //   (quads[3] as HTMLElement).style.borderStartStartRadius = "8px";
  //   return;
  // }

  // switch (number) {
  //   case 1:
  //     (quads[0] as HTMLElement).style.borderEndEndRadius = "32px";
  //     (quads[1] as HTMLElement).style.borderBottomLeftRadius = "20px";
  //     (quads[2] as HTMLElement).style.borderStartEndRadius = "16px";
  //     (quads[3] as HTMLElement).style.borderStartStartRadius = "12px";
  //     break;
  //   case 2:
  //     (quads[0] as HTMLElement).style.borderEndEndRadius = "16px";
  //     (quads[1] as HTMLElement).style.borderBottomLeftRadius = "36px";
  //     (quads[2] as HTMLElement).style.borderStartEndRadius = "12px";
  //     (quads[3] as HTMLElement).style.borderStartStartRadius = "28px";
  //     break;
  //   case 3:
  //     (quads[0] as HTMLElement).style.borderEndEndRadius = "20px";
  //     (quads[1] as HTMLElement).style.borderBottomLeftRadius = "12px";
  //     (quads[2] as HTMLElement).style.borderStartEndRadius = "44px";
  //     (quads[3] as HTMLElement).style.borderStartStartRadius = "24px";
  //     break;
  //   case 4:
  //     (quads[0] as HTMLElement).style.borderEndEndRadius = "12px";
  //     (quads[1] as HTMLElement).style.borderBottomLeftRadius = "28px";
  //     (quads[2] as HTMLElement).style.borderStartEndRadius = "20px";
  //     (quads[3] as HTMLElement).style.borderStartStartRadius = "56px";
  //     break;
  //   default:
  //     break;
  // }
}

export default function HomePage() {
  useEffect(() => {
    const vid: HTMLVideoElement | null = document.querySelector("video");
    setTimeout(() => {
      vid?.play();
    }, 1750);
  }, []);

  const handleOutOfRange = () => {
    const quads = document.getElementsByClassName("quad");
    (quads[0] as HTMLElement).style.borderEndEndRadius = "8px";
    (quads[1] as HTMLElement).style.borderBottomLeftRadius = "8px";
    (quads[2] as HTMLElement).style.borderStartEndRadius = "8px";
    (quads[3] as HTMLElement).style.borderStartStartRadius = "8px";
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const quads = document.getElementsByClassName("quad");
      const right = (quads[0] as HTMLElement).getBoundingClientRect().right;
      const bottom = (quads[0] as HTMLElement).getBoundingClientRect().bottom;

      const dist = Math.hypot(event.clientX - right, event.clientY - bottom);

      if (dist > 200) {
        handleOutOfRange();
        return;
      }

      const percent = dist / 200;

      if (event.clientX > right) {
        if (event.clientY > bottom) {
          console.log("lower right");
          (quads[0] as HTMLElement).style.borderEndEndRadius = "12px";
          (quads[1] as HTMLElement).style.borderBottomLeftRadius = "28px";
          (quads[2] as HTMLElement).style.borderStartEndRadius = "20px";
          (quads[3] as HTMLElement).style.borderStartStartRadius = "56px";
        } else {
          console.log("upper right");
          (quads[0] as HTMLElement).style.borderEndEndRadius = "16px";
          (quads[1] as HTMLElement).style.borderBottomLeftRadius = "36px";
          (quads[2] as HTMLElement).style.borderStartEndRadius = "12px";
          (quads[3] as HTMLElement).style.borderStartStartRadius = "28px";
        }
      } else {
        if (event.clientY > bottom) {
          console.log("lower left");
          (quads[0] as HTMLElement).style.borderEndEndRadius = "20px";
          (quads[1] as HTMLElement).style.borderBottomLeftRadius = "12px";
          (quads[2] as HTMLElement).style.borderStartEndRadius = "44px";
          (quads[3] as HTMLElement).style.borderStartStartRadius = "24px";
        } else {
          console.log("upper left");
          (quads[0] as HTMLElement).style.borderEndEndRadius = "32px";
          (quads[1] as HTMLElement).style.borderBottomLeftRadius = "20px";
          (quads[2] as HTMLElement).style.borderStartEndRadius = "16px";
          (quads[3] as HTMLElement).style.borderStartStartRadius = "12px";
        }
      }

      // if (event.clientX > right) {
      //   if (event.clientY > bottom) {
      //     console.log("lower right");
      //     (quads[0] as HTMLElement).style.borderEndEndRadius =
      //       `${percent * 32 * 0.5}px`;
      //     (quads[1] as HTMLElement).style.borderBottomLeftRadius =
      //       `${percent * 36 * 0.25}px`;
      //     (quads[2] as HTMLElement).style.borderStartEndRadius =
      //       `${percent * 44 * 0.25}px`;
      //     (quads[3] as HTMLElement).style.borderStartStartRadius =
      //       `${percent * 56}px`;
      //     // (quads[0] as HTMLElement).style.borderEndEndRadius = "12px";
      //     // (quads[1] as HTMLElement).style.borderBottomLeftRadius = "28px";
      //     // (quads[2] as HTMLElement).style.borderStartEndRadius = "20px";
      //     // (quads[3] as HTMLElement).style.borderStartStartRadius = "56px";
      //   } else {
      //     console.log("upper right");
      //     (quads[0] as HTMLElement).style.borderEndEndRadius =
      //       `${percent * 32 * 0.5}px`;
      //     (quads[1] as HTMLElement).style.borderBottomLeftRadius =
      //       `${percent * 36}px`;
      //     (quads[2] as HTMLElement).style.borderStartEndRadius =
      //       `${percent * 44 * 0.25}px`;
      //     (quads[3] as HTMLElement).style.borderStartStartRadius =
      //       `${percent * 56 * 0.5}px`;
      //     // (quads[0] as HTMLElement).style.borderEndEndRadius = "16px";
      //     // (quads[1] as HTMLElement).style.borderBottomLeftRadius = "36px";
      //     // (quads[2] as HTMLElement).style.borderStartEndRadius = "12px";
      //     // (quads[3] as HTMLElement).style.borderStartStartRadius = "28px";
      //   }
      // } else {
      //   if (event.clientY > bottom) {
      //     console.log("lower left");
      //     (quads[0] as HTMLElement).style.borderEndEndRadius =
      //       `${percent * 32 * 0.5}px`;
      //     (quads[1] as HTMLElement).style.borderBottomLeftRadius =
      //       `${percent * 36 * 0.25}px`;
      //     (quads[2] as HTMLElement).style.borderStartEndRadius =
      //       `${percent * 44}px`;
      //     (quads[3] as HTMLElement).style.borderStartStartRadius =
      //       `${percent * 56 * 0.5}px`;
      //     // (quads[0] as HTMLElement).style.borderEndEndRadius = "20px";
      //     // (quads[1] as HTMLElement).style.borderBottomLeftRadius = "12px";
      //     // (quads[2] as HTMLElement).style.borderStartEndRadius = "44px";
      //     // (quads[3] as HTMLElement).style.borderStartStartRadius = "24px";
      //   } else {
      //     console.log("upper left");
      //     (quads[0] as HTMLElement).style.borderEndEndRadius =
      //       `${percent * 32}px`;
      //     (quads[1] as HTMLElement).style.borderBottomLeftRadius =
      //       `${percent * 36 * 0.5}px`;
      //     (quads[2] as HTMLElement).style.borderStartEndRadius =
      //       `${percent * 44 * 0.5}px`;
      //     (quads[3] as HTMLElement).style.borderStartStartRadius =
      //       `${percent * 56 * 0.25}px`;
      //     // (quads[0] as HTMLElement).style.borderEndEndRadius = "32px";
      //     // (quads[1] as HTMLElement).style.borderBottomLeftRadius = "20px";
      //     // (quads[2] as HTMLElement).style.borderStartEndRadius = "16px";
      //     // (quads[3] as HTMLElement).style.borderStartStartRadius = "12px";
      //   }
      // }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="homePage fadein" onMouseOut={() => handleOutOfRange()}>
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
        >
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
              target="_blank"
              href="https://huang-tiffany.github.io/2025"
              className="hidden ver"
              onMouseOver={() => hoverMenu("hover", "ver")}
              onMouseOut={() => hoverMenu("out", "ver")}
            >
              v. 2025
            </a>
            <a
              onMouseOver={() => hoverMenu("hover", "ver")}
              onMouseOut={() => hoverMenu("out", "ver")}
            >
              v. 2026
            </a>
          </div>
        </div>
        <div
          className="quad"
          onMouseOver={() => hoverDiamond("hover", 4)}
          onMouseOut={() => hoverDiamond("out", 4)}
        >
          <div className="text-container">
            <div className="text-group">
              <p className="header">currently</p>
              <p>
                frontend swe @{" "}
                <a target="_blank" href="https://nvidia.com/">
                  nvidia
                </a>{" "}
                <br />
              </p>
            </div>
            <div className="text-group">
              <p className="header">previously</p>
              <p>
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
            <div className="text-group">
              <p className="header">education</p>
              <p>
                bachelor of fine arts, industrial design @{" "}
                <a target="_blank" href="https://risd.edu/">
                  the rhode island school of design
                </a>
                <br />
                bachelor of science, computer science @{" "}
                <a target="_blank" href="https://brown.edu/">
                  brown university
                </a>
              </p>
            </div>
          </div>
          <div className="text-container">
            <div className="text-group">
              <p className="header">press</p>
              <p>
                <a
                  target="_blank"
                  href="https://www.risd.edu/news/stories/brown-risd-dual-degree-students-present-capstone-projects-showcasing-personal-journeys"
                >
                  capstone presentations, risd news, june 2026
                </a>
                <br />
                <a
                  target="_blank"
                  href="https://www.risd.edu/news/stories/risd-students-share-thought-provoking-work-final-fall-2025-critiques"
                >
                  furniture crit, risd news, december 2025
                </a>
                <br />
                <a
                  target="_blank"
                  href="https://www.risd.edu/news/stories/risd-students-use-complex-data-to-create-interactive-research-projects"
                >
                  data design studio, risd news, february 2024
                </a>
              </p>
            </div>
            <div className="text-group">
              <p className="header">talks</p>
              <p>
                <a
                  target="_blank"
                  href="https://www.youtube.com/watch?v=ii1wmqAtjXA"
                >
                  brown | risd dual degree capstone, 2026
                </a>
              </p>
            </div>
          </div>
          <div id="reel">
            <video className="fadein" loop muted playsInline>
              <source src="/videos/2025 demo reel.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </main>
    </div>
  );
}
