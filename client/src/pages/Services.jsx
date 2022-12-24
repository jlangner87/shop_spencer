import Nav from "../components/Nav"
import ToTop from "../components/HashLinkTop"

function Services() {
  return (
    <div className="page">
      <Nav/>
      <ToTop/>
      <h1>Spencer, Iowa Owned and Operated Businesses</h1>
      <h2>Offering Service Booking</h2>
      <h3 className="category">Automotive</h3>
      <div className="business_list">
        <div className="business_container">
          <a href="https://www.facebook.com/bluewaterdetailingllc">
            <h3 className="business_name">Blue Water Detailing, LLC</h3>
          </a>
        </div>
      </div>
      <h3 className="category">Beauty & Wellness</h3>
      <div className="business_list">
        <div className="business_container">
          <a href="https://square.site/book/PJ6VTS0MP7S39/posh-salon-spencer-ia">
            <h3 className="business_name">Posh Salon</h3>
          </a>
        </div>
        <div className="business_container">
          <a href="https://the-body-garage.square.site/s/appointments">
            <h3 className="business_name">The Body Garage</h3>
          </a>
        </div>
        <div className="business_container">
          <a href="https://www.facebook.com/handsofhope.massage.skin.nails">
            <h3 className="business_name">Hands of Hope</h3>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Services