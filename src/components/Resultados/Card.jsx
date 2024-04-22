import React, { useState } from 'react'
import { Habitacion } from './Habitacion'



export const Card = ({data}) => {
    
  return (
    <>
    {
      data.map((midato,i) =>(

        <Habitacion key={i} photo={midato.photo} superPalabra={midato.superHost} type={midato.type} rating={midato.rating} titulo={midato.title}/>
        
    ))
    }
    </>
  )
}
