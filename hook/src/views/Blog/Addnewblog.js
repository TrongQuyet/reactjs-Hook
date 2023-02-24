import "./Addnewblog.scss";
import { useState, React } from "react";
import axios from "axios";

const Addnewblog = (props) => {
  const [title, settitle] = useState("");
  const [body, settbody] = useState("");
  const handleadd = async () => {
    if (!title) {
      alert("Not is Title");
      return;
    }
    if (!body) {
      alert("Not is Body");
      return;
    }
    let data = {
      title: title,
      body: body,
      userId: 1,
    };
    let res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      data
    );
    let newblog = res.data;
    props.handleaddnew(newblog);
  };

  const handleinputtt = (event) => {
    let title = event.target.value;
    settitle(title);
  };
  const handleinputbd = (event) => {
    let body = event.target.value;
    settbody(body);
  };
  return (
    <div className="input-newblogs">
      <label>-----Add new Blogs-----</label>
      <div className="content">
        <label>Title : &nbsp; &nbsp; </label>
        <input type="text" onChange={(event) => handleinputtt(event)} />
      </div>
      <div className="content">
        <label>Body : &nbsp; &nbsp; </label>
        <input type="text" onChange={(event) => handleinputbd(event)} />
      </div>
      <button
        className="btn-add"
        onClick={() => {
          handleadd();
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Addnewblog;
