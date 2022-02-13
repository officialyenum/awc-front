import "./Settings.css";
import SideBar from "../../components/SideBar/SideBar";
import settingsImg from "../../assets/img/awclogo.png";
export default function Settings() {
  return (
    <div className="settings">
      <div className="setingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>
        <form action="" className="settingsForm">
          <label htmlFor="profilePicture">Profile Picture</label>
          <div className="settingsPP">
            <img src={settingsImg} alt="" />
            <label htmlFor="fileInput">
              <i class="settingsPPIcon fa-solid fa-circle-user"></i>
            </label>
            <input
              type="file"
              name=""
              id="fileInput"
              style={{ display: "none" }}
            />
          </div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Yenum"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="oponechukwuyenum@gmail.com"
          />
          <label htmlFor="password">Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
}
