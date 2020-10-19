import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';

import mapMarkerImage from '../images/map-marker.svg';

import 'leaflet/dist/leaflet.css';

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

            <Map
                center={[-23.6204081, -46.780574]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    )
}

export default OrphanagesMap;