import { NavLink } from "react-router-dom"
import gift_card from '../assets/gift_card.png'
import order_online from '../assets/order_online.png'
import service from '../assets/service.png'

function Home() {
  return (
    <div className="page">
      <div className="welcome">
      <p>Hello friends and family of Northwest Iowa! The clock is ticking down to Christmas, and most of us are stuck at home.</p>
      <p>This impacts us all, but it definitely impacts our wonderful Spencer owned and operated businesses, as this is their biggest time of the year. I invite everyone to join in on a community wide <em>VIRTUAL SHOPPING SPREE</em> !</p>
      <p><b>What is a virtual shopping spree?</b></p>
      <p>🎁 Shop these businesses online via the links below.</p>
      <p>🎁 Share this page far and wide.</p>
      <p>🎁 Please submit more Spencer businesses via the form.</p>
      </div>
      <div className="links_row">
      <div className="link_container">
        <NavLink to={'/egift_cards'}>
        <h3>Gift Cards</h3>
        <img src={gift_card} className='link_img'/>
        </NavLink>
      </div>
      <div className="link_container">
        <NavLink to={'/online_orders'}>
        <h3>Online Ordering</h3>
        <img src={order_online} className='link_img'/>
        </NavLink>
      </div>
      <div className="link_container">
        <NavLink to={'/services'}>
          <h3>Service Booking</h3>
          <img src={service} className='link_img'/>
        </NavLink>
      </div>
      </div>
    </div>
  )
}

export default Home