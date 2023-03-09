import { useContext } from "react";
import { Link } from "react-router-dom";
import LoggedContext from "../context/loggedContext";
import "../scss/header.scss";

const Header = () => {
  let signed;
  let {data, welcome, setWelcome } = useContext(LoggedContext);

  if (welcome || localStorage.getItem('islogged')!==null) {
    signed = (
      <>
        <h4>Welcome { data.user}</h4>
        <Link to="/"
          className="links"
          onClick={() => {
            setWelcome(false);
            window.localStorage.clear();
          }}
        >
          Exit
        </Link>
      </>
    );
  } else {
    signed = (
      <>
        <Link className="links" to="/">
          Login
        </Link>
        <Link className="links" to="/register">
          Register
        </Link>
      </>
    );
  }

  return (
    <div className="header-top">
      <h2>
        <Link className="title" to="/home">
          WHTER
        </Link>
      </h2>

      <div className="right">
       
        {signed}
      </div>
    </div>
  );
};

export default Header;
