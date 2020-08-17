import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import logoImage from '../../assets/logo.svg';

import './styles.css';

const NewIncidents = () => {
    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    const [value, setValue] = useState(null);
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);


    const handleNewIncident = async (e) => {
        e.preventDefault();

        const params = {
            title,
            value,
            description
        }

        try {
            await api.post('incidents', params, {
                headers: {
                    Authorization: ongId
                }
            });

            history.push("/profile");
        } catch (err) {
            alert(err)
        }
    }

    return (
        <div className="new-incidents-container">
            <div className="content">
                <section>
                    <img src={logoImage} alt="Be The Hero" />

                    <h1>Cadastrar Novo Caso</h1>
                    <p>Descreva o caso detalhadamento para encontrar um herói para resolver isso.</p>

                    <Link className="back-link " to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para Home
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input
                        placeholder="Título do Caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input
                        placeholder="Valor em Reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default NewIncidents;