import "../WorkPage/WorkPage.css";
import "../../App.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../WorkPage/WorkPage.css";
import { pieces } from "../../global/Atoms/atoms";
import { useRecoilState } from "recoil";
import { useState } from "react";
import { useEffect } from "react";
import Marquee from "../../components/Marquee/Marquee";
import { MarqueeWorkText } from "../../components/Marquee/MarqueeWorkText";
import NavBar from "../../components/NavBar/NavBar";

export default function WorkPage() {
  const navigate = useNavigate();
  const piecesArr = useRecoilState(pieces);

  // pieces that have a gif as the cover image
  const gifPieces = ["peopleWatching", "liveLaughLoaf", "locket"];

  // pieces that have a video as the cover image
  const vidPieces = [
    "synergySeats",
    "efflorescence",
    "losingContact",
    "amplify",
    "emt",
    "loveInAPuff",
    "homebodyTable",
    "rememo",
  ];
  const [mode, setMode] = useState<string | undefined>(undefined);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const filter = searchParams.get("filter") || undefined;
    setMode(filter);

    console.log(filter);
  }, [searchParams]);

  const setPreview = (key: string, piece: string) => {
    const previewYear = document.querySelector("div.piece-preview-year");
    const previewTitle = document.querySelector("div.piece-preview-title");
    const previewDescription = document.querySelector(
      "div.piece-preview-description",
    );
    const previewImg: HTMLImageElement | null = document.querySelector(
      "img.piece-preview-image",
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
              <div className="media-container">
                {vidPieces.includes(piece.string) ? (
                  <video
                    onClick={() =>
                      relocate("/work/" + key + "/" + piece.string)
                    }
                    webkit-playsinline="true"
                    playsInline
                    autoPlay
                    muted
                    loop
                  >
                    <source
                      src={
                        "/coverimages/" + piece.string.toLowerCase() + ".mp4"
                      }
                      type="video/mp4"
                    />
                  </video>
                ) : (
                  <img
                    loading="lazy"
                    onClick={() =>
                      relocate("/work/" + key + "/" + piece.string)
                    }
                    src={
                      gifPieces.includes(piece.string)
                        ? "/coverimages/" + piece.string.toLowerCase() + ".gif"
                        : "/coverimages/" + piece.string.toLowerCase() + ".jpg"
                    }
                    alt={piece.title + " Cover Image"}
                  />
                )}

                <div className="hidden-piece-data">
                  <div className="hidden-piece-year">
                    <p>{piece.year}</p>
                  </div>
                  <div className="hidden-piece-title">
                    <p>{piece.title}</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="piece-data">
                  <div className="piece-title">{piece.title}</div>
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
                <div className="hidden-piece-preview">
                  <p>{piece.previewDescription + "."}</p>
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
        (elt as HTMLElement).style.display = "flex";
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

    const quads = document.getElementsByClassName("quad");
    const modules = document.getElementsByClassName("module");

    for (let i = 0; i < quads.length; i++) {
      (quads[i] as HTMLElement).style.setProperty(
        "--gradient-percentage",
        "125%",
      );
    }

    for (let i = 0; i < modules.length; i++) {
      (modules[i] as HTMLElement).style.setProperty(
        "--gradient-percentage",
        "125%",
      );
    }

    setTimeout(() => {
      navigate(newLoc);
    }, 500);
  };

  useEffect(() => {
    const modules = document.getElementsByClassName("module");

    setTimeout(() => {
      for (let i = 0; i < modules.length; i++) {
        (modules[i] as HTMLElement).style.setProperty(
          "--gradient-percentage",
          "50%",
        );
      }
      (modules[4] as HTMLElement).style.background =
        "linear-gradient(black, black) padding-box, linear-gradient(white, white) border-box";
    }, 500);

    setTimeout(() => {
      (modules[0] as HTMLElement).style.borderEndEndRadius =
        "var(--desktop-radius)";
      (modules[1] as HTMLElement).style.borderBottomLeftRadius =
        "var(--desktop-radius)";
      (modules[1] as HTMLElement).style.borderBottomRightRadius =
        "var(--desktop-radius)";
      (modules[2] as HTMLElement).style.borderBottomLeftRadius =
        "var(--desktop-radius)";

      (modules[3] as HTMLElement).style.borderTopRightRadius =
        "var(--desktop-radius)";
      (modules[3] as HTMLElement).style.borderBottomRightRadius =
        "var(--desktop-radius)";
      (modules[4] as HTMLElement).style.borderRadius = "var(--desktop-radius)";
      (modules[5] as HTMLElement).style.borderBottomLeftRadius =
        "var(--desktop-radius)";
      (modules[5] as HTMLElement).style.borderTopLeftRadius =
        "var(--desktop-radius)";

      (modules[6] as HTMLElement).style.borderStartEndRadius =
        "var(--desktop-radius)";
      (modules[7] as HTMLElement).style.borderTopLeftRadius =
        "var(--desktop-radius)";
      (modules[7] as HTMLElement).style.borderTopRightRadius =
        "var(--desktop-radius)";
      (modules[8] as HTMLElement).style.borderStartStartRadius =
        "var(--desktop-radius)";
    }, 500);
  }, []);

  return (
    <div className="workPage fadein">
      <NavBar />
      <main>
        <div className="module"></div>
        <div className="module"></div>
        <div className="module"></div>
        <div className="module"></div>
        <div className="module">
          <div className="mode-wrapper">
            <div className="mode mode-all">
              <input
                type="radio"
                checked={!mode}
                onClick={() =>
                  setSearchParams((prevParams) => {
                    prevParams.delete("filter");
                    return prevParams;
                  })
                }
              ></input>
              <label>ALL</label>
            </div>
            <div className="mode mode-2D">
              <input
                type="radio"
                checked={mode === "2D"}
                onClick={() =>
                  setSearchParams((prevParams) => {
                    prevParams.set("filter", "2D");
                    return prevParams;
                  })
                }
              ></input>
              <label>2D</label>
            </div>
            <div className="mode mode-3D">
              <input
                type="radio"
                checked={mode === "3D"}
                onClick={() =>
                  setSearchParams((prevParams) => {
                    prevParams.set("filter", "3D");
                    return prevParams;
                  })
                }
              ></input>
              <label>3D</label>
            </div>
            <div className="mode mode-4D">
              <input
                type="radio"
                checked={mode === "4D"}
                onClick={() =>
                  setSearchParams((prevParams) => {
                    prevParams.set("filter", "4D");
                    return prevParams;
                  })
                }
              ></input>
              <label>4D</label>
            </div>
          </div>
        </div>
        <div className="module"></div>
        <div className="module"></div>
        <div className="module">
          <div className="pieces">{loadPieces()}</div>
        </div>
        <div className="module"></div>

        <Marquee marqueeText={MarqueeWorkText}></Marquee>
      </main>
    </div>
  );
}
