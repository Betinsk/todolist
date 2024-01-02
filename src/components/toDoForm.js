import '../App.css'

function ToDoForm () {
    return (
       <div className="toDoForm">
        <h2>Criar tarefa:</h2>
        <form>
            <input type="text" placeholder="Digite o título"/>

                <select>
                    <option value=''>Selecione uma categoria</option>
                        <option value='trabalho'>Trabalho</option>
                        <option value='pessoal'>Pessoal</option>
                </select>

                <button>Criar tarefa</button>


         
        </form>
       </div>
    )
}

export default ToDoForm