import { useRecoilState } from "recoil";
import { pieces } from "../../global/Atoms/atoms";
import PiecePage from "./PiecePage";
import { Route } from "react-router-dom";

export default function PiecePageRoute() {
  const piecesArr = useRecoilState(pieces);

  return Object.keys(piecesArr[0]).map((key: string) => {
    return Object.getOwnPropertyNames(piecesArr[0][key]).map((piece) => {
      return <Route path={"/work/" + piece} element={<PiecePage />} />;
    });
  });
}
