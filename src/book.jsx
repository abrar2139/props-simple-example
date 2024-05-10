import React from 'react'
import './books.css'
const Book = ({bookauthor,bookimage,booktitle}) => {
  return (
    <>
    <div className="card" style={{placeSelf:"center"}}>
        <img src={bookimage} alt="" />
        <h2>{booktitle}</h2>
        <p>{bookauthor}</p>
    </div>
    
    
    </>
  )
}

export default Book
