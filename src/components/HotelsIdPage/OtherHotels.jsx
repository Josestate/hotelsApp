import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import HotelCard from '../HomePage/HotelCard';

const OtherHotels = ({ hotel }) => {

    const url = `https://hotels-api.academlo.tech/hotels?cityId=${hotel?.cityId}`;
    const [ hotelsInCity, getHotelsInCity  ] = useFetch(url);

    useEffect(()=>{
        if(hotel){
            getHotelsInCity();
        }
    },[hotel])

    return (
    <section>
        <h3>Other hotels in {hotel?.city.name}</h3>
        <div className='container-card'>
            {
                hotelsInCity?.filter(hotelInfo => hotelInfo.id != hotel.id).map( hotelInfo => (
                    <HotelCard 
                        key={hotelInfo.id} 
                        hotelInfo={hotelInfo}
                    />
                ))
            }
        </div>
    </section>
  )
}

export default OtherHotels