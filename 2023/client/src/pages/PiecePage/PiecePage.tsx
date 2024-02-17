import "../PiecePage/PiecePage.css";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { pieces } from "../../global/Atoms/atoms";
import { useParams } from "react-router-dom";
import logo from "../../../../../2021/images/logo white.png";
import { useEffect } from "react";
import VerticalMarquee from "../../components/VerticalMarquee/VerticalMarquee";
import { MarqueePieceText } from "../../components/VerticalMarquee/MarqueePieceText";

export default function PiecePage() {
  const { categoryInfo, pieceInfo } = useParams();
  const piecesArr = useRecoilState(pieces);
  const navigate = useNavigate();

  let year: string;
  let title: string;
  let medium: string;
  let size: string;
  let url: string;
  let statement: string;
  let media: string[];

  if (categoryInfo && pieceInfo) {
    year = piecesArr[0][categoryInfo][pieceInfo].year;
    title = piecesArr[0][categoryInfo][pieceInfo].title;
    medium = piecesArr[0][categoryInfo][pieceInfo].medium;
    size = piecesArr[0][categoryInfo][pieceInfo].size;
    url = piecesArr[0][categoryInfo][pieceInfo].url;
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

    const pieceStatement = document.querySelector("div.piece-description");
    if (pieceStatement) {
      pieceStatement.innerHTML = statement;
    }
  });

  const loadPhotos = () => {
    return media.map((med) => {
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
                src={"/videos/" + med.replace("*", "")}
                type="video/mp4"
              />
            </video>
          );
        } else {
          return (
            <video playsInline webkit-playsinline="true" autoPlay muted loop>
              <source src={"/videos/" + med} type="video/mp4" />
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
    const mediaWrapper: HTMLElement | null = document.querySelector(
      ".piecePage main .media"
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

  const relocate = (newLoc: string) => {
    const body: HTMLElement | null = document.querySelector(".piecePage");
    if (body) {
      body.classList.remove("fadein");
      body.classList.add("fadeout");
    }
    setTimeout(() => {
      navigate(newLoc);
    }, 1000);
  };

  // return <div>{piecesArr[0][key][piece].title}</div>;
  return (
    <div className="piecePage fadein">
      <nav>
        <a id="logo" onClick={() => relocate("/")}>
          <img src={logo} alt="Logo" />
        </a>
        <div className="links">
          <a onClick={() => relocate("/work")}>work</a>
          <a target="_blank" href="https://th-archive.github.io/">
            archive
          </a>
          <a target="_blank" href="mailto:tiffanyhuang1258@gmail.com">
            contact
          </a>
        </div>
      </nav>
      <hr />
      <main>
        <div className="media-wrapper">
          <div className="media">{loadPhotos()}</div>
        </div>
        <VerticalMarquee marqueeText={MarqueePieceText}></VerticalMarquee>

        <div className="piece-info">
          <div className="piece-data">
            <div className="piece-year"></div>
            <div className="piece-title"></div>
            <div className="piece-size"></div>
            <div className="piece-medium"></div>
            <div className="piece-url"></div>
          </div>
          <div className="piece-description"></div>
          <div className="piece-back">
            <a onClick={() => relocate("/work")}>back</a>
          </div>
        </div>
      </main>
    </div>
  );
}
