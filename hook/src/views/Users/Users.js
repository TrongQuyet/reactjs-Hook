import axios from "axios";
import "./User.scss";
import { useState, React, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const Users = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setdata] = useState([]);
  const [fn, setfn] = useState("");
  const [ln, setln] = useState("");
  const [email, setemail] = useState("");
  const [adrr, setadrr] = useState("");

  let fetchdata = async () => {
    let res = await axios.get("http://localhost:8080/api/v1/users");
    setdata(res.data.rows);
    console.log(data);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  let handlechangefn = (event) => {
    setfn(event.target.value);
  };
  let handlechangeln = (event) => {
    setln(event.target.value);
  };
  let handlechangeemail = (event) => {
    setemail(event.target.value);
  };
  let handlechangeadrr = (event) => {
    setadrr(event.target.value);
  };
  let handleadduser = async () => {
    if (!fn || !ln || !email || !adrr) {
      alert("vui long nhap");
      return;
    }
    let data = {
      firstname: fn,
      lastname: ln,
      email: email,
      adrress: adrr,
    };
    await axios.post(`http://localhost:8080/api/v1/create-user`, data);
  };
  return (
    <>
      <div>
        <Button variant="primary" onClick={handleShow}>
          Add new user
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>----Add New User----</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="input-add">
              <label className="label-add">firstname :</label>
              <input
                name="fn"
                type="text"
                onChange={(event) => {
                  handlechangefn(event);
                }}
              ></input>
            </div>
            <div className="input-add">
              <label className="label-add">lastname :</label>
              <input
                name="ln"
                type="text"
                onChange={(event) => {
                  handlechangeln(event);
                }}
              ></input>
            </div>
            <div className="input-add">
              <label className="label-add">email :</label>
              <input
                name="email"
                type="text"
                onChange={(event) => {
                  handlechangeemail(event);
                }}
              ></input>
            </div>
            <div className="input-add">
              <label className="label-add">address :</label>
              <input
                name="adrr"
                type="text"
                onChange={(event) => {
                  handlechangeadrr(event);
                }}
              ></input>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                handleadduser();
              }}
            >
              Add new
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div>
        <table id="customers">
          <thead>
            <tr>
              <th>id</th>
              <th>firstname</th>
              <th>lastname</th>
              <th>email</th>
              <th>address</th>
              <th>update</th>
              <th>delete</th>
            </tr>
          </thead>
          {data &&
            data.length > 0 &&
            data.map((item) => (
              <tbody key={item.id}>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>
                    <button>update</button>
                  </td>
                  <td>
                    <button>delete</button>
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    </>
  );
};

export default Users;
