import logo from "./logo.svg";
import "./App.scss";
import Nav from "./views/NAV/Nav";
import Todo from "./views/todo/Todo";
import Table from "./views/table/table";
import Blog from "./views/Blog/Blog";
import Detailsblog from "./views/Blog/detailsblog";
import Addnewblog from "./views/Blog/Addnewblog";
import Notfound from "./views/404";
import Users from "./views/Users/Users";
import Youtube from "./views/Youtube/Youtube";
// import axios from 'axios'
import { useState, useEffect } from "react";
import { Cdclass, Hookcd } from "./views/countdow/classcd.js";
import { Routes, Route } from "react-router-dom";
function App() {
  const [input, setinput] = useState("");
  const [todos, settodos] = useState([
    { id: "1", name: "quyet", type: "text" },
    { id: "2", name: "quyet2", type: "text" },
    { id: "3", name: "quyet3", type: "file" },
  ]);

  let handleclick = (event) => {
    if (!input) {
      return alert("no input");
    }
    let newtodo = { id: Math.random(), name: input, type: "text" };
    settodos([...todos, newtodo]);
    setinput("");
  };
  let handleinput = (event) => {
    setinput(event.target.value);
  };
  const deletetodo = (id) => {
    let currenttodo = todos;
    settodos(currenttodo.filter((item) => item.id !== id));
  };
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Routes>
        <Route
          path="/"
          element={<div style={{ color: "white" }}>Xin chao</div>}
        />
        <Route path="/covid" element={<Table />} />
        <Route
          path="/countdown"
          element={
            <>
              <Cdclass />,
              <span style={{ color: "white" }}>------------------------</span>,
              <Hookcd />
            </>
          }
        />
        <Route
          path="/todo"
          element={
            <>
              <Todo todos={todos} deletetodo={deletetodo} />
              <input
                type="text"
                className="input"
                value={input}
                onChange={(event) => {
                  handleinput(event);
                }}
              />
              <button
                className="click"
                onClick={(event) => {
                  handleclick(event);
                }}
              >
                click me
              </button>
            </>
          }
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Detailsblog />} />
        <Route path="/addnewblog" element={<Addnewblog />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/Youtube" element={<Youtube />} />
      </Routes>
    </div>
  );
}

export default App;
