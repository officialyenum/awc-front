import Post from "../Post/Post";
import "./Posts.css";

export default function Posts({ posts }) {
  console.log(posts);
  return (
    <div className="posts col-3">
      {posts.map((p) => (
        <Post key={p._id} post={p} />
      ))}
    </div>
  );
}
