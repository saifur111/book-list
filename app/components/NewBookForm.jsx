"use client"
import React,{useContext,useState} from 'react'
import { BookContext } from '../contexts/BookContext'

const NewBookForm = () => {
    const {dispatch} = useContext(BookContext);
    const [title,setTitle] =useState('');
    const [author,setAuthor] = useState('');

    const handleBookSubmit=(e)=>{
        e.preventDefaule();
        dispatch({
            type : 'ADD_BOOK',
            book : {
                title,
                author,
            }
        });
        setTitle('');
        setAuthor('');
    }
  return (
    <form onSubmit={handleBookSubmit}>
        <input type="text" name="title" placeholder='Book Title' value={title}  onChange={(e)=>setTitle(e.target.value)} required/>
        <input type="text" name="author" placeholder='Author Name' value={title}  onChange={(e)=>setAuthor(e.target.value)} required/>
        <input type ="submit" value="add book" />
    </form>
  )
}

export default NewBookForm