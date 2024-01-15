import React from "react";
import { ListContainer, Row, Text } from "./styles";

function TodoList({ todos }) {
  return (
    <ListContainer>
      {Array.isArray(todos) &&
        todos?.map((todo) => (
          <Row key={todo._id}>
            <Text>{todo.text}</Text>
          </Row>
        ))}
    </ListContainer>
  );
}

export default TodoList;
