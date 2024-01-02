import { useNavigate } from "react-router-dom";
import "../App.css";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <nav>
      <a onClick={() => navigate("/work")}>Work</a>
    </nav>
  );
}
