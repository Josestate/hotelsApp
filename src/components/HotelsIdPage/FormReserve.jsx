import React from 'react'
import { useForm } from 'react-hook-form'
import useCrud from '../../hooks/useCrud';

const FormReserve = ({ hotelId }) => {

  const { handleSubmit, register, reset } = useForm();

  const [,,createBooking] = useCrud();

  const submit = data => {
    const url = 'https://hotels-api.academlo.tech/bookings';
    data.hotelId = +hotelId;
    createBooking(url, data)
  }

  return (
    <section>
        <h3>Reservate</h3>
        <form onSubmit={handleSubmit(submit)}>
            <label htmlFor="">
                <span>check-in</span>
                <input type="date" {...register('checkIn')} />
            </label>
            <label htmlFor="">
                <span>check-out</span>
                <input type="date" {...register('checkOut')} />
            </label>
            <button>Submit</button>
        </form>
    </section>
  )
}

export default FormReserve