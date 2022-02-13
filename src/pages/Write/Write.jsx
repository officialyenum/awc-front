import "./Write.css";
import sampleImg from "../../assets/img/header.jpg";

export default function Write() {
  return (
    <div className="write">
      <form action="" className="writeForm">
        <img className="writeImg" src={sampleImg} alt="" />
        <div className="writeFormGroup">
          <label htmlFor="fileInput ">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input
            type="file"
            name="image"
            id="fileInput"
            style={{ display: "none" }}
          />

          <input
            type="text"
            name="title"
            id=""
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>

        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
