import React, { useEffect } from 'react'
import './busqueda.css'

export const Busqueda = ({title,setIsOpen}) => {

  /* const handleSubmit =  (e)=>{
    e.preventDefault()
  } */

  return (
    <div id="modal" className="modal">
        <div className="modal-content">
          <div className='formSearch'>
            <form className="formulario">
              <input type="text" name="location" id="location" placeholder="location" className="inputLocal" />
              <input type="text" name="location" id="location" placeholder="search"  className="inputSearch" />
              <button className="btn" type="submit"><img src='/busqueda.svg'/></button>
              <button className="btn" type="submit"> Modal</button>
            </form>      
          </div>
          
        </div>
    </div>   
  )
}


export const Modal = ({title, setIsOpenModal}) => {
  return (
    <>
    
      <div id="modal" className="modal">
          <div className="modal-content">
              <span onClick={setIsOpenModal} className="close">&times;</span>
              <h2>{title}</h2>
              <form id="contactForm">
                <input type="text" name="location" id="location" placeholder="location" className="inputLocal" />
                <input type="text" name="location" id="location" placeholder="search"  className="inputSearch" />
                <button className="btn" type="submit"><img src='/busqueda.svg'/></button>
              </form>   
          </div>
      </div>
    </>  
  )
}
