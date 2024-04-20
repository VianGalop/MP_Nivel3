import './App.css'

function App() {

  return (
    <>
      <div className="contenedor">

        <div className="navbarra">
          <div  className="img">
            <img src="logo.svg" alt="windbnb"/>
          </div>

          <div className='formSearch'>
            <form className="formulario">
                  <input type="text" name="location" id="location" placeholder="location" className="inputLocal "/>
                   <input type="text" name="location" id="location" placeholder="search"  className="inputSearch" />
                  <button className="btn" type="submit"><img src='/busqueda.svg'/></button>
            </form>      
          </div>

        </div>

        <div className='result'>
          <div className='subtitulos'>
            <h1 className='titulo'>Stays in Finland</h1>  
            <h2 className='text-base'>14 stays</h2>
          </div>
          
          <div className='theCards'>            
            <div className='card'>
                  <div className='imagen'>
                    <img src='torre.jpg'></img>
                  </div>
                  <div className='apartamento'>
                    <span className='super'>Super Host</span>
                    <p className="entire">Entire apartment</p>
                    <div>
                      <img  className='estrella'src='/estrella.png'/><span> 4.4</span>
                    </div>
                  </div>
                  <div className='detalles'>
                    <p>Stylist apartment in center of the city</p>
                  </div>                  
            </div>
            
          </div>   
        </div>

      </div>

    </>
  )
}

export default App
