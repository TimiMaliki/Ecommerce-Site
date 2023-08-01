import ItemList from "./ItemList";
const Content = ({items,handleChecked,handleDelete}) => {

  return (
    <main>
       {items.length ? (
     
            <ItemList
            
            items={items}
            handleChecked={handleChecked}
            handleDelete={handleDelete}/>
) : (
  <p style={{marginTop:"3rem"}}>List Empty</p>
)}
    </main>
  );
};

export default Content;

 