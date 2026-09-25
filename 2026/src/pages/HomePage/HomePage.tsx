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
interface InlineTextLinkProps {
  url: string;
  text: string;
}
export function InlineTextLink({ url, text }: InlineTextLinkProps) {
  // split by spaces
  // recombine all but the last word
  // wrap last word with span + after element
  const arr = text.split(" ");
  let normalText = "";
  for (let i = 0; i < arr.length - 1; i++) {
    normalText += arr[i] + " ";
  }

  const lastWord = arr[arr.length - 1];

  return (
    <a target="_blank" href={url}>
      {normalText}{" "}
      <span>
        {lastWord}&nbsp;
        <div className="link-arrow"> ↘ </div>
      </span>
    </a>
  );
}

export default function HomePage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const vid: HTMLVideoElement | null = document.querySelector("video");
    setTimeout(() => {
      vid?.play();
    }, 1750);
  }, []);

  useEffect(() => {
    const quads = document.getElementsByClassName("quad");
    const modules = document.getElementsByClassName("module");

    (quads[0] as HTMLElement).style.borderEndEndRadius = "0px";
    (quads[1] as HTMLElement).style.borderBottomLeftRadius = "0px";
    (quads[2] as HTMLElement).style.borderStartEndRadius = "0px";
    (quads[3] as HTMLElement).style.borderStartStartRadius = "0px";

    if (window.innerWidth >= 576) {
      setTimeout(() => {
        for (let i = 0; i < quads.length; i++) {
          (quads[i] as HTMLElement).style.setProperty(
            "--gradient-percentage",
            "50%",
          );
        }
      }, 300);
    }

    setTimeout(() => {
      (quads[0] as HTMLElement).style.borderEndEndRadius = "8px";
      (quads[1] as HTMLElement).style.borderBottomLeftRadius = "8px";
      (quads[2] as HTMLElement).style.borderStartEndRadius = "8px";
      (quads[3] as HTMLElement).style.borderStartStartRadius = "8px";
    }, 500);

    (modules[0] as HTMLElement).style.borderEndEndRadius = "0px";
    (modules[1] as HTMLElement).style.borderBottomLeftRadius = "0px";
    (modules[1] as HTMLElement).style.borderBottomRightRadius = "0px";
    (modules[2] as HTMLElement).style.borderBottomLeftRadius = "0px";

    (modules[3] as HTMLElement).style.borderTopRightRadius = "0px";
    (modules[3] as HTMLElement).style.borderBottomRightRadius = "0px";
    (quads[3] as HTMLElement).style.borderRadius = "0px";
    (modules[4] as HTMLElement).style.borderBottomLeftRadius = "0px";
    (modules[4] as HTMLElement).style.borderTopLeftRadius = "0px";

    (modules[5] as HTMLElement).style.borderStartEndRadius = "0px";
    (modules[6] as HTMLElement).style.borderTopLeftRadius = "0px";
    (modules[6] as HTMLElement).style.borderTopRightRadius = "0px";
    (modules[7] as HTMLElement).style.borderStartStartRadius = "0px";

    setTimeout(() => {
      for (let i = 0; i < modules.length; i++) {
        (modules[i] as HTMLElement).style.setProperty(
          "--gradient-percentage",
          "50%",
        );
      }
      if (window.innerWidth <= 576) {
        (quads[3] as HTMLElement).style.background =
          "linear-gradient(black, black) padding-box, linear-gradient(white, white) border-box";
      } else {
        (quads[3] as HTMLElement).style.background = "";
      }
    }, 500);

    setTimeout(() => {
      (modules[0] as HTMLElement).style.borderEndEndRadius = "8px";
      (modules[1] as HTMLElement).style.borderBottomLeftRadius = "8px";
      (modules[1] as HTMLElement).style.borderBottomRightRadius = "8px";
      (modules[2] as HTMLElement).style.borderBottomLeftRadius = "8px";

      (modules[3] as HTMLElement).style.borderTopRightRadius = "8px";
      (modules[3] as HTMLElement).style.borderBottomRightRadius = "8px";
      (quads[3] as HTMLElement).style.borderRadius = "8px";
      (modules[4] as HTMLElement).style.borderBottomLeftRadius = "8px";
      (modules[4] as HTMLElement).style.borderTopLeftRadius = "8px";

      (modules[5] as HTMLElement).style.borderStartEndRadius = "8px";
      (modules[6] as HTMLElement).style.borderTopLeftRadius = "8px";
      (modules[6] as HTMLElement).style.borderTopRightRadius = "8px";
      (modules[7] as HTMLElement).style.borderStartStartRadius = "8px";
    }, 500);
  }, [windowWidth]);

  const handleOutOfRange = () => {
    const quads = document.getElementsByClassName("quad");
    (quads[0] as HTMLElement).style.borderEndEndRadius = "8px";
    (quads[1] as HTMLElement).style.borderBottomLeftRadius = "8px";
    (quads[2] as HTMLElement).style.borderStartEndRadius = "8px";
    (quads[3] as HTMLElement).style.borderStartStartRadius = "8px";
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (window.innerWidth <= 576) {
        return;
      }
      const quads = document.getElementsByClassName("quad");
      const right = (quads[0] as HTMLElement).getBoundingClientRect().right;
      const bottom = (quads[0] as HTMLElement).getBoundingClientRect().bottom;

      const dist = Math.hypot(event.clientX - right, event.clientY - bottom);

      if (dist > 200) {
        handleOutOfRange();
        return;
      }

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
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="homePage fadein" onMouseOut={() => handleOutOfRange()}>
      <NavBar />
      <main>
        <div className="module"></div>
        <div className="module"></div>
        <div className="module"></div>
        <div className="module"></div>

        <div className="quad"></div>
        <div className="quad"></div>
        <div className="quad"></div>
        <div className="quad">
          <div className="text-container">
            <div id="mobile-name">
              tiffany huang
              <br /> <p>( design engineer )</p>
            </div>
            <div className="text-group" id="currently">
              <p className="header">currently</p>
              <p>
                frontend swe @{" "}
                <InlineTextLink text="nvidia" url="https://nvidia.com/" />
              </p>
            </div>
            <div className="text-group" id="previously">
              <p className="header">previously</p>
              <p>
                brand design @{" "}
                <InlineTextLink text="ramp" url="https://ramp.com/" />
                <br />
                design @{" "}
                <InlineTextLink
                  text="santa clara county parks & rec"
                  url="https://www.santaclaraca.gov/our-city/departments-g-z/parks-recreation"
                />
              </p>
            </div>
            <div className="text-group" id="education">
              <p className="header">education</p>
              <p>
                bachelor of fine arts, industrial design @{" "}
                <InlineTextLink
                  text="the rhode island school of design"
                  url="https://risd.edu/"
                />
                <br />
                bachelor of science, computer science @{" "}
                <InlineTextLink
                  text="brown university"
                  url="https://brown.edu/"
                />
              </p>
            </div>
          </div>
          <div className="text-container">
            <div className="text-group" id="press">
              <p className="header">press</p>
              <p>
                <InlineTextLink
                  text="capstone presentations, risd news, june 2026"
                  url="https://www.risd.edu/news/stories/brown-risd-dual-degree-students-present-capstone-projects-showcasing-personal-journeys"
                />
                <br />
                <InlineTextLink
                  text="furniture crit, risd news, december 2025"
                  url="https://www.risd.edu/news/stories/risd-students-share-thought-provoking-work-final-fall-2025-critiques"
                />
                <br />
                <InlineTextLink
                  text="data design studio, risd news, february 2024"
                  url="https://www.risd.edu/news/stories/risd-students-use-complex-data-to-create-interactive-research-projects"
                />
              </p>
            </div>
            <div className="text-group" id="talks">
              <p className="header">talks</p>
              <p>
                <InlineTextLink
                  text=" brown | risd dual degree capstone, 2026"
                  url="https://www.youtube.com/watch?v=ii1wmqAtjXA"
                />
              </p>
            </div>
          </div>
          <div id="reel">
            <video className="fadein" loop muted playsInline>
              <source src="/videos/2025 demo reel.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="module"></div>
        <div className="module"></div>
        <div className="module"></div>
        <div className="module"></div>

        <div id="version" className="fadein">
          <a target="_blank" href="https://th-archive.github.io/">
            archive
          </a>
          <a
            onMouseOver={() => hoverMenu("hover", "ver")}
            onMouseOut={() => hoverMenu("out", "ver")}
          >
            v. 2026
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
            href="https://huang-tiffany.github.io/2023"
            className="hidden ver"
            onMouseOver={() => hoverMenu("hover", "ver")}
            onMouseOut={() => hoverMenu("out", "ver")}
          >
            v. 2023
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
            href="https://huang-tiffany.github.io/2021"
            className="hidden ver"
            onMouseOver={() => hoverMenu("hover", "ver")}
            onMouseOut={() => hoverMenu("out", "ver")}
          >
            v. 2021
          </a>
        </div>
      </main>
    </div>
  );
}
