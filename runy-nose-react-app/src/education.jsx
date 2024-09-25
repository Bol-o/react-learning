import React from "react";
import { useState } from "react";
import './App.css'



function EduDetails(){

    const [schoolName, setSchName] = useState('noname');

    // const inputText = document.getElementById('school-name');
    // var inputText2 = inputText.value
    

    const onButtonClick = () => {
      const schoolNamen = document.getElementById('schoolName')
    // let schoolText = schoolNamen.value

     // alert(schoolNamen.value)
    setSchName(schoolNamen.value);

    }
    
   
    // inputText2 = schoolNamen.value 

    return (
        <>
        <div className="pers-det"><h1>education history</h1>
    


    <form>
      <label for="edu-His">Enter your education history:</label>
         
      <textarea  id="edu-His"  >your education goes here</textarea>
        <form action="">
            <label for="school-name">School name :</label> 
            
            <input type="text" name="school-name" id="schoolName"  />

            <button
            type="button"
            onClick={onButtonClick}
            >Add</button>
            
      </form>
      
       


    </form>
    <div>results: {schoolName}</div>
    
    </div>
    </>
    
    )

}

export default EduDetails  