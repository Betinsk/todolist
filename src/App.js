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

    const addToDo = (text, category) => {
      
      const newToDos = [...todos, {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false
      }]

      setTodos(newToDos)
    }

    const removeToDo = (id) => {
        // Cria uma cópia do array de toDos 
      const newToDos = [...todos]
        // Filtra os toDos, removendo aquele cujo id corresponde ao id fornecido como argumento
      const filteredToDos = newToDos.filter((toDo) => 
        toDo.id !== id
      )

    // Atualiza o estado `toDos` com a nova lista filtrada
      setTodos(filteredToDos)

    }

  return (
    <div className='app'>
      <h1>Lista de tarefas</h1>
      <div className='todoList'> 
      {
        todos.map((toDo) => (
          <ToDo toDo={toDo} removeToDo={removeToDo} key={toDo.id}/>
        ))
      }
      </div>
      <ToDoForm addToDo={addToDo}/>
    </div>
  )
}

export default App;
