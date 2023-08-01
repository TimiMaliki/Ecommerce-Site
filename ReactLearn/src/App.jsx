import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";
import React, { useState } from "react";

function App() {
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

  // defining the new state for the addlist component
  const [newItem, setNewItem] = useState("");


  const setAndSave = (newItems)=>{
    setItems(newItems);

    localStorage.getItem("shoppingList", JSON.stringify(newItems));
  }
 

  const addItem = (item) => {
             const id = items.length ? items[items.length - 1].id + 1 : 1
             const myNewItem = {id, checked:false , itemList:item}
             const listItems = [...items , myNewItem]
             setAndSave(listItems);        

             console.log(item)
  }

   

  const handleChecked = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSave(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem)
    setNewItem("");
  };

  return (
    <div className="App">
      {/* this is the Header component */}
      <Header title="Groceries" />
      {/* tis is the AddItem component */}
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      {/* tis is the Content component */}
      <Content
        items={items}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
      {/* tis is the Footer component */}
      <Footer length={items.length} />
    </div>
  );
}

export default App;
