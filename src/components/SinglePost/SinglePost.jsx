import "./SinglePost.css";
import postImage from "../../assets/img/awclogo.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const POST_IMAGE = "" + postImage;
const API_URL = process.env.REACT_APP_API_URL;
export default function SinglePost() {
  const [post, setPost] = useState({});
  const [postImage, setPostImage] = useState(POST_IMAGE);
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`${API_URL}api/posts/${postId}`);
      setPost(res.data.data);
      setPostImage(res.data.data.photo.cloudinary_url);
    };
    getPost();
  }, []);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {postImage && <img className="singlePostImg" src={postImage} alt="" />}
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
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
        <p className="singlePostDesc">{post.description}</p>
      </div>
    </div>
  );
}
