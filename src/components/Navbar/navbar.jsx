import { Link } from "react-router-dom";
import styled from "./Navbar.module.css";

function Navbar(props) {
  return (
    <div className={styled.bxs}>
      <div className="continer">
        <div className={styled.navbardiv}>
          <h4>
            <Link to="/">{props.title} site</Link>
          </h4>
          <p>
            <Link to="/">لیست مقالات</Link>
          </p>

          <p>
            {" "}
            <Link to="/creat">مقالات جدید</Link>
          </p>
          <p>
            <Link to="/about">درباره</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
