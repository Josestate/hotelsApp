import React, { useEffect } from 'react'
import useCrud from '../hooks/useCrud'
import ReservedCard from '../components/ReservationsPage/ReservedCard';

const ReservationPage = () => {
  const [ bookings, getBookings ] = useCrud();

  useEffect(()=>{
    const url = 'https://hotels-api.academlo.tech/bookings'
    getBookings(url);
  },[])

  console.log(bookings)

  return (
    <div>
      <h2>Rerservations</h2>
      <div>
        {
          bookings?.map( reserved => (
            <ReservedCard key={reserved.id} reserved={reserved}/>
          ))
        }
      </div>
    </div>
  )
}

export default ReservationPage