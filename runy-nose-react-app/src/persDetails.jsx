import React from "react";
import './App.css'


function PersDetails(){

    return (
        <>
        <div className="pers-det"><h1>personal details</h1>
    


    <form>
      <label>Enter your first name:
        <input type="text" />
      </label>
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
    </>
    )

}

export default PersDetails;