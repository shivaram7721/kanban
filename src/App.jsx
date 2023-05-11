import './App.css'
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Nav from './nav/Nav';

function App() {

console.log(DragDropContext)
console.log(Droppable)
  return (
    <>

      {/* <h1>Kanban board</h1> */}
      <Nav/>
    </>
  )
}

export default App
