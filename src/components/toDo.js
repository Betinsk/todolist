
import '../App.css'

function ToDo ({toDo, removeToDo}) {

    return(
        <div className='toDo'>
        <div className='content'>
            <p>{toDo.text}</p>
            <p className='category'>{toDo.category}</p>
          </div>
          <div> 
            <button className='complete'>Completar</button>
            <button onClick={() => removeToDo(toDo.id)} className='remove'>X</button>

          </div>
      </div>
    )

}

export default ToDo