import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import Form from "../Form";
import Key from "../Key";
import axios from "../.././axios";
import TodoList from "../TodoList";
import Author from "../Author";

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("/todos");
      setTodos(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(input + " input");
  console.dir(todos + " todos");

  const addTodo = async (e) => {
    e.preventDefault();
    if (input.length === 0) return null;
    axios.post("/todos", [
      {
        ...todos,
        text: input,
        completed: false,
      },
    ]);
    fetchData();
    setInput("");
    console.log("addedTodo");
  };
  console.log(todos + " todos");
  return (
    <Container>
      <h2>List of Todos</h2>
      {/* Form components */}
      <Form input={input} setInput={setInput} addTodo={addTodo}></Form>
      {/* TodoList */}
      <TodoList todos={todos} fetchData={fetchData}></TodoList>
      {/* Key */}
      <Key></Key>
      {/* Author component */}
      <Author></Author>
    </Container>
  );
}

export default Todo;
