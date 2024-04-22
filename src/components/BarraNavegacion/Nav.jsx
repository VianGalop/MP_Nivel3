
import React, {useEffect, useState } from 'react'
import rooms from '../../assets/stays.json'
import { Card } from '../Resultados/Card'
import './Nav.css'


export const BarraNav = () => {

  const [showRooms, setShowRooms] = useState(rooms)
  const [search, setSearch] = useState('')
  const [result, setResults] = useState([])
  const [guest, setGuest] = useState(0)

  function selecLocation(e){
    const text = e.target.value
    setSearch(text)
    if(text.trim().length === 0){
      setResults([])
      return;
    } 

    const rs = rooms.filter(room => room.city.includes(text))

   /*  setSearch(rs.city + " " + rs.country)
    setResults([]) */
  }
  
  function numGuest(e){
    setGuest(parseInt(e.target.value))
  }

  function filtrar (event) {
    event.preventDefault()

    if (guest > 0 && search != '') {
      const city = search.split(' ')[0];
      const rs = rooms.filter(room => room.city === city && room.maxGuests >= guest)
      setShowRooms(rs)
      console.log("1)"+ JSON.stringify(rs));
      return;
    }

    if (guest > 0 && search === '') {
      const rs = rooms.filter(room => room.maxGuests >= guest)
      setShowRooms(rs)
      console.log("2)"+ JSON.stringify(rs));
      return;
    }

    if (guest === 0 && search != '') {
      const city = search.split(' ')[0];
      const rs = rooms.filter(room => room.city === city)
      setShowRooms(rs)
      return;
    }

    setShowRooms(rooms)

  }


  useEffect(() => {
    console.log('result', result);
    console.log('search',search);
    console.log("showRooms", showRooms);
  }, [result, search, showRooms]);  
  

  return (
    <>
        <div className="navbarra">
          <div  className="img">
            <img src="logo.svg" alt="windbnb"/>
          </div>
          <div className='formSearch'>
            <form className="formulario" >
              <select id="location" placeholder="search" className="inputSearch" onChange={selecLocation}>
                <option value="Helsinki"> Helsinki</option>
                <option value="Turku"> Turku</option>
                <option value="Vaasa"> Vaasa</option>
                <option value="Oulu"> Oulu</option>
              </select>
              <input type="text" placeholder="guest"  className="inputSearch" onChange={numGuest}  />
              <button className="btn" type="submit" onClick={filtrar}><img src='/busqueda.svg'/></button>
            </form>      
          </div>
        </div>

        <div className='result'>
          <div className='subtitulos'>
            <h1 className='titulo'>Stays in {search} Finland</h1>  
            <h2 className='text-base'>{showRooms.length} stays</h2>
          </div>
          <div className='theCards'>
              {
                <Card data={showRooms}/>    
              }     
          </div>
        </div>
       
    </>
  )
}


