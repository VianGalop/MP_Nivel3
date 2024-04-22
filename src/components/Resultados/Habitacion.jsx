import React from 'react'
import './Habitacion.css'

export const Habitacion = ({photo, superPalabra, type, rating, titulo}) => {

  return (
    <div className='card'>                 
        <div className='imagen'>
            <img src={photo} />
        </div>
        <div className='apartamento'>
            <span className={superPalabra? 'super':''}> {superPalabra? 'Superhost':''}</span>    
            <p className="entire">{type}</p>
            <div>
                <img  className='estrella' src='/estrella.png'/><span>{rating}</span>
            </div>
        </div>
        <div className='detalles'>
            <p>{titulo}</p>
        </div> 
    </div>     
  )
}
