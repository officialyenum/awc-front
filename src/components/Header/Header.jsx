import "./Header.css";
import headerImg from "../../assets/img/header.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Welcome</span>
        <span className="headerTitleLg">This is Header Subtitle</span>
      </div>
      <img className="headerImg" src={headerImg} alt="" />
    </div>
  );
}
