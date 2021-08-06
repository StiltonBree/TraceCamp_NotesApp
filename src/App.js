import React, {useState,useEffect} from 'react'


const App = ()=>{
  //for storing and updating the text in the text area
  const [text,updateText] = useState(" ");
  const [autoStatus, setAutoStatus] = useState(false);
  
  const [isSaved,setIsSaved] = useState(false);

  const on_change = (event)=>
  {
   const newValue = event.target.value;
   updateText(newValue);
   setIsSaved(false);
  }

  useEffect(()=>{
    updateText(localStorage.getItem("note"));
    setIsSaved(true);
  },[]);


  useEffect(()=>{
    if(autoStatus === true){
    autoSave();
    }
  },[text, autoStatus]);
  

  function toggleAuto()
  {
    setAutoStatus(!autoStatus);
  }
  const saveText = () =>
  {
    localStorage.setItem("note", text);
    setIsSaved(true);
    
  }

  //automatically save the users typed text
  const autoSave = () =>
  {
   localStorage.setItem("note",text);
   setIsSaved(true);
  }
  return (
  <div className = "w-full h-screen flex flex-row justify-center" > 
   <div className = "flex flex-col justify-center"> 
     <textarea
      value = {text}
      onChange = {on_change}
      className = "border border-black">
    </textarea>
     <button className = "border border-black bg-green-300" onClick = {saveText}>Save Text</button>
     {isSaved? "Text Saved!":"Save if you wish!"}
     <button className = "border border-black btn" onClick = {toggleAuto}>AutoSave?</button>
     {autoStatus?"Auto is on":"Auto is off"}
     </div>
   </div>
  );
}

export default App;
