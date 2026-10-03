import { useNavigate, Link, LinkProps } from "react-router-dom";
import "../../App.css";
import logo from "/images/logo white.png";
import "../NavBar/NavBar.css";

interface TransitionLinkProps extends LinkProps {
  to: string;
  children: React.ReactNode;
}

export function TransitionLink({
  to,
  children,
  ...props
}: TransitionLinkProps) {
  const navigate = useNavigate();

  const relocate = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) {
      return;
    }

    e.preventDefault();

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
      navigate(to);
    }, 500);
  };

  return (
    <Link to={to} className="transition-link" onClick={relocate} {...props}>
      {children}
    </Link>
  );
}

export default function NavBar() {
  return (
    <nav>
      <div id="logo-container">
        <TransitionLink id="logo" to="/">
          <img src={logo} alt="Logo" />
        </TransitionLink>
      </div>
      <div id="desktop-name">
        tiffany huang <br /> <p>( design engineer )</p>
      </div>
      <div className="links">
        <TransitionLink to="/work">work</TransitionLink>
        <a
          id="contact"
          target="_blank"
          href="mailto:tiffanyhuang1258@gmail.com"
        >
          contact
        </a>
      </div>
    </nav>
  );
}
