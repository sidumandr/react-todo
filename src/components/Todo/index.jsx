import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";

import {} from "./style.css";

function Todo() {
  return (
    <div id="container">
      <h1>TO DO LIST</h1>
      <Form />
      <List />
    </div>
  );
}

export default Todo;
