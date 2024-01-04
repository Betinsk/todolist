
import '../App.css'

function ToDo ({toDo, removeToDo, completeToDo}) {

    return(
        <div className='toDo' style={{textDecoration: toDo.isCompleted ? 'line-through': ''}}>
        <div className='content'>
            <p>{toDo.text}</p>
            <p className='category'>{toDo.category}</p>
          </div>
          <div> 
            <button  onClick={() => completeToDo(toDo.id)} className='complete'>Completar</button>
            <button onClick={() => removeToDo(toDo.id)} className='remove'>X</button>

          </div>
      </div>
    )

}

export default ToDo