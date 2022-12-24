import Nav from "../components/Nav"

function Order() {
  return (
    <div className="page">
      <Nav/>
      <h1>Spencer, Iowa Owned and Operated Businesses</h1>
      <h2>Offering Online Ordering</h2>
      <h3 className="category">Shops & Boutiques</h3>
      <div className="business_list">
        <div className="business_container">
          <a href="https://www.nelsonjewelry.com/">
            <h3 className="business_name">Nelson Jewelry</h3>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Order