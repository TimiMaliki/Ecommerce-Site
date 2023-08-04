import React from 'react'

const Footer = ({length}) => {
    const today = new Date();
     const date =  today.getFullYear()
  return (
    <footer>
      <p>{length} list items {length === 1 ? 'item' : 'items'}</p>
       <p>Timi &copy; {date}</p>
    </footer>
  )
}

export default Footer