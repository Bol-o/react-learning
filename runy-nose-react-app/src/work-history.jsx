import React from "react";
import { useState } from "react";
import './App.css'

function WorkHistory(){
    const [inputValue, setInputValue] = useState("")
    const [items, setItems] = useState([])
    const [ulList, setUlList] = useState([])
function addJob(){
    var bronxDemon = document.getElementById("bronx-demon")
    // var bronxDemon2 = document.getElementById("bronx-demon2")
if (!inputValue){
    
    bronxDemon.placeholder = 'type summin bronx demon'
    // bronxDemon2.placeholder = 'type summin bronx demon'
    alert('type summin bronx demon')
    alert(bronxDemon.placeholder)
    return
}
bronxDemon.placeholder = 'Enter item'
// bronxDemon2.placeholder = 'Enter item'
setItems([...items, inputValue])
setInputValue('')
setUlList([''])


}


return(
    <>


    <div className="pers-det">
    <h1 >working history</h1>
    <form action="">
    <div >
        
        <div>
            <textarea
            id="bronx-demon"
            type="text" 
            className="pers-det"             
             value={inputValue}
             onChange={(e) => setInputValue(e.target.value)}
             placeholder="Enter item" ></textarea>
        </div>
               
    </div>
        


        <div>
            {ulList.map((item, index) => (
          <ul id="job-list" key={index}>{item}
          {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}

          </ul>
            ))}
        </div>
    </form>
    
    <form action="">


    <div>
            <button type="button" onClick={addJob} >Add job</button>
          </div>
          {/* <div>
          <ul id="job-list">
            {items.map((item, index) => (
                <li className="jobs" key={index}>{item}</li>
            ))}
          </ul>
        </div> */}

        {/* <input  
        id="bronx-demon2"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter item"
      /> */}
    </form>
        {/* <div>
          <ul id="job-list">
            is meee
          </ul>
        </div>
        <div>
          <ul id="job-list">
            is meee
          </ul>
        </div> */}
        
          

    </div>
    </>
)

}

export default WorkHistory