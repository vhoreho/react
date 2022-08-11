import { useState } from 'react';
import { v4 } from 'uuid';
import { Input } from './components/Input/Input';
import { TodoList } from './components/TodoList';

import styles from './App.module.css';

const initialState = {
  "userId": 1,
  "id": 1,
  "title": "",
  "completed": false
}

const initialTodos = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  }
]

function App() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(text) {
    let newTodo = {
      ...initialState,
      title: text,
      id: v4()
    }
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  }

  function handleDeleteTodo(id) {
    const filteredData = [...todos].filter(todo => todo.id !== id);
    setTodos(filteredData);
  }

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Todo</h1>
      <Input addTodo={handleAddTodo} />
      <TodoList todos={todos} deleteTodo={handleDeleteTodo} />
    </div >
  );
}

export default App;
