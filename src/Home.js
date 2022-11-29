import React,{useState} from 'react'
import { v4 as uuidv4} from 'uuid'
import { NewTodo } from './Components/NewTodo'
import { Todos } from './Components/Todos'

export const Home = () => {
    const DummyTodos = [
        {
            id:1,
            title:'sdfsd 1',
            des: 'asd 1'
        },
        {
            id:2,
            title:'sdfsd 2',
            des: 'asd 2'
        }
    ]
    const [todos,setTodos] =useState([])

    const HandleTodo = (todo) => {
        setTodos((oldData)=>{
            return [ ...oldData, {id:uuidv4(),todo:todo}]
        })
    }
    const HandleDelete = (id) => {
        setTodos((OldData)=> {
            var filteredArray = todos.filter((item) => item.id !== id)
            return filteredArray
        });
    }
  return (
    <>
        <NewTodo OnNewTodo={HandleTodo}/>
        <h1 className="text-3xl font-bold underline">
        Todos
        </h1>

        <Todos todos={todos} HandleDelete={HandleDelete}/>
    </>
    
  )
}
