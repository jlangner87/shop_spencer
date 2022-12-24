import { HashLink } from 'react-router-hash-link'
import totop from '../assets/totop.png'

function ToTop() {
  return (
    <div className="to_top">
      <HashLink smooth to='#top'><img src={totop} alt="to top link" className='top'/></HashLink>
    </div>
  )
}

export default ToTop