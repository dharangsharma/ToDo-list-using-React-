import React, { useState } from "react";

function App() {

  const [inputText,setInputText] = useState("")
  const [items,setItems] = useState([]);

  function handleChange(event){
    const prevValue = event.target.value;
    setInputText(prevValue);

  }

  function addItem(){
    setItems(prevItem=>{
      return [...prevItem,inputText]
    });
    setInputText("");
}
 
  

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item)=>{
            return <li>{item}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
