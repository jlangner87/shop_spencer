import { NavLink } from "react-router-dom"

function Nav() {
  return (
    <div className="nav">
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/egift_cards'}>Gift Cards</NavLink>
      <NavLink to={'/online_orders'}>Online Orders</NavLink>
      <NavLink to={'/services'}>Services</NavLink>
    </div>
  )
}

export default Nav