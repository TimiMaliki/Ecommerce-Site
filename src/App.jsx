import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import React, { useState, useEffect } from "react";

function App() {
  const API_URL = 'http://localhost:3500/itemss';

  const [items, setItems] = useState([]);

  // defining the new state for the addlist component
  const [newItem, setNewItem] = useState("");

  //defining the new state for the searchItem component
  const [search, setSearch] = useState("");

  useEffect(() => {
    
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        const listItems = await response.json();
        console.log(listItems);
        setItems(listItems);
      } catch (err) {
        console.log(err.stack);
      }
    };
    async () => {
      await fetchItems()()};
  }, []);

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, itemList: item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };

  const handleChecked = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
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
      <SearchItem search={search} setSearch={setSearch} />
      {/* tis is the Content component */}
      <Content
        items={items.filter((item) =>
          item.itemList.toLowerCase().includes(search.toLowerCase())
        )}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
      {/* tis is the Footer component */}
      <Footer length={items.length} />
    </div>
  );
}

export default App;
