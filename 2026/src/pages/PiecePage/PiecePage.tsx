import "../PiecePage/PiecePage.css";
import { useRecoilState } from "recoil";
import { pieces } from "../../global/Atoms/atoms";
import { useParams } from "react-router-dom";

import { useEffect, useRef, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { useIsMedium } from "../../utils/utils";

export default function PiecePage() {
  const { categoryInfo, pieceInfo } = useParams();
  const piecesArr = useRecoilState(pieces);
  const [isDescriptionExpanded, setIsDescriptionExpanded] =
    useState<boolean>(false);
  const pageSize = useIsMedium();
  const [pieceMedia, setPieceMedia] = useState<JSX.Element[]>();

  // for keeping more/less button from wrapping by itself
  const [lastWord, setLastWord] = useState("");
  const textDescriptionRef = useRef<HTMLDivElement>(null);

  let year: string;
  let title: string;
  let medium: string;
  let size: string;
  let url: string;
  let role: string;
  let previewDescription: string;
  let statement: string;
  let media: string[];

  if (categoryInfo && pieceInfo) {
    year = piecesArr[0][categoryInfo][pieceInfo].year;
    title = piecesArr[0][categoryInfo][pieceInfo].title;
    medium = piecesArr[0][categoryInfo][pieceInfo].medium;
    size = piecesArr[0][categoryInfo][pieceInfo].size;
    url = piecesArr[0][categoryInfo][pieceInfo].url;
    role = piecesArr[0][categoryInfo][pieceInfo].role;
    previewDescription =
      piecesArr[0][categoryInfo][pieceInfo].previewDescription;
    statement = piecesArr[0][categoryInfo][pieceInfo].statement;
    media = piecesArr[0][categoryInfo][pieceInfo].media;
  }

  useEffect(() => {
    const pieceYear = document.querySelector("div.piece-year");
    if (pieceYear) {
      pieceYear.innerHTML = year;
    }

    const pieceTitle = document.querySelector("div.piece-title");
    if (pieceTitle) {
      pieceTitle.innerHTML = title;
    }

    const pieceMedium = document.querySelector("div.piece-medium");
    if (pieceMedium) {
      pieceMedium.innerHTML = medium;
    }

    const pieceSize = document.querySelector("div.piece-size");
    if (pieceSize) {
      pieceSize.innerHTML = size;
    }

    const pieceUrl = document.querySelector("div.piece-url");
    if (pieceUrl) {
      pieceUrl.innerHTML = url;
    }

    const pieceRole = document.querySelector("div.piece-role");
    if (pieceRole) {
      pieceRole.innerHTML = role;
    }
  }, []);

  const loadPhotos = () => {
    // if screen size is at breakpt, split by "/"
    // sort by number after "/" into arrays
    // put arrays into flexboxes

    const arr: string[][] = [];
    media.forEach((med) => {
      const medArr = med.split("/");
      const index = Number(medArr[1]);
      if (index == -1) {
        return;
      }

      while (index > arr.length) {
        arr.push([]);
      }
      arr[index - 1].push(medArr[0]);
    });

    if (!pageSize) {
      return arr.map((obj) => {
        return (
          <div className="media-group">
            {obj.map((med) => {
              if (med.substring(med.indexOf(".")) === ".mp4") {
                // any video filenames including "*" should not be autoplay but should
                // include sound and controls
                if (med.includes("*")) {
                  return (
                    <video
                      playsInline
                      webkit-playsinline="true"
                      controls
                      controlsList="nodownload"
                    >
                      <source
                        src={"videos/" + med.replace("*", "")}
                        type="video/mp4"
                      />
                    </video>
                  );
                } else {
                  return (
                    <video
                      playsInline
                      webkit-playsinline="true"
                      autoPlay
                      muted
                      loop
                    >
                      <source src={"videos/" + med} type="video/mp4" />
                    </video>
                  );
                }
              } else {
                return (
                  <picture>
                    <source
                      media="(min-width: 768px)"
                      srcSet={"/images/" + med}
                    />
                    <source
                      media="(min-width: 576px)"
                      srcSet={"/images/md/" + med}
                    />
                    <img alt={title + " Image"} src={"/images/" + med} />
                  </picture>
                );
              }
            })}
          </div>
        );
      });
    }

    return media.map((medStr) => {
      const med = medStr.split("/")[0];
      if (med.substring(med.indexOf(".")) === ".mp4") {
        // any video filenames including "*" should not be autoplay but should
        // include sound and controls
        if (med.includes("*")) {
          return (
            <video
              playsInline
              webkit-playsinline="true"
              controls
              controlsList="nodownload"
            >
              <source src={"videos/" + med.replace("*", "")} type="video/mp4" />
            </video>
          );
        } else {
          return (
            <video playsInline webkit-playsinline="true" autoPlay muted loop>
              <source src={"videos/" + med} type="video/mp4" />
            </video>
          );
        }
      } else {
        return (
          <picture>
            <source media="(min-width: 768px)" srcSet={"/images/" + med} />
            <source media="(min-width: 576px)" srcSet={"/images/md/" + med} />
            <img alt={title + " Image"} src={"/images/" + med} />
          </picture>
        );
      }
    });
  };

  useEffect(() => {
    setPieceMedia(loadPhotos());
  }, [pageSize]);

  useEffect(() => {
    const mediaWrapper: HTMLElement | null = document.querySelector(
      ".piecePage main .media",
    );
    if (media.length === 1) {
      if (mediaWrapper) {
        mediaWrapper.style.justifyContent = "center";
      }
    } else {
      if (mediaWrapper) {
        mediaWrapper.style.justifyContent = "flex-start";
      }
    }
  });

  useEffect(() => {
    // split by spaces
    // recombine all but the last word
    // wrap last word with span + after element
    const newStatement = isDescriptionExpanded ? statement : previewDescription;

    if (textDescriptionRef.current) {
      textDescriptionRef.current.innerHTML = newStatement;
    }
  }, [isDescriptionExpanded]);

  useEffect(() => {
    const modules = document.getElementsByClassName("module");

    setTimeout(() => {
      for (let i = 0; i < modules.length; i++) {
        (modules[i] as HTMLElement).style.setProperty(
          "--gradient-percentage",
          "50%",
        );
      }
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
      (modules[3] as HTMLElement).style.borderStartEndRadius =
        "var(--desktop-radius)";
      (modules[4] as HTMLElement).style.borderTopLeftRadius =
        "var(--desktop-radius)";
      (modules[4] as HTMLElement).style.borderTopRightRadius =
        "var(--desktop-radius)";
      (modules[5] as HTMLElement).style.borderStartStartRadius =
        "var(--desktop-radius)";
    }, 500);
  }, []);

  return (
    <div className="piecePage fadein">
      <NavBar />
      <main>
        <div className="module"></div>
        <div className="module"></div>
        <div className="module"></div>
        <div className="module"></div>
        <div className="module">
          <div className="piece-info">
            <div className="piece-data">
              <div className="piece-year"></div>
              <div className="piece-title"></div>
              <div className="piece-size"></div>
              <div className="piece-medium"></div>
              <div className="piece-url"></div>
              <div className="piece-role"></div>
            </div>
            <div className="piece-description">
              <div
                className={
                  "piece-description-expand " +
                  (isDescriptionExpanded ? "expanded" : "")
                }
              >
                <div className="piece-description-text">
                  <span ref={textDescriptionRef}></span>
                  <span>
                    .&nbsp;
                    <a
                      className="piece-more"
                      onClick={() =>
                        setIsDescriptionExpanded(!isDescriptionExpanded)
                      }
                    >
                      {isDescriptionExpanded ? " ( - less )" : " ( + more )"}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="media">{pieceMedia}</div>
        </div>
        <div className="module"></div>
      </main>
    </div>
  );
}
