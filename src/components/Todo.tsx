

import React from 'react'
import Dexie from 'dexie'
import { useLiveQuery } from 'dexie-react-hooks'
import { todos } from '../App'


export default function Todo() {

    const addTask = async (event) => {
        event.preventDefault()
        const taskField = document.querySelector('#taskInput')

            await todos.add({
                task: taskField['value'],
                completed: false,
              })
              taskField['value'] = ''
      }

  return (
    <div>
       <form className="add-item-form" onSubmit={addTask}>
        <input type="text" id="taskInput" className='text-gray-800' placeholder="What do you want to do today?" required />
        <button type="submit" className="waves-effect btn teal right">
          Add
        </button>
      </form>
    </div>
  )
}
