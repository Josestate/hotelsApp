import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import HotelCard from '../components/HomePage/HotelCard'
import CategoryFilter from '../components/HomePage/CategoryFilter';
import '../components/HomePage/styles/HotelCard.css'
import PriceFilter from '../components/HomePage/PriceFilter';

const HomePage = () => {

  const [inputName, setInputName] = useState('');

  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity
  })

  const hotels = useSelector( states => states.hotels )

  const inputValue = useRef();

  const handleChange = () =>{
    setInputName(inputValue.current.value)
  }

  const cbFilter = hotelInfo =>{  
    // filter by name
    const filterName = hotelInfo.name.toLowerCase().includes(inputName.toLowerCase().trim());
    //filter by price
    const price = Number(hotelInfo.price)
    const filterPrice = price > fromTo.from && price <= fromTo.to;

    return filterName && filterPrice;
  }

  return (
    <div>
      <div>
        <input type="text" onChange={handleChange} value={inputName} ref={inputValue}/>
      </div>
      <aside>
        <h3>Filter</h3>
        <PriceFilter setFromTo={setFromTo}/>
        <CategoryFilter />
      </aside>
      <div className='container-card'>
        {
          hotels?.filter(cbFilter).map( hotelInfo => (
            <HotelCard key={hotelInfo.id} hotelInfo={hotelInfo}/>
          ))
        }
      </div>
    </div>
  )
}

export default HomePage