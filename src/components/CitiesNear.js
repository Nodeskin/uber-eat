import Map from '../assests/map.png'
const CitiesNear = () => {
  return (
    <div>
      
    <div className="map">
        <div className="cities-heading">
            <h1>cities near me</h1>
            <a className='view-link' href="">View all 500+ cities</a>
        </div>
            <img style={{width:'100%'}} src={Map} alt="map" />
    </div>

    </div>
  )
}

export default CitiesNear
