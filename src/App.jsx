// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import React, { useState } from 'react';
// import TodoList from './components/TodoList';


// function App() {
//   const [todos, setTodos] = useState([
//     { id: 1, title: 'Buy groceries', completed: false },
//     { id: 2, title: 'Read a book', completed: false },
//   ]);
//   const [newTodo, setNewTodo] = useState('');
  
//   const toggleTodo = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   const addTodo = (e) => {
//     e.preventDefault();
//     if (!newTodo) return;
//     const newTodoItem = {
//       id: Date.now(),
//       title: newTodo,
//       completed: false,
//     };
//     setTodos([...todos, newTodoItem]);
//     setNewTodo('');
//   };

//   return (
//     <div>
//       <h1>My To-Do List</h1>
//       <form onSubmit={addTodo}>
//         <input
//            type="text"
//            value={newTodo}
//            onChange={(e) => setNewTodo(e.target.value)}
//            placeholder="Add new task..."
//         />
//         <button type="submit">Add</button>
//       </form>
//       <TodoList todos={todos} toggleTodo={toggleTodo} />
//     </div>
//   );
// }

// export default App;


// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import React, { useState } from 'react';
// import TodoList from './components/TodoList';

// function App() {
//   const [todos, setTodos] = useState([
//     { id: 1, title: 'Buy groceries', completed: false },
//     { id: 2, title: 'Read a book', completed: false },
//   ]);
//   const [newTodo, setNewTodo] = useState('');

//   const toggleTodo = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   const addTodo = (e) => {
//     e.preventDefault();
//     if (!newTodo) return;
//     const newTodoItem = {
//       id: Date.now(),
//       title: newTodo,
//       completed: false,
//     };
//     setTodos([...todos, newTodoItem]);
//     setNewTodo('');
//   };

//   return (
//     <div>
//       <h1>My To-Do List</h1>
//       <form onSubmit={addTodo}>
//         <input
//           type="text"
//           value={newTodo}
//           onChange={(e) => setNewTodo(e.target.value)}
//           placeholder="Add new task..."
//         />
//         <button type="submit">Add</button>
//       </form>
//       <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
//     </div>
//   );
// }

// export default App;


import viteLogo from './assets/watermelon.svg'
import background from './assets/watermelon2.svg'
import React, { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Съесть арбуз', completed: false },
    { id: 2, title: 'Выгулять кошку', completed: false },
  ]);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all');

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo) return;
    const newTodoItem = {
      id: Date.now(),
      title: newTodo,
      completed: false,
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true; 
  });

  return (
    <div>
      <h1>
        Мой список дел
        <img src={viteLogo} alt="Logo" style={{ width: '40px', marginLeft: '10px', marginTop: '10px' }} />
      </h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Добавить новую задачу..."
        />
        <button type="submit">Добавить</button>
      </form>
      <div className="task">
        <label htmlFor="filter">Фильтр задач: </label>
        <select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">Все</option>
          <option value="completed">Выполненные</option>
          <option value="incomplete">Невыполненные</option>
        </select>
      </div>
      <div class="background">
        <img src={background} alt="background" />
      </div>
      <div className="todo-list-container">
        <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
