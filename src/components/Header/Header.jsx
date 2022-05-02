import "./Header.css";
import headerImg from "../../assets/img/header.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitle">
        <span className="headerTitleSm">This is Header title</span>
        <span className="headerTitleLg">Welcome</span>
      </div>
      {/* <img className="headerImg" src={headerImg} alt="" /> */}
    </div>
  );
}
