import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { getHotelsThunk } from '../../store/states/hotels.slice'
import { useDispatch } from 'react-redux'
import './styles/CategoryFilter.css'

const CategoryFilter = () => {

    const url = 'https://hotels-api.academlo.tech/cities'

    const [cities, getCities] = useFetch(url);

    useEffect(()=>{
        getCities()
    },[])

    console.log('cities', cities)

    const dispatch = useDispatch();

    const handleFilterCity = (id) =>{
        let url;
        if(id){
            url = `https://hotels-api.academlo.tech/hotels?cityId=${id}`
        }else{
            url = 'https://hotels-api.academlo.tech/hotels'
        }
        dispatch(getHotelsThunk(url))
    }

  return (
    <section className='cityFilter_container'>
        <h3>City</h3>
        <ul className='cityList_container'>
            <li onClick={() => handleFilterCity()}>All Cities</li>
            {cities?.map( city => (
                <li key={city.id} onClick={() => handleFilterCity(city.id)}>{city.name}</li>
            ))}
        </ul>
    </section>
  )
}

export default CategoryFilter