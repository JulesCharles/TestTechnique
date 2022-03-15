import { useState } from 'react'
import TabClients from '../components/TabClients'
import './styles/Clients.css'

import { Link } from 'react-router-dom'

const Clients = () => {
  const [Clientselection, setClientselection] = useState([])
  return (
    <div className='tabContainer'>
      {/* <div className='clientss'>Clients</div> */}
      <div className='titleButtonContainer'>
        <Link to='/info'>
          <button className='buttonAjout'>NOUVEAU CLIENT</button>
        </Link>
        <Link to={`/info/${Clientselection}`}>
          <button className='buttonAjout2'>EDIT</button>
        </Link>
      </div>
      <TabClients setClientselection={setClientselection} />
    </div>
  )
}

export default Clients
