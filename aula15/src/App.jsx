import axios from "axios";
import {useEffect, useState} from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState("");

  function limpaCampos() {
    setTitle("");
    setDate("");
    setId("");
  }

  async function getTodos() {
    try {
      const response = await axios.get("https://api-todo-six.vercel.app/todo");
      setTodos(response.data);
    } catch (error) {
      console.log("Erro ao buscar dados");
    }
  }

  async function addTodo(event) {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://api-todo-six.vercel.app/todo",
        {
          title: title,
          date: date
        }
      );
      limpaCampos();
      getTodos();
    } catch (error) {
      console.log("ERROR");
    }
    //TODO POST FUNCTION
  }

  async function deleteTodo(id) {
    try {
      await axios.delete(`https://api-todo-six.vercel.app/todo/${id}`);
      getTodos();
    } catch (error) {
      console.log("ERRO delete");
    }
  }

  function preecherForm(todo) {
    setTitle(todo.title);
    setDate(todo.date.split("T")[0]);
    setId(todo._id);
  }

  async function editTodo(event) {
    event.preventDefault();
    try {
      await axios.put(`https://api-todo-six.vercel.app/todo/${id}`, {
        title: title,
        date: date
      });
      limpaCampos();
      getTodos();
    } catch (error) {
      console.log("ERROR PUT");
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <h1>Hello World</h1>

      <form onSubmit={id ? editTodo : addTodo}>
        <input
          placeholder="Digite o título"
          type="text"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <br />
        <br />
        <input
          placeholder="Digite a data"
          type="date"
          value={date}
          onChange={event => setDate(event.target.value)}
        />
        <br />
        <br />
        <input type="submit" value={id ? "Salvar" : "Enviar"} />
      </form>
      <ul>
        {todos.map(todo => (
          <div key={todo._id}>
            <h3>{todo.title}</h3>
            <small>ID: {todo._id}</small>
            <p>{todo.date}</p>
            <button onClick={() => deleteTodo(todo._id)}>Apagar</button>
            <button onClick={() => preecherForm(todo)}>Editar</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default App;
