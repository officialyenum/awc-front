import "./SideBar.css";
import sidebarImg from "../../assets/img/header.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_DEV_URL;
export default function SideBar() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get(`${API_URL}api/categories`);
      console.log(res.data.data);
      setCats(res.data.data);
    };
    getCats();
    console.log(cats);
  }, []);

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
          {cats.map((c) => (
            <Link key={c._id} className="link" to={`/?cat=${c.name}`}>
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
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
