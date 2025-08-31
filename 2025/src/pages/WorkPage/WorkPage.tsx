import "../WorkPage/WorkPage.css";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import "../WorkPage/WorkPage.css";
import { pieces } from "../../global/Atoms/atoms";
import { useRecoilState } from "recoil";
import { useState } from "react";
import { useEffect } from "react";
import Marquee from "../../components/Marquee/Marquee";
import { MarqueeWorkText } from "../../components/Marquee/MarqueeWorkText";
import NavBar from "../../components/NavBar";

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
    "rememo",
  ];
  const [mode, setMode] = useState<string | undefined>(undefined);

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
    const vals = Object.values(piecesArr[0]).sort((a, b) => {
      return Number(a.year) - Number(b.year);
    });
    const arr: any[] = [];
    vals.forEach((val) => {
      Object.keys(val).forEach((s) => {
        arr.push(val[s]);
      });
    });
    const arr2 = arr.sort((a, b) => {
      return Number(b.year) - Number(a.year);
    });
    console.log("arr2", arr2);

    return (
      <div className="category-pieces">
        {Object.keys(arr2).map((pieces: any) => {
          const piece = arr2[pieces];
          const key = piece.category;
          return (
            <div
              key={piece.string}
              className={`category-piece category-${piece.category}`}
              onMouseEnter={() => setPreview(key, piece.string)}
              onMouseLeave={() => setPreview("", "")}
            >
              {vidPieces.includes(piece.string) ? (
                <video
                  onClick={() => relocate("/work/" + key + "/" + piece.string)}
                  webkit-playsinline="true"
                  playsInline
                  autoPlay
                  muted
                  loop
                >
                  <source
                    src={"/coverimages/" + piece.string.toLowerCase() + ".mp4"}
                    type="video/mp4"
                  />
                </video>
              ) : (
                <img
                  loading="lazy"
                  onClick={() => relocate("/work/" + key + "/" + piece.string)}
                  src={
                    gifPieces.includes(piece.string)
                      ? "/coverimages/" + piece.string.toLowerCase() + ".gif"
                      : "/coverimages/" + piece.string.toLowerCase() + ".jpg"
                  }
                  alt={piece.title + " Cover Image"}
                />
              )}

              <div className="piece-data">
                <div
                  className="piece-title"
                  onClick={() => relocate("/work/" + key + "/" + piece.string)}
                >
                  {piece.title}
                </div>

                <div className="piece-year">{piece.year}</div>
              </div>
              <div className="piece-tags">
                <div className="piece-tag">
                  <p>(</p>
                </div>
                {piece.tags.map((tag: string, index: number) => {
                  return (
                    <>
                      <div className="piece-tag">
                        <p>{tag}</p>
                      </div>
                      {index < piece.tags.length - 1 ? (
                        <div className="piece-tag">
                          <p>/</p>
                        </div>
                      ) : (
                        <></>
                      )}
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
    );
  };

  useEffect(() => {
    const allCategories: string[] = ["2D", "3D", "4D"];

    allCategories.forEach((cat: string) => {
      const catElts = document.querySelectorAll(`.category-${cat}`);
      catElts.forEach((elt) => {
        (elt as HTMLElement).style.display = "initial";
      });
    });

    if (mode) {
      allCategories.forEach((cat: string) => {
        if (cat !== mode) {
          const nonCatElts = document.querySelectorAll(`.category-${cat}`);
          nonCatElts.forEach((elt) => {
            (elt as HTMLElement).style.display = "none";
          });
        }
      });
    }
  }, [mode]);

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
    <div className="workPage fadein">
      <NavBar />
      <main>
        <div className="mode-wrapper">
          <div className="mode mode-all">
            <input
              type="radio"
              checked={!mode}
              onClick={() => setMode(undefined)}
            ></input>
            <label>ALL</label>
          </div>
          <div className="mode mode-2D">
            <input
              type="radio"
              checked={mode === "2D"}
              onClick={() => setMode("2D")}
            ></input>
            <label>2D</label>
          </div>
          <div className="mode mode-3D">
            <input
              type="radio"
              checked={mode === "3D"}
              onClick={() => setMode("3D")}
            ></input>
            <label>3D</label>
          </div>
          <div className="mode mode-4D">
            <input
              type="radio"
              checked={mode === "4D"}
              onClick={() => setMode("4D")}
            ></input>
            <label>4D</label>
          </div>
        </div>
        <div className="pieces">{loadPieces()}</div>
        <Marquee marqueeText={MarqueeWorkText}></Marquee>
      </main>
    </div>
  );
}
