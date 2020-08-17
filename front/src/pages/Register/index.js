import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import RegistrationMessage from './components/RegistrationMessage'

import api from '../../services/api';

import logoImage from '../../assets/logo.svg';

import './styles.css';

const Register = () => {
    const [uf, setUf] = useState('');
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');

    const [ongId, setOngId] = useState(null);
    const [sendCreation, setSendCreation] = useState(false);
    const [successfulRegister, setSuccessfulRegister] = useState(null);

    const handleRegister = async (e) => {
        e.preventDefault();

        const params = {
            name,
            email,
            whatsapp,
            city,
            uf
        };

        const response = await api.post('/ongs', params);
        setSendCreation(true);

        const data = response.data;
        if (data) {
            setOngId(data.id)
            setSuccessfulRegister(true);
        } else {
            setSuccessfulRegister(false);
        }
    }

    return (
        <div>
            {
                sendCreation &&
                <RegistrationMessage
                    ongId={ongId}
                    successfulRegister={successfulRegister}
                />
            }

            {
                !sendCreation &&
                <div className="register-container">
                    <div className="content">
                        <section>
                            <img src={logoImage} alt="Be The Hero" />

                            <h1>Cadastro</h1>
                            <p>Faça seu cadastro, entre na platafomra e ajude pessoas a encontrarem os casos da sua ong</p>

                            <Link className="back-link " to="/">
                                <FiArrowLeft size={16} color="#E02041" />
                                Entrar com ID
                            </Link>
                        </section>

                        <form onSubmit={handleRegister}>
                            <input
                                placeholder="Nome da ONG"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                            <input
                                type="email"
                                placeholder="E-mail"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <input
                                placeholder="WhatsApp"
                                value={whatsapp}
                                onChange={e => setWhatsapp(e.target.value)}
                            />

                            <div className="input-group">
                                <input
                                    placeholder="Cidade"
                                    value={city}
                                    onChange={e => setCity(e.target.value)}
                                />
                                <input
                                    placeholder="UF"
                                    style={{ width: 80 }}
                                    value={uf}
                                    onChange={e => setUf(e.target.value)}
                                />
                            </div>

                            <button className="button" type="submit">Cadastrar</button>
                        </form>
                    </div>
                </div>
            }
        </div>
    )
}

export default Register;