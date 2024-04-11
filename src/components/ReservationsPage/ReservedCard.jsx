const ReservedCard = ({ reserved }) => {
    console.log('reserved', reserved)
  return (
    <div>
        <header>
            <img src={reserved.hotel.images[0].url} alt="" />
        </header>
        <section>
            <h3>{reserved.hotel.name}</h3>
            <div>{reserved.hotel.city.name}, {reserved.hotel.city.country}</div>
            <p>Rate and comment this visit</p>
        </section>
        <section>
            <ul>
                <li>
                    <span>Reservation Days</span>
                    <span>10</span>
                </li>
                <li>
                    <span>Subtotal Price</span>
                    <span>1000 USD</span>
                </li>
            </ul>
        </section>
        <footer>
            <button><i class='bx bx-trash'></i></button>
        </footer>
    </div>
  )
}

export default ReservedCard