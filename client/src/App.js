import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ECard from './pages/eCards'
import Order from './pages/Orders'
import Services from './pages/Services'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './components/Form'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/egift_cards" element={<ECard />} />
        <Route path="/online_orders" element={<Order />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
