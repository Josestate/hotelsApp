import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import useFetch from '../../hooks/useFetch';
import '../../components/HomePage/styles/HotelCard.css'

const PriceFilter = ({ setFromTo }) => {

    const { handleSubmit, reset, register } = useForm();

    const submit = data =>{

        const from = data.from;
        const to = data.to;

        setFromTo({
            from: from == '' ? 0 : +from,
            to: to == '' ? Infinity : Number(to)
        })
    }

  return (
    <section>
        <h3>Price Filter</h3>
        <form onSubmit={handleSubmit(submit)}>
            <label htmlFor="">
                <span>From </span>
                <input type="number" {...register('from')} />
            </label>
            <label htmlFor="">
                <span>To </span>
                <input type="number" {...register('to')} />
            </label>
            <button>Apply</button>
        </form>
    </section>
  )
}

export default PriceFilter