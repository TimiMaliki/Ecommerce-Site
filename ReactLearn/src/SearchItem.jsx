import React from 'react'


const SearchItem = ({search,setSearch}) => {
  return (
   <form action="searchForm" className='searchForm' onSubmit={(e) => e.preventDefault()}>
       <label htmlFor="search">Search</label>
       <input type="text" 
       id='search'
       role='searchBox'
       placeholder='Search Items'
       value={search}
       onChange={(e) => setSearch(e.target.value)} 
       />
       
   </form>
  )
}

export default SearchItem