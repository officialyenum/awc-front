import "./TopBar.css";
import logo from "../../assets/img/awclogo.png";

export default function TopBar() {
  return (
    <div className="topBar">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
        <i className="topIcon fa-brands fa-whatsapp-square"></i>
        <i className="topIcon fa-brands fa-telegram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">EVENTS</li>
          <li className="topListItem">BLOG</li>
          <li className="topListItem">WRITE</li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImage" src={logo} alt="" />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
