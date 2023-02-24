import React from "react";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();
  let back = () => {
    navigate("/");
  };
  return (
    <div>
      <h1 style={{ color: "white" }}>Trang khong ton tai</h1>
      <button onClick={back}>Back Home Page</button>
    </div>
  );
};

export default Notfound;
