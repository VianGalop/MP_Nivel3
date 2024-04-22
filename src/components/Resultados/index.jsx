import React, { useState } from 'react'

export const Card = (photo, titulo,type,superhost, rating) => {
  const [superPalabra, setSuperPalabra] = useState('')

  const veri = (e) =>{

    const letrero = e.target.value;
    if(letrero == true){
      setSuperPalabra("Superhost")
    }else{
      setSuperPalabra('')
    }
    
  }
  

  return (
    <>                 
      <div className='card'>
            <div className='imagen'>
              <img src={photo} />
            </div>
            <div className='apartamento'>
              <span className="super" value={superhost} onChange={veri}>{superPalabra}</span>    
              <p className="entire">{type}</p>
              <div>
                <img  className='estrella' src='/estrella.png'/><span>{rating}</span>
              </div>
            </div>
            <div className='detalles'>
              <p>{titulo}</p>
            </div>                  
      </div>

    </>
  )
}
