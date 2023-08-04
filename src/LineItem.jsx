import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({item,handleChecked,handleDelete}) => {
  return (
    <li className="item">
    <input
      type="checkbox"
      onChange={() => {
        handleChecked(item.id);
      }}
      checked={item.checked}
    />

    <label style ={(item.checked) ? {
      textDecoration: "line-Through"
    } : null}
    onDoubleClick={() => {
        handleChecked(item.id);
      }}
    >{item.itemList}</label>
    <FaTrashAlt 
    onClick={() =>{
      handleDelete(item.id)
    }}
    role="button" tabIndex="0" />
  </li>
  )
}

export default LineItem