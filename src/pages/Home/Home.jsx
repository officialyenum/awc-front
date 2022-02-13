import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import SideBar from "../../components/SideBar/SideBar";
import "./Home.css";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`${API_URL}api/posts`);
      setPosts(res.data.data);
    };
    fetchPosts();
  }, []);

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
