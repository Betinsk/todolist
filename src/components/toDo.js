
import '../App.css'

function ToDo ({toDo}) {

    return(
        <div className='toDo'>
        <div className='content'>
            <p>{toDo.text}</p>
            <p className='category'>{toDo.category}</p>
          </div>
          <div> 
            <button>Completar</button>
            <button>X</button>

          </div>
      </div>
    )

}

export default ToDo