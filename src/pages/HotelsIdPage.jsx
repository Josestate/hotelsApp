import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import { Map, Marker } from 'pigeon-maps';
import OtherHotels from '../components/HotelsIdPage/OtherHotels';
import FormReserve from '../components/HotelsIdPage/FormReserve';

const HotelsPage = () => {

  const { id } = useParams();
  const url = `https://hotels-api.academlo.tech/hotels/${id}`
  const [ hotel, getHotel ] = useFetch(url);
  const [mapZoom, setMapZoom] = useState(10)

  useEffect(()=>{
    getHotel()
  },[id])

  return (
    <div>
      <h2>{hotel?.name}</h2>
      <h3>RATING - {hotel?.rating}</h3>
      <div className='slider'>
        <img src={hotel?.images[0].url} alt="" />
        {
          hotel &&
          <Map 
            height={200}
            defaultCenter={[+hotel?.lat, +hotel?.lon]} 
            zoom={mapZoom} maxZoom={20}>
            <Marker 
              anchor={[+hotel?.lat, +hotel?.lon]} 
              color='blueviolet' 
              width={40} 
              onClick={() => setMapZoom( mapZoom >= 20 ? mapZoom = 10 : mapZoom + 2)}/>
          </Map>
        }
      </div>
      <section>
        <h3>{hotel?.city.name} , {hotel?.city.country}</h3>
        <p>
          <i className='bx bx-map'></i>
          <span>{hotel?.addres}</span>
        </p>
        <p>{hotel?.description}</p>
      </section>
      {
        localStorage.getItem('token')
        ? <FormReserve hotelId={hotel?.id}/>
        : <h4>If you want to make a reservation, please <Link to='/login'>Login</Link></h4>
      }
      <OtherHotels hotel={hotel} />
    </div>
  )
}

export default HotelsPage