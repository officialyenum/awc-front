import "./SinglePost.css";
import postImg from "../../assets/img/header.jpg";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={postImg} alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Yenum</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore,
          reprehenderit amet iusto cumque, nulla enim voluptatum esse quidem
          eveniet, repudiandae animi fuga sit impedit id quaerat reiciendis.
          Sed, iure iste? Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Labore, reprehenderit amet iusto cumque, nulla enim voluptatum
          esse quidem eveniet, repudiandae animi fuga sit impedit id quaerat
          reiciendis. Sed, iure iste? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Labore, reprehenderit amet iusto cumque, nulla enim
          voluptatum esse quidem eveniet, repudiandae animi fuga sit impedit id
          quaerat reiciendis. Sed, iure iste? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Labore, reprehenderit amet iusto
          cumque, nulla enim voluptatum esse quidem eveniet, repudiandae animi
          fuga sit impedit id quaerat reiciendis. Sed, iure iste? Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Labore, reprehenderit
          amet iusto cumque, nulla enim voluptatum esse quidem eveniet,
          repudiandae animi fuga sit impedit id quaerat reiciendis. Sed, iure
          iste? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Labore, reprehenderit amet iusto cumque, nulla enim voluptatum esse
          quidem eveniet, repudiandae animi fuga sit impedit id quaerat
          reiciendis. Sed, iure iste? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Labore, reprehenderit amet iusto cumque, nulla enim
          voluptatum esse quidem eveniet, repudiandae animi fuga sit impedit id
          quaerat reiciendis. Sed, iure iste?
        </p>
      </div>
    </div>
  );
}
