import "./SinglePost.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useContext  } from "react";
import axios from "axios";
import { Context } from "../../context/Context";

const API_URL = process.env.REACT_APP_API_DEV_URL;
export default function SinglePost() {
  const [post, setPost] = useState({});
  const [postImage, setPostImage] = useState(null);
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [file, setFile] = useState(null)
  const [updateMode, setUpdateMode] = useState(false)
  const location = useLocation();
  const { user } = useContext(Context);
  const postId = location.pathname.split("/")[2];
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`${API_URL}api/posts/${postId}`);
      setPost(res.data.data);
      setPostImage(res.data.data.photo.cloudinary_url);
      setTitle(res.data.data.title);
      setDesc(res.data.data.description);
    };
    getPost();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`${API_URL}api/posts/${postId}`,{data:{username:user.username}});
      window.location.replace('/');
    } catch (err) {}
  }

  const handleUpdate = async () => {
    try {
      await axios.put(`${API_URL}api/posts/${postId}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false)
    } catch (err) {}
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {postImage && <img className="singlePostImg" src={postImage} alt="" />}
        {updateMode ? (
          <>
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
              value={title}
              className="singlePostTitleInput"
              autoFocus
              onChange={(e)=>setTitle(e.target.value)}
            />
          </>
        ):(
          <h1 className="singlePostTitle">
          {title}
          {user?.username === post.username && 
          (<div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square" onClick={()=>setUpdateMode(true)}></i>
            <i className="singlePostIcon fa-solid fa-trash" onClick={handleDelete}></i>
          </div>)
          }
        </h1>
        )}
        
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link className="link" to={`/?user=${post.username}`}>
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? 
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="singlePostDescInput"
            value={desc}
            onChange={(e)=>setDesc(e.target.value)}
          ></textarea>
        : 
          <p className="singlePostDesc">{desc}</p>
        }
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>Update</button>
        )}
      </div>
    </div>
  );
}
