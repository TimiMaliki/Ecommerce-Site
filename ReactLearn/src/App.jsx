import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import React, { useState } from "react";

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')));

  // defining the new state for the addlist component
  const [newItem, setNewItem] = useState("");

  //defining the new state for the searchItem component
  const [search, setSearch] = useState('')


  const setAndSave = (newItems)=>{
    setItems(newItems);
    localStorage.setItem('shoppingList', JSON.stringify(newItems));
  }
 

  const addItem = (item) => {
             const id = items.length ? items[items.length - 1].id + 1 : 1
             const myNewItem = {id, checked:false , itemList:item}
             const listItems = [...items , myNewItem]
             setItems(listItems)
             setAndSave(listItems)
  }

   

  const handleChecked = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSave(listItems)
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSave(listItems)
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
      {/* tis is the SearchItem component */}
      <SearchItem
       search={search}
       setSearch={setSearch}
       />
      {/* tis is the Content component */}
      <Content
        items={items.filter((item) => ((item.itemList).toLowerCase())
          .includes(search.toLowerCase()) )}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
      {/* tis is the Footer component */}
      <Footer length={items.length} />
    </div>
  );
}

export default App;
