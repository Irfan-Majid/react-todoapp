import React, {useState}from 'react'

export const NewTodo = (props) => {
  const [todo,setTodo] = useState({
    title:'',
    des:''
  })
  const {title,des} = todo
  const HandleSubmit = (event) => {
    event.preventDefault()
    props.OnNewTodo(todo);
  }
  const HandleChange = (event) => {
    const name = event.target.name;
    setTodo((oldData)=>{
        return { ...oldData, [name]:event.target.value}
    })
  }
  return (
    <form onSubmit={HandleSubmit}>
        <div>
            <label htmlFor="title"> Title: </label>
            <input type="text" name="title" id="title" value={title} onChange={HandleChange}/>
        </div>
        <div>
            <label htmlFor="des"> Description: </label>
            <input type="text" name="des" id="des" value={des} onChange={HandleChange}/>
        </div>
        <button>Add</button>
    </form>
  )
}
