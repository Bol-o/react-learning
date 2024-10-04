import React from "react";
import { useState } from "react";
import './App.css'

function WorkHistory(){
    const [inputValue, setInputValue] = useState("")
    const [items, setItems] = useState([])
function addJob(){
    var bronxDemon = document.getElementById("bronx-demon")
if (!inputValue){
    
    bronxDemon.placeholder = 'type summin bronx demon'
    alert('type summin bronx demon')
    return
}
bronxDemon.placeholder = 'Enter item'
setItems([...items, inputValue])
setInputValue('')


}


return(
    <>


    <div className="pers-det">
    <h1 >working history</h1>
    <form action="">
    <div >
        
        <div>
            <input type="text" className="pers-det" />
        </div>
               
    </div>
        


        <div>
          <ul id="job-list">
          {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}

          </ul>
        </div>
    </form>
    
    <form action="">


    <div>
            <button type="button" onClick={addJob}>Add job</button>
          </div>
          <div>
          <ul id="job-list">
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <input
        id="bronx-demon"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter item"
      />
    </form>
        <div>
          <ul id="job-list">
            is meee
          </ul>
        </div>
        <div>
          <ul id="job-list">
            is meee
          </ul>
        </div>
        
          

    </div>
    </>
)

}

export default WorkHistory