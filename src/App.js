import './App.css';
import {useState} from 'react'
import ToDo from './components/toDo';
import ToDoForm from './components/toDoForm';
import Search from './components/search';

function App() {

  const [toDos, setToDos] = useState([
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
      
      const newToDos = [...toDos, {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false
      }]

      setToDos(newToDos)
    }

    const removeToDo = (id) => {
        // Cria uma cópia do array de toDos 
      const newToDos = [...toDos]
        // Filtra os toDos, removendo aquele cujo id corresponde ao id fornecido como argumento
      const filteredToDos = newToDos.filter((toDo) => 
        toDo.id !== id
      )

    // Atualiza o estado `toDos` com a nova lista filtrada
    setToDos(filteredToDos)
    }

    const completeToDo = (id) => {
      const newToDos = [...toDos] 
      newToDos.map((toDo) =>
       toDo.id === id? toDo.isCompleted = !toDo.isCompleted : toDo)
    
      setToDos(newToDos)
    }

    const[search, setSearch] = useState('')


  return (
    <div className='app'>
      <h1>Lista de tarefas</h1>
      <Search search={search} setSearch={setSearch}/>
      <div className='todoList'> 
      {
        toDos.filter((toDo) =>
         toDo.text.toLowerCase().includes(search.toLowerCase())
         )
        .map((toDo) => (
          <ToDo toDo={toDo} removeToDo={removeToDo} completeToDo={completeToDo} key={toDo.id}/>
        ))
      }
      </div>
      <ToDoForm addToDo={addToDo}/>
    </div>
  )
}

export default App;
