import React, { useState } from 'react'


const Content = () => {

  const [name ,setName] =useState('Dave');
   
const handleNamesChange = () =>{
    const names = ["Timi" ,"Kc" , "PJ"] 
     const int = Math.floor(Math.random() * 3)
     console.log(names[int]);
     setName (names[int])
     }
   const handleClick = () =>{
    console.log('you clicked it');
   }

   const handleClick2  = (name) =>{
    console.log(`You click ${name}`);
   }

   const handleClick3 = (e) =>{
    console.log(e.target.innerText );
   }
  return (
    <main>
         <p onDoubleClick={handleClick}>
           Hello {name}</p>
         <br />
         <button onClick={() => handleNamesChange()}>
          changeName </button>

         <button onClick={() => {handleClick2('Timi')}}>
          click again</button>

         <button onClick={(e) => {handleClick3(e)}}>
          click </button>
    </main>
  )
}

export default Content