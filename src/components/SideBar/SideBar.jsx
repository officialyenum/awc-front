import "./SideBar.css";
import sidebarImg from "../../assets/img/header.jpg";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img src={sidebarImg} alt="" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint dicta
          et explicabo illum suscipit molestiae, cumque reprehenderit, illo
          autem voluptates voluptatum non alias! Alias reiciendis, tempora rerum
          enim pariatur harum.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Event</li>
          <li className="sidebarListItem">Podcast</li>
          <li className="sidebarListItem">Vlog</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook-square"></i>
          <i className="sidebarIcon fa-brands fa-twitter-square"></i>
          <i className="sidebarIcon fa-brands fa-instagram-square"></i>
          <i className="sidebarIcon fa-brands fa-whatsapp-square"></i>
          <i className="sidebarIcon fa-brands fa-telegram"></i>
        </div>
      </div>
    </div>
  );
}
