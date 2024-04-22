import React, { useState } from 'react'

export const Card = (photo, titulo,type,superhost, rating) => {

  return (
    <>                 
      <div className='card'>
            <div className='imagen'>
              <img src={photo}></img>
            </div>
            <div className='apartamento'>
              <span className="super">superhost</span>    
              <p className="entire">{type}</p>
              <div>
                <img  className='estrella'src='/estrella.png'/><span>{rating}</span>
              </div>
            </div>
            <div className='detalles'>
              <p>{titulo}</p>
            </div>                  
      </div>
    </>
  )
}
