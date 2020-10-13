import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import mapMarkerImage from '../images/map-marker.svg';

import '../styles/orphanages-map.css';

const OrphanagesMap = () => {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImage} alt="Happy Logo" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperadno a sua visita :)</p>
                </header>

                <footer>
                    <strong>Taboão da Serra</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <div></div>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    )
}

export default OrphanagesMap;