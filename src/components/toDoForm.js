import { useState } from 'react'
import '../App.css'
import DeletCategory from './deletCategory'
import EditCategory from './editCategory'

function ToDoForm({ addToDo, data }) {

    const [value, setValue] = useState('')
    const [category, setCategory] = useState('')
    const [categoryId, setSelectedItemId] = useState(null); // Estado para armazenar o ID do item selecionado
    const [valueEdit, setValueEdit] = useState('')

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
                
                <select className='selectOp' onChange={handleCategoryChange}>
                    <option>Selecione uma categoria</option>
                  
                    {data.map((item) => (
                       
                            <option key={item.id} value={item.id} data-category={item.category}>
                                {item.category}
                            </option>
                    ))}
                    
                    </select>
                <button >Criar tarefa</button>
                <DeletCategory categoryId={categoryId} />  
                    
                </form>
        
                  <h2>Editar Categoria:</h2>
                
                <form>
                <input type="text" placeholder="Edite a categoria"
                    value={valueEdit}
                    onChange={(e) => setValueEdit(e.target.value)}
                />

                <select className='selectOp' onChange={handleCategoryChange}>
                    <option>Selecione uma categoria</option>
                  
                    {data.map((item) => (
                       
                            <option key={item.id} value={item.id} data-category={item.category}>
                                {item.category}
                            </option>
                    ))}
                    
                    </select>
            
                <EditCategory categoryId={categoryId} valueEdit={valueEdit} />
                </form>

        </div>
    )
}

export default ToDoForm