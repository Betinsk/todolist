import './App.css';
import {useState, useEffect} from 'react'
import ToDo from './components/toDo';
import ToDoForm from './components/toDoForm';
import Search from './components/search';
import Filter from './components/filter';
import CreateCategory from './components/createCategory';

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

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/categories');
        if (!response.ok) {
          throw new Error('Erro ao buscar dados da API');
        }
        const jsonData = await response.json();
        console.log(jsonData)
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };
   
    fetchData();
  }, []);




  const[search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')
  const [sort, setSort] = useState('Asc')

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

  return (
    <div className='app'>
      <h1>Lista de tarefas</h1>
      <Search search={search} setSearch={setSearch}/>
      <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
      <div className='todoList'> 
      {
        toDos
        .filter((toDo) => filter === 'All'? true : filter === 'Completed'? toDo.isCompleted : !toDo.isCompleted)
        .filter((toDo) =>
         toDo.text.toLowerCase().includes(search.toLowerCase())
         )
         .sort((a, b) => sort === 'Asc'
          ? a.text.localeCompare(b.text) 
          : b.text.localeCompare(a.text))
        .map((toDo) => (
          <ToDo toDo={toDo} removeToDo={removeToDo} completeToDo={completeToDo} key={toDo.id}/>
        ))
      }
      </div>

      <CreateCategory />

      <ToDoForm data={data} setData={setData} addToDo={addToDo}/>
      
    

    </div>
  )
}

export default App;
