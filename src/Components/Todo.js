import React from 'react'

export const Todo = (props) => {
    const HandleDelete = (id) => {
        props.HandleDelete(id)
    }
   return (
    <div>
        <h1 className="text-3xl font-bold underline">
        {props.item.title}
        </h1>
        <p>
        {props.item.des}
        </p>
        <button className="text-center text-indigo-400 font-bold rounded py-2 w-2/12 focus:outline-none bg-red-900 border-2 border-indigo-400" onClick={()=>{HandleDelete(props.id)}}>
        <i className="fa fa-trash" aria-hidden="true"></i>

        </button>

    </div>
  )
}
