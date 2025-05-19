import "../WorkPage/WorkPage.css";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import logo from "/images/logo white.png";
import "../WorkPage/WorkPage.css";
import { pieces } from "../../global/Atoms/atoms";
import { useRecoilState } from "recoil";
import { useState } from "react";
import { useEffect } from "react";
import Marquee from "../../components/Marquee/Marquee";
import { MarqueeWorkText } from "../../components/Marquee/MarqueeWorkText";

export default function WorkPage() {
  const navigate = useNavigate();
  const piecesArr = useRecoilState(pieces);

  // pieces that have a gif as the cover image
  const gifPieces = ["synergySeats", "peopleWatching", "liveLaughLoaf"];

  // pieces that have a video as the cover image
  const vidPieces = [
    "eyeTrails",
    "musicVisualizer",
    "toMyself",
    "efflorescence",
    "losingContact",
    "amplify",
    "emt",
    "loveInAPuff",
    "homebodyTable",
    "sevenMinutesInHeaven",
    "rememo"
  ];
  const [mode, setMode] = useState<string>("all");

  const setPreview = (key: string, piece: string) => {
    const previewYear = document.querySelector("div.piece-preview-year");
    const previewTitle = document.querySelector("div.piece-preview-title");
    const previewDescription = document.querySelector(
      "div.piece-preview-description"
    );
    const previewImg: HTMLImageElement | null = document.querySelector(
      "img.piece-preview-image"
    );

    if (key === "" && piece === "") {
      if (previewYear) {
        previewYear.innerHTML = "";
      }
      if (previewTitle) {
        previewTitle.innerHTML = "";
      }
      if (previewDescription) {
        previewDescription.innerHTML = "";
      }
      if (previewImg) {
        previewImg.style.display = "none";
        previewImg.src = "";
      }
    } else {
      if (previewYear) {
        previewYear.innerHTML = piecesArr[0][key][piece].year;
      }

      if (previewTitle) {
        previewTitle.innerHTML = piecesArr[0][key][piece].title;
      }

      if (previewDescription) {
        previewDescription.innerHTML =
          piecesArr[0][key][piece].previewDescription;
      }

      if (previewImg) {
        previewImg.style.display = "inherit";
        previewImg.src = "/images/md/" + piecesArr[0][key][piece].previewImage;
      }
    }
  };

  const loadPieces = () => {
    return Object.keys(piecesArr[0]).map((key: string) => {
      return (
        <div key={key} className={`category category-${key.replace(" ", "")}`}>
          <h1>{key}</h1>
          <div className="category-pieces">
            {Object.getOwnPropertyNames(piecesArr[0][key]).map((piece) => {
              return (
                <div
                  key={piece}
                  className="category-piece"
                  onMouseEnter={() => setPreview(key, piece)}
                  onMouseLeave={() => setPreview("", "")}
                >
                  {vidPieces.includes(piece) ? (
                    <video
                      onClick={() => relocate("/work/" + key + "/" + piece)}
                      webkit-playsinline="true"
                      playsInline
                      autoPlay
                      muted
                      loop
                    >
                      <source
                        src={"/coverimages/" + piece.toLowerCase() + ".mp4"}
                        type="video/mp4"
                      />
                    </video>
                  ) : (
                    <img
                      loading="lazy"
                      onClick={() => relocate("/work/" + key + "/" + piece)}
                      src={
                        gifPieces.includes(piece)
                          ? "/coverimages/" + piece.toLowerCase() + ".gif"
                          : "/coverimages/" + piece.toLowerCase() + ".jpg"
                      }
                      alt={piecesArr[0][key][piece].title + " Cover Image"}
                    />
                  )}

                  <div className="piece-data">
                    <div
                      className="piece-title"
                      onClick={() => relocate("/work/" + key + "/" + piece)}
                    >
                      {piecesArr[0][key][piece].title}
                    </div>

                    <div className="piece-year">
                      {piecesArr[0][key][piece].year}
                    </div>
                  </div>
                  <div className="piece-tags">
                    <div className="piece-tag">
                          <p>(</p>
                    </div>
                    {piecesArr[0][key][piece].tags.map((tag, index) => {
                      return (
                        <>
                          <div className="piece-tag">
                            <p>{tag}</p>
                          </div>
                          {index < piecesArr[0][key][piece].tags.length - 1 ? 
                          <div className="piece-tag">
                            <p>/</p>
                          </div> : <></>}
                        </>
                      );
                    })}
                    <div className="piece-tag">
                      <p>)</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    const modeWrapper: HTMLElement | null = document.querySelector(".mode-wrapper");
    if (modeWrapper) {
      setTimeout(() => {
        modeWrapper.style.borderBottom = "1px solid white";
        modeWrapper.style.height = "6em";
      }, 3000);
    }
  }, [mode])

  useEffect(() => {
    const workCategories: string[] = ["2D DESIGN", "3D DESIGN"];
    const playCategories: string[] = ["MULTIMEDIA", "VIDEO"];
    const allCategories: string[] = [
      "2D DESIGN",
      "3D DESIGN",
      "MULTIMEDIA",
      "VIDEO",
    ];

    allCategories.forEach((cat: string) => {
      const catElt: HTMLElement | null = document.querySelector(
        `.category.category-${cat.replace(" ", "")}`
      );
      if (catElt) {
        catElt.style.display = "initial";
      }
    });
    switch (mode) {
      case "work":
        playCategories.forEach((cat: string) => {
          const catElt: HTMLElement | null = document.querySelector(
            `.category.category-${cat.replace(" ", "")}`
          );
          if (catElt) {
            catElt.style.display = "none";
          }
        });
        break;
      case "play":
        workCategories.forEach((cat: string) => {
          const catElt: HTMLElement | null = document.querySelector(
            `.category.category-${cat.replace(" ", "")}`
          );
          if (catElt) {
            catElt.style.display = "none";
          }
        });
        break;
      default:
        break;
    }
  }, [mode]);

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

  return (
    <div className="workPage fadein">
      <nav>
        <a id="logo" onClick={() => relocate("/")}>
          <img src={logo} alt="Logo" />
        </a>
        <div className="links">
          <p>work</p>
          <a target="_blank" href="https://th-archive.github.io/">
            archive
          </a>
          <a target="_blank" href="mailto:tiffanyhuang1258@gmail.com">
            contact
          </a>
        </div>
        <div className="piece-preview">
          <div className="piece-preview-year"></div>
          <div className="piece-preview-title"></div>
          <img className="piece-preview-image" />
          <div className="piece-preview-description"></div>
        </div>
      </nav>
      <main>
        <hr className="vert fadein"></hr>
        <div className="mode-wrapper">
          <div className="mode mode-all">
            <input
              type="radio"
              checked={mode === "all"}
              onClick={() => setMode("all")}
            ></input>
            <label>ALL</label>
          </div>
          <div className="mode mode-work">
            <input
              type="radio"
              checked={mode === "work"}
              onClick={() => setMode("work")}
            ></input>
            <label>WORK</label>
          </div>
          <div className="mode mode-play">
            <input
              type="radio"
              checked={mode === "play"}
              onClick={() => setMode("play")}
            ></input>
            <label>PLAY</label>
          </div>
        </div>
        <div className="pieces">{loadPieces()}</div>
        <hr className="fadein"></hr>
        <Marquee marqueeText={MarqueeWorkText}></Marquee>
      </main>
    </div>
  );
}
