import './App.css';
import {useState} from 'react'
import ToDo from './components/toDo';
import ToDoForm from './components/toDoForm';

function App() {

  const [todos, setTodos] = useState([
    {
      id:1,
      text: "criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }

  ])


  return (
    <div className='app'>
      <h1>Lista de tarefas</h1>
      <div className='todoList'> 
      {
        todos.map((toDo) => (
          <ToDo toDo={toDo} key={toDo.id}/>
        ))
      }
      </div>
      <ToDoForm/>
    </div>
  )
}

export default App;
