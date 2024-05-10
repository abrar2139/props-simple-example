import React from 'react'
import {BooksData} from './books-array.js'
import './books.css'
import Book from './book.jsx'
const Books = () => {
  return (
    <>
    <h1 style={{textAlign:"center",padding:"10px",color:"brown"}}>Simple Example of Props</h1>
    <div className='books' style={{height:"100vh",width:"100%",display:'grid',padding:" 20px",justifyItems:"center",alignContent:"center",gridTemplateColumns:"repeat(3,1fr)",gap:"20px",}}>
    {BooksData.map((books)=>{
      return( <Book {...books}/>)
    })}
    </div>
    </>
  )
}

export default Books