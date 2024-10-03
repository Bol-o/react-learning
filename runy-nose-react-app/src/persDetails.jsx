import React, { useState } from "react";
import './App.css'

//const [submButt, setSubmButt] = useState('')



function editButton(){
  var editBut = document.getElementById('edit');
  editBut.innerText = 'Edit'
  
  
} 



function PersDetails(){
 
  const [name, setName] = useState('');
  const [poczta, setpoczta] = useState('');
  const [secondName, setsecondName] = useState('');
  

  const addButton = () => {
    const email = document.getElementById('email')
   
    const firstName = document.getElementById('firstName')
    
    const secName = document.getElementById('secName')
    
    
    //const results = document.getElementById('results')

    if(!firstName.value  || !secName.value || !email.value){
      return
    }  

   
    setName(firstName.value)
    console.log(firstName);
    firstName.value = 'submit or edit';


    setsecondName(secName.value)
    secName.value = 'submit or edit';

    setpoczta(email.value)
    email.value = "submit or edit";

    
   
    editButton()
    
  }

  const editName = () => {
    

    // const emailAdd = document.getElementById('emaIl')
    firstName.value = name
   // setName('')
    secName.value = secondName
    if(secName){
      console.log('secname has value: ' + true);
     }
   // setsecondName('')
   
   email.value = poczta
  

    

  }
  function submitIt(){

    var submitResultName = document.getElementById('submit-result-name')
    var submitResultSurname = document.getElementById('submit-result-surname')
    var submitResultEmail = document.getElementById('submit-result-email')
    
    
    
    submitResultName.textContent = `ye name is ${name}`
    submitResultSurname.textContent = `ye name is ${secondName}`
    submitResultEmail.textContent = `ye name is ${poczta}`

    console.log('wtf?');
    
    }
  



    return (
        <>
        <div className="pers-det"><h1>personal details</h1>
    


    <form>
      <label>Enter your first name:
        <textarea type="text" id="firstName"> </textarea>
     
        <button
            type="button"
            onClick={addButton}
            >Add</button>

        <button 
            id="edit"
            type="button"
            onClick={editName}
        
           >
            

        </button>
      </label>
      <label>Enter your second name::</label>
        
      <textarea id="secName" type="text"></textarea>
     
    </form>
   
    <form>
      <label id>Enter your email</label>
        
        <input type="email" id="email" />
      
    </form>
   
   
    
    </div>
    <div id="results"></div>
    <button id="submit" onClick={submitIt}>Submit</button>
    <div id="submit-result-name"></div>
    <div id="submit-result-surname"></div>
    <div id="submit-result-email"></div>
    </>
    )

}

export default PersDetails;