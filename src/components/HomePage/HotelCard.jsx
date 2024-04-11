import { useNavigate } from "react-router-dom"
import './styles/HotelCard.css'

const HotelCard = ({ hotelInfo }) => {
    const navigate = useNavigate()
    console.log('hotelInfo', hotelInfo)
    const handleClick = () =>{
        navigate(`/hotels/${hotelInfo.id}`)
    }

  return (
    <article className="card">
        <header>
            <img src={hotelInfo.images[0].url} alt="" className="card_img" />
        </header>
        <section className="card-text">
            <h3>{hotelInfo.name}</h3>
            <p>{hotelInfo.rating}</p>
            <span>{hotelInfo.city.name}, {hotelInfo.city.country}</span>
            <div>$ {hotelInfo.price}</div>
        </section>
        <footer className="card-footer">
            <button onClick={handleClick}>See more...</button>
        </footer>
    </article>
  )
}

export default HotelCard