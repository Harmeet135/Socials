import "./navbar.css";
import { Gloabaldata } from "../../App";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { Userr, logout } = useContext(Gloabaldata);

  return (
    <div className="home-header">
      <Link to="/">
        <h1 id="heading">Memories</h1>
      </Link>

      <div>
        {Userr ? (
          <div id="user-mail">
            <h5>{Userr.email}</h5>
            <button onClick={logout} className="header-button">
              Log Out
            </button>
          </div>
        ) : (
          <div>
            <Link to="/auth">
              <button className="header-button">Sign Up</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
