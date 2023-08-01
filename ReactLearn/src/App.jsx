import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import React, { useState } from "react";

function App(){
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      itemList: "One half pound bag of Cocoa Covered Almonds Unsalted",
    },
    {
      id: 2,
      checked: false,
      itemList: "Item 2",
    },
    {
      id: 3,
      checked: false,
      itemList: "Item 3",
    },
  ]);

  const handleChecked = (id) => {
    const listItems = items.map((item) => 
     ( item.id === id ? 
    { ...item, checked: !item.checked } : item )
    );

    setItems(listItems)

    localStorage.getItem('shoppingList' , JSON.stringify(listItems))
  };

   const handleDelete = (id) => {
     const listItems = items.filter((item) => 
         item.id !== id)
     setItems(listItems)
     localStorage.getItem('shoppingList' , JSON.stringify(listItems))
   }

  return (
    
   
    <div className='App'>
       <Header   title="Groceries"/>
    <Content 
    items={items}
     handleChecked={handleChecked}
     handleDelete={handleDelete}/> 

    <Footer length={items.length}/>
    </div>
  )
}

export default App
