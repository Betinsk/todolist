import { useState } from 'react'
import '../App.css'
import DeletCategory from './deletCategory'

function ToDoForm({ addToDo, data }) {

    const [value, setValue] = useState('')
    const [category, setCategory] = useState('')

    const [categoryId, setSelectedItemId] = useState(null); // Estado para armazenar o ID do item selecionado


    const handleSubmit = (e) => {
        e.preventDefault()
        if (!value || !category)
            return
        addToDo(value, category)
        //adicionar todo
        //Limpar campos
        setValue('')
        setCategory('')
        console.log('enviou form')
    }
    console.log(category)

    return (
        <div className="toDoForm">
            <h2>Criar tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Digite o título"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                
                <select  value={category}
                    onChange={(e) => {setCategory(e.target.value);
                     setSelectedItemId(e.target.key); // Defina o ID da categoria selecionada
                    }}
                    
                    >
                    <option value=''>Selecione uma categoria</option>
                  
                    {data.map((item) => (
                       
                            <option key={item.id} value={item.id}>
                                {item.category}
                            </option>
                    ))}
                    
                    </select>
                    
                <button >Criar tarefa</button>
                <DeletCategory categoryId={category} />
            </form>
           

        </div>
    )
}

export default ToDoForm