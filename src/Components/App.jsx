import { click } from "@testing-library/user-event/dist/click";
import React, {useState} from "react";

function App() {

    const [isMouseOver, setMouseOver]= useState(false);
    const [name, setName]= useState("");

    // const [headText, setheadText]= useState("Hello")
    const [headtext, setheadtext]= useState("");
    function handleClick(event){
        setheadtext(name);
        event.preventDefault();
        // setheadText("Submitted");
        // setName(event.target.value);

        // console.log("Button clicked");
    }

  return (
    <div className="container">
      <h1>Hello {headtext}</h1>
      <form onSubmit={handleClick} >

     
      <input
      onChange = {(event) => setName(event.target.value)}
      type="text" placeholder="What's your name?" />
      <button 

      style={{ backgroundColor: isMouseOver ?  "black" : "white" }}
      onMouseOver={() => setMouseOver(true)}
    //   onMouseOut={handleMouseOut}
      onMouseOut={()=>setMouseOver(false)}
      onClick={handleClick}
      
      >Submit</button>
       </form>
    </div>
  );
}

export default App;
