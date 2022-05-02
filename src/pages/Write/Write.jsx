import { useState, useContext, useEffect } from "react";
import "./Write.css";
import sampleImg from "../../assets/img/header.jpg";
import axios from "axios";
import { Context } from "../../context/Context";

const API_URL = process.env.REACT_APP_API_DEV_URL;
export default function Write() {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [category, setCategory] = useState("")
  const [categories, setCategories] = useState([])
  const [file, setFile] = useState(null)
  const {user, dispatch, isFetching} = useContext(Context)

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get(`${API_URL}api/categories`);
      setCategories(res.data.data);
    };
    fetchCategories();
  }, [])
  console.log(categories);
  console.log(user.username);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted");
    const newPost = {
      title: title, 
      description: desc,
      username: user.username,
      photo: "",
      categories: [category]
    };
    if (file){
      const formData = new FormData();
      formData.append("image", file);
      formData.append('username',user.username);
      const config = {     
        headers: { 'content-type': 'multipart/form-data' }
      }
      try {
        const res = await axios.post(`${API_URL}api/medias`,formData, config);
        newPost.photo = res.data.data._id.toString();
      } catch (error) {
        console.log(error)
      }
    }
    try {
      const resPost = await axios.post(`${API_URL}api/posts`,newPost);
    } catch (error) {
      console.log(error)
    }

  }
  
  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form action="" className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">

          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />

          <input
            type="text"
            name="title"
            id=""
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <label htmlFor="category">
            <i className="writeIcon fas fa-list"></i>
          </label>
          <select id="category" className="writeInput" onChange={e=>setCategory(e.target.value)}>
            <option value="⬇️ Select a category ⬇️" > -- Select a Category -- </option>
            {categories.map((category) => <option value={category._id}>{category.name}</option>)}
          </select>
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
