import React from 'react'

const Content = () => {

const handleNamesChange = () =>{
    const names = ["Timi" ,"Kc" , "PJ"] 
     const int = Math.floor(Math.random() * 3)
     console.log(names[int]);
     return names[int]
  }
  
  return (
    <main>
         <p> hello {handleNamesChange()} </p>
    </main>
  )
}

export default Content