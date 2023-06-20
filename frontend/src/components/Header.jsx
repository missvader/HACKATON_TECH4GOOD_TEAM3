import { Link } from "react-router-dom";
//import logo from "/img/logo-team.svg";

const Header = () => {
  return (
    <header>
      <nav>
        {/*<img src={logo} />*/}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
