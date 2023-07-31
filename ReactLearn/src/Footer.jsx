import React from 'react'

const Footer = () => {
    const today = new Date();
     const date =  today.getFullYear()
  return (
    <footer>
       <p>Timi &copy; {date}</p>
    </footer>
  )
}

export default Footer