import { useState } from 'react'
import '../App.css'

function ToDoForm({ addToDo, data }) {

    const [value, setValue] = useState('')
    const [category, setCategory] = useState('')
    const [createCategory, setData] = useState('')

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



    return (

        <div className="toDoForm">
            <h2>Criar tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Digite o título"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />

                <select  
                    onChange={(e) => setCategory(e.target.value)} >
                    <option value=''>Selecione uma categoria</option>

                    {data.map((item, index) => (
                        <>
                            <option key={index}>
                                {item.category}
                            </option>
                        </>
                    ))}
                </select>

                {/* Exibindo o valor selecionado */}
                  <p>Você selecionou: {category}</p>

                <button >Criar tarefa</button>
            </form>
        </div>
    
    )
}

export default ToDoForm