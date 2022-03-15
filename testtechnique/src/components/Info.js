import './styles/Info.css'
import { FaTrashAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { TiTimes } from 'react-icons/ti'
import axios from 'axios'
// import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'

const Info = () => {
  const navigate = useNavigate()

  const [newClient, setNewClient] = useState({
    nom: '',
    prenom: '',
    date_naissance: '',
    adresse: '',
    cp: '',
    ville: '',
    pays: '',
    immatriculation: '',
    date_circulation: '',
    marque: '',
    modele: '',
    type_vehicule: '',
    perso_id: '',
  })

  const postClient = async (e) => {
    await setNewClient({ ...newClient })
    axios
      .post('http://localhost:4242/perso', {
        nom: newClient.nom,
        prenom: newClient.prenom,
        date_naissance: newClient.date_naissance,
        adresse: newClient.adresse,
        cp: newClient.cp,
        ville: newClient.ville,
        pays: newClient.pays,
        immatriculation: newClient.immatriculation,
        date_circulation: newClient.date_circulation,
        marque: newClient.marque,
        modele: newClient.modele,
        type_vehicule: newClient.type_vehicule,
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  // 1 - sur le bouton add = > ajouter onClick dedans faire un axios .post envoyé => urlback, dans l objet mettre tous les champs du formulaire
  // -2 dans le back receptionner les infos du front => faire une requete sql connection query
  return (
    <div className='tabContainerClient'>
      <div className='pageClient'>
        <TiTimes size='50px' className='circle' onClick={() => navigate(-1)} />
        <form
          className='pageClientForm'
          autoComplete='off'
          // onSubmit={handleSubmit(onSubmit)}
        >
          <div className='columns'>
            <div id='idWrapper' className='columnsDiv'>
              <div className='nom1' id='nom'>
                INFORMATIONS PERSONNELLES
              </div>
            </div>
            <div id='idWrapper' className='columnsDiv'>
              <div className='nom2' id='nom'>
                Nom
              </div>
              <input
                type='text'
                placeholder='Tuile'
                onChange={(e) => {
                  const { value } = e.target
                  setNewClient({ ...newClient, nom: value })
                  console.log(value)
                }}
              />
            </div>
            <div id='idWrapper' className='columnsDiv'>
              <div className='nom2' id='nom'>
                Prénom
              </div>
              <input
                type='text'
                placeholder='Jean'
                onChange={(e) => {
                  const { value } = e.target
                  setNewClient({ ...newClient, prenom: value })
                }}
              />
            </div>
            <div id='idWrapper' className='columnsDiv'>
              <div className='nom2' id='nom'>
                Date de naissance
              </div>
              <input
                type='text'
                placeholder='1995-12-09'
                onChange={(e) => {
                  const { value } = e.target
                  setNewClient({ ...newClient, date_naissance: value })
                }}
              />
            </div>
            <div id='idWrapper' className='columnsDiv'>
              <div className='nom2' id='nom'>
                Adresse
              </div>
              <input
                type='text'
                placeholder='2 Rue Jean Jaures'
                onChange={(e) => {
                  const { value } = e.target
                  setNewClient({ ...newClient, adresse: value })
                }}
              />
            </div>
            <div id='idWrapper' className='columnsDiv'>
              <div className='nom2' id='nom'>
                CP
              </div>
              <input
                type='text'
                placeholder='45000'
                onChange={(e) => {
                  const { value } = e.target
                  setNewClient({ ...newClient, cp: value })
                }}
              />
            </div>
          </div>
          <div className='columns'>
            <div id='idWrapper' className='columnsDiv'>
              <div className='nom3' id='nom'>
                INFORMATIONS VEHICULE
              </div>
            </div>
            <div id='idWrapper' className='columnsDiv'>
              <div className='nom2' id='nom'>
                Ville
              </div>
              <input
                type='text'
                placeholder='Lyon'
                onChange={(e) => {
                  const { value } = e.target
                  setNewClient({ ...newClient, ville: value })
                }}
              />
            </div>
            <div id='idWrapper' className='columnsDiv'>
              <div className='nom2' id='nom'>
                Pays
              </div>
              <input
                type='text'
                placeholder='Japon'
                onChange={(e) => {
                  const { value } = e.target
                  setNewClient({ ...newClient, pays: value })
                }}
              />
            </div>
            <div id='idWrapper' className='columnsDiv'>
              <div className='nom2' id='nom'>
                Immatriculation
              </div>
              <input
                type='text'
                placeholder='AA-222-BB'
                onChange={(e) => {
                  const { value } = e.target
                  setNewClient({ ...newClient, immatriculation: value })
                }}
              />
            </div>
            <div id='idWrapper' className='columnsDiv'>
              <div className='nom2' id='nom'>
                Date de prémière mise en circulation
              </div>
              <input
                type='text'
                placeholder='2020-12-14'
                onChange={(e) => {
                  const { value } = e.target
                  setNewClient({ ...newClient, date_circulation: value })
                }}
              />
            </div>
            <div id='idWrapper' className='columnsDiv'>
              <div className='nom2' id='nom'>
                Marque
              </div>
              <input
                type='text'
                placeholder='Opel'
                onChange={(e) => {
                  const { value } = e.target
                  setNewClient({ ...newClient, marque: value })
                }}
              />
            </div>
            <div id='idWrapper' className='columnsDiv'>
              <div className='nom2' id='nom'>
                Modèle
              </div>
              <input
                type='text'
                placeholder='C5'
                onChange={(e) => {
                  const { value } = e.target
                  setNewClient({ ...newClient, modele: value })
                }}
              />
            </div>
            <div id='idWrapper' className='columnsDiv'>
              <div className='nom2' id='nom'>
                Type de véhicule
              </div>
              <input
                type='text'
                placeholder='Voiture'
                onChange={(e) => {
                  const { value } = e.target
                  setNewClient({ ...newClient, type_vehicule: value })
                }}
              />
            </div>
          </div>
        </form>
        <div className='checkOrTrash'>
          <button onClick={(e) => postClient(e)}> Add </button>
          <h2 className='poubelle'>
            <FaTrashAlt size='1.7rem' className='trashCan' />
          </h2>
        </div>
      </div>
    </div>
    // </div>
  )
}

export default Info
