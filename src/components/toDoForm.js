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
    console.log(categoryId)
    console.log(category)


    const handleCategoryChange = (e) => {
        const category = e.target.options[e.target.selectedIndex].getAttribute('data-category');
        const categoryId = e.target.value;
        setCategory(category);
        setSelectedItemId(categoryId);
    };

    return (
        <div className="toDoForm">
            <h2>Criar tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Digite o título"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                
                <div className='divSelect'>

                <select className='selectOp' onChange={handleCategoryChange}>
                    <option>Selecione uma categoria</option>
                  
                    {data.map((item) => (
                       
                            <option key={item.id} value={item.id} data-category={item.category}>
                                {item.category}
                            </option>
                    ))}
                    
                    </select>
                </div>
                <button >Criar tarefa</button>
                <DeletCategory categoryId={categoryId} />
            </form>
           

        </div>
    )
}

export default ToDoForm