// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
// import './App.css';

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState('');

//   const addTask = () => {
//     if (newTask.trim() !== '') {
//       setTasks([...tasks, newTask]);
//       setNewTask('');
//     }
//   };

//   const removeTask = (index) => {
//     const updatedTasks = tasks.filter((_, i) => i !== index);
//     setTasks(updatedTasks);
//   };

//   return (
//     <div className="container">
//       <h1 className="mt-4">To-Do List</h1>
//       <div className="mb-3">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Enter a new task"
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//         />
//         <button className="btn btn-primary mt-2" onClick={addTask}>
//           Add
//         </button>
//       </div>
//       <ul className="list-group">
//         {tasks.map((task, index) => (
//           <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
//             {task}
//             <button className="btn btn-danger" onClick={() => removeTask(index)}>
//               Remove
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import LoginForm from './LoginForm';
import './LoginForm.css'

function App() {
  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}

export default App;
