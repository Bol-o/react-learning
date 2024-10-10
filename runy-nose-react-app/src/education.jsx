import React from "react";
import { useState } from "react";
import './App.css'



function EduDetails(){

    const [schoolName, setSchName] = useState([]);
    const [inputValue, setInputValue] = useState('')
    const [schoolsList, setSchList] = useState([])
    // const inputText = document.getElementById('school-name');
    // var inputText2 = inputText.value
    

    const onButtonClick = () => {

      if(!inputValue){
        alert('enter something')
        return
      }
      //const schoolNamen = document.getElementById('schoolName') //this has to be inside this--
      //--funtion as when outisde, the initial render doesn't load//
    // let schoolText = schoolNamen.value
      
     // alert(schoolNamen.value)
    setSchName([...schoolName, inputValue]);
    setSchList([''])
    setInputValue('')

    }
    
   
    // inputText2 = schoolNamen.value 

    return (
        <>
        <div className="pers-det">
          
          <h1>education history</h1>
          
    <form>
         {/* <label for="edu-His">Enter your education history:</label>
         
         <input id="edu-His"  placeholder="education hsitory"/> */}
              
        <form action="">

            <label for="school-name">School name :</label> 
            
            <input type="text"
             name="school-name"
             id="schoolName" 
             placeholder="name of the school"
             value={inputValue}
             onChange={(e) => setInputValue(e.target.value)}
             />

            <button
            type="button"
            onClick={onButtonClick}
            >Add</button>
            
          </form>
      
       


    </form>
    <div>results: {schoolsList.map((item, index) => (
      <ul key={index}>{item}{schoolName.map((item, index) => (
        <li key={index}>{item}</li>))}
        </ul>
    )
    )}</div>
    
    </div>
    </>
    
    )

}

export default EduDetails  