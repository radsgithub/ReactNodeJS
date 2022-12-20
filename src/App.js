import "./App.css";
import Headers from "./components/headers";
import { Footer } from "./components/footer";
import { Todos } from "./components/todos";
import { useEffect, useState } from "react";
import { AddTodo } from "./components/AddTodo";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { About } from "./components/about";
import { Welcome } from "./components/welcome";
import axios from "axios";

function App() {
  const onDelete = (todo) => {
    const configuration = {
      method: "delete",
      url: "http://localhost:3009/delete/?id=" + todo.sno,
      query: todo.sno,
    };
    axios(configuration).then(() => {
      setTodos(
        todos.filter((i) => {
          return i !== todo;
        })
      );
    });
  };
  const addTodo = (title, Description) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const configuration = {
      method: "post",
      url: "http://localhost:3009/add",
      data: {
        title: title,
        desc: Description,
      },
    };
    axios(configuration).then(() => {
      setTodos((prev) => [...prev, configuration.data]);
    });
  };
  const [todos, setTodos] = useState([]);
  const configuration = {
    method: "get",
    url: "http://localhost:3009",
  };
  useEffect(() => {
    axios(configuration).then((result) => {
      result.data.forEach((element) => {
        const data = {
          sno: element.id,
          title: element.title,
          desc: element.desc,
        };

        setTodos((prev) => [...prev, data]);
      });
    });
  }, []);

  return (
    <>
      <Router>
        <Headers title="My first React project" searchBar={true} />
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route
            path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
