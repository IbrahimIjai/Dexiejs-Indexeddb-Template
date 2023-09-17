import {  } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar'

import Dexie from 'dexie'
import { useLiveQuery } from 'dexie-react-hooks'
import Home from './components/Home'
import Todo from './components/Todo'

const db = new Dexie('DailyTasks')
db.version(1).stores({
  todos: '++id,task,completed,timeCreated',
  stickyNotes:"++id,note,timeCreated"
})

export const { todos, stickyNotes } = db
function App() {
  const allItems = useLiveQuery(() => todos.toArray(), [])

console.log(allItems);


  return (
    <>
    <Navbar />
     <div className="container">
        <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/todos" element={<Todo />} />
          {/* <Route path="/about" element={<About />} />  */}
        </Routes>
      </div>
   
    </>
  )
}

export default App
