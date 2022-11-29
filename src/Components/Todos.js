import React from 'react'
import { Todo } from './Todo'

export const Todos = (props) => {
    return (
        
        <ul className="space-y-1 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400">
             {
                props.todos.map((todo,index) => (
                <li key={todo.id}>
                    <Todo item={todo.todo} HandleDelete={props.HandleDelete} id={todo.id}/>
                </li>))
            }
        </ul>
           
        
  )
}
