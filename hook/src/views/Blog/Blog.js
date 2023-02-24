import useFetch from "../custom/fetch";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "./Blog.scss";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Addnewblog from "./Addnewblog";
const Blog = () => {
  //modals
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newdata, setnewdata] = useState([]);

  const {
    data: datablogs,
    loading,
    iserr,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts`, false);
  useEffect(() => {
    if (datablogs && datablogs.length > 0) {
      let newdatablog = datablogs.slice(0, 9);
      setnewdata(newdatablog);
    }
  }, [datablogs]);

  function add3Dots(string, limit) {
    let dots = "...";
    if (string.length > limit) {
      // you can also use substr instead of substring
      string = string.substring(0, limit) + dots;
    }

    return string;
  }
  let navigate = useNavigate();
  const clickdetails = (event) => {
    console.log(event.target.id);
    let path = event.target.id;
    navigate(path);
  };
  let handleaddnew = (blog) => {
    setShow(false);
    let data = newdata;
    data.unshift(blog);
    setnewdata(data);
  };
  let handleremove = (id) => {
    let data = newdata;
    data = data.filter((item) => item.id !== id);
    setnewdata(data);
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Blog
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Addnewblog handleaddnew={handleaddnew} />
        </Modal.Body>
      </Modal>
      <div className="table-content">
        {loading === false &&
          newdata &&
          newdata.length > 0 &&
          newdata.map((item) => {
            return (
              <div key={item.id} className="content-body">
                <div className="div-content">
                  <h3 style={{ color: "white" }}>
                    Title : &nbsp; &nbsp;{item.title}
                  </h3>
                  <p style={{ color: "white" }}>{add3Dots(item.body, 150)}</p>
                  <button
                    id={item.id}
                    className="details"
                    onClick={(event) => {
                      clickdetails(event);
                    }}
                  >
                    Details
                  </button>
                  <button
                    className="delete"
                    onClick={() => {
                      handleremove(item.id);
                    }}
                  >
                    delete
                  </button>
                </div>
              </div>
            );
          })}
        {loading === true && (
          <span style={{ textAlign: "center" }} className="loading">
            Loading....{" "}
          </span>
        )}
        {iserr === true && <span className="loading">thôi chết hỏng rồi</span>}
      </div>
    </>
  );
};

export default Blog;
