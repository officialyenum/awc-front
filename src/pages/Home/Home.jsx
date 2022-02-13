import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import SideBar from "../../components/SideBar/SideBar";
import "./Home.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;
export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  console.log(search);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`${API_URL}api/posts${search}`);
      setPosts(res.data.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <SideBar />
      </div>
    </>
  );
}
