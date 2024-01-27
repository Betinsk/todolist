import { useState } from 'react'
import '../App.css'

function ToDoForm({ addToDo, data, setData }) {

    const [value, setValue] = useState('')
    const [category, setCategory] = useState('')

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

                    {data.map(item => (
                        <>
                            <option value={item.category}>{item.category}</option>
                        </>
                    ))}


                </select>

                {/* Exibindo o valor selecionado */}
                  <p>Você selecionou: {value}</p>

                <button >Criar tarefa</button>



            </form>
        </div>
    )
}

export default ToDoForm