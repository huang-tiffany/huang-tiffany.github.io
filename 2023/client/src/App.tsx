import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/HomePage/HomePage";
import WorkPage from "./pages/WorkPage/WorkPage";
import PiecePage from "./pages/PiecePage/PiecePage";
import { RecoilRoot } from "recoil";
import "./App.css";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="/work">
            <Route index element={<WorkPage />}></Route>
            <Route path=":categoryInfo">
              <Route path=":pieceInfo" element={<PiecePage />}></Route>
            </Route>
          </Route>

          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
