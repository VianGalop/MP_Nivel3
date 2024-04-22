
import React, { useEffect, useState } from 'react'
import rooms from '../../assets/stays.json'
import { Card } from '../Resultados'


export const BarraNav = () => {

  const [showRooms, setShowRooms] = useState(rooms)
  const [search, setSearch] = useState('')
  const [result, setResults] = useState([])
  const [guest, setGuest] = useState(0)


  function searchFunction(e) {
      const text = e.target.value.toLowerCase()
      setSearch(text)
      if(text.trim().length === 0){
        setResults([])
        return;
      } 
      const rs = rooms.filter(room => room.city.toLowerCase().includes(text))
      setResults(rs)

      selecLocation(rs)
  } 

  function selecLocation(rs) {
    setSearch(rs.city + " " + rs.country)
    setResults([])
  }
  
  function filtrar(event) {

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
      console.log("3)"+ JSON.stringify(rs));
      return;
    }

    setShowRooms(rooms)
    console.log("4)"+JSON.stringify(rooms));
  }

  return (
    <>
        <div className="navbarra">
          <div  className="img">
            <img src="logo.svg" alt="windbnb"/>
          </div>
          <div className='formSearch'>
            <form className="formulario" >
              <select id="location" placeholder="search" className="inputSearch">
                <option onClick={() => searchFunction("Helsinki")}> Helsinki</option>
                <option onClick={() => selecLocation({city:"Turku", country:"Finland"})}> Turku</option>
                <option onClick={() => selecLocation({city:"Vaasa", country:"Finland"})}> Vaasa</option>
                <option onClick={() => selecLocation({city:"Oulu", country:"Finland"})}> Oulu</option>
              </select>
              <input type="text" name="location" id="location" placeholder="search"  className="inputSearch" onChange={(e) => setGuest(parseInt(e.target.value))} value={guest} />
              <button className="btn" type="submit" onClick={filtrar}><img src='/busqueda.svg'/></button>
            </form>      
          </div>
        </div>

        <div className='result'>
          <div className='subtitulos'>
            <h1 className='titulo'>{search}</h1>  
            <h2 className='text-base'>{showRooms.length} stays</h2>
          </div>
          <div className='theCards'>
            {
              
              showRooms.map((dato,i) =>{
                 <Card  key={i} photo={dato.photo} titulo={dato.title} type={dato.type} superhost={dato.superHost} rating={dato.rating} />
              })
            }              
          </div>
        </div>
       
    </>
  )
}


