import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, deleteToDo, getAllToDo, updateToDo } from "./utils/HandleApi";




function App() {


  const [toDo, setToDo] = useState([])

  const [text, setText] = useState("")

  const [isUpdating, setIsUpdating] = useState(false)

  const [toDoId, setToDoID] = useState("")



  useEffect(() => {
    getAllToDo(setToDo)
  }, [])

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoID(_id)

  }
  

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo APP</h1>

        <div className="top" >
          <input 
          type="text"
          className="text" 
          value={text}
          placeholder="Add new task.." 
          onChange={(e) => setText(e.target.value)}/>

          <div className="add"
           onClick={ isUpdating ? 
            () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
            : () => addToDo(text,setText, setToDo)}>
            {isUpdating ? "Update" : "Add" }
            </div>
        </div>

        <div className="list">

          {toDo.map((item) => <ToDo 
          key={item._id} 
          text={item.text} 
          updateMode= {() => updateMode(item._id, item.text)} 
          deleteToDo= {() => deleteToDo(item._id, setToDo)}  /> )}


        </div>
      </div>
     
    </div>
  );
}

export default App;
