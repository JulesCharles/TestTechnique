import React, { useState, useEffect } from 'react'
import { AgGridReact } from 'ag-grid-react'
import axios from 'axios'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

import './styles/TabClients.css'

const TabClients = () => {
  const [clients, setClients] = useState()
  const [users, setUsers] = useState()
  // const gridRef = useRef(null);

  useEffect(() => {
    axios.get('http://localhost:4242/perso/').then((response) => {
      console.log(response.data) || setClients(response.data)
    })
  }, [])

  console.log(clients)

  const defaultColDef = {
    resizable: true,
  }

  const [columnDefs] = useState([
    {
      field: 'nom',
      sortable: true,
      filter: true,
      pinned: 'left',
      lockPinned: true,
      width: '130px',
    },
    {
      field: 'prenom',
      sortable: true,
      filter: true,
      pinned: 'left',
      lockPinned: true,
      width: '130px',
    },
    {
      field: 'date_naissance',
      sortable: true,
      filter: true,
      pinned: 'left',
      lockPinned: true,
      width: '170px',
    },
    {
      field: 'adresse',
      sortable: true,
      filter: true,
      pinned: 'left',
      lockPinned: true,
      width: '150px',
    },
    {
      field: 'cp',
      sortable: true,
      filter: true,
      pinned: 'left',
      lockPinned: true,
      width: '100px',
    },
    {
      field: 'ville',
      sortable: true,
      filter: true,
      pinned: 'left',
      lockPinned: true,
      width: '115px',
    },
    {
      field: 'pays',
      sortable: true,
      filter: true,
      pinned: 'left',
      lockPinned: true,
      width: '110px',
    },
    { field: 'immatriculation' },
    { field: 'date_circulation' },
    { field: 'marque', sortable: true, filter: true },
    { field: 'modele', sortable: true, filter: true },
    { field: 'type_vehicule', sortable: true, filter: true },
  ])

  return (
    <div
      className='ag-theme-alpine tableau'
      style={{
        height: 600,
        // fontFamily: 'var(--fontBody)',
        color: 'black',
      }}
    >
      {/*<button onClick={onButtonClick}>Get selected rows</button> */}
      <AgGridReact
        // ref={gridRef}
        className='txtTableau'
        defaultColDef={defaultColDef}
        rowData={clients}
        columnDefs={columnDefs}
        rowSelection='multiple'
      ></AgGridReact>
    </div>
  )
}

export default TabClients
