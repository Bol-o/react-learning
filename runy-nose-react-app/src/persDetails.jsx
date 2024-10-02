import React, { useState } from "react";
import './App.css'

//const [submButt, setSubmButt] = useState('')

function submitButton(){
  var submBut = document.getElementById('edit');
  submBut.innerText = 'Edit'
  
} 


function PersDetails(){

  const [name, setName] = useState('');

  const onButtonClick = () => {
    const firstName = document.getElementById('firstName')

    setName(firstName.value)
    firstName.value = '';

   
    submitButton()
  }

  const editName = () => {

    firstName.value = name
    setName('')


  }



    return (
        <>
        <div className="pers-det"><h1>personal details</h1>
    


    <form>
      <label>Enter your first name:
        <textarea type="text" id="firstName"> </textarea>
        <button
            type="button"
            onClick={onButtonClick}
            >Add</button>

        <button 
            id="edit"
            type="button"
            onClick={editName}
        
           >
            

        </button>
      </label>
      <div>REsults: {name}</div>
     
    </form>
    <form>
      <label>Enter your second name:
        <input type="text" />
      </label>
    </form>
    <form>
      <label>Enter your email address:
        <input type="email" />
      </label>
    </form>

    
    </div>
    <button id="submit">Submit</button>
    </>
    )

}

export default PersDetails;