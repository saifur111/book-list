"use client"
import React,{useContext} from 'react'
import { BookContext } from '../contexts/BookContext'


const Navbar = () => {
    const {books} = useContext(BookContext);

  return (
    <div>
        <h1>Reading Book List</h1>
        <p>Currently You Have {books.length} books to get through..</p>
    </div>
  )
}

export default Navbar