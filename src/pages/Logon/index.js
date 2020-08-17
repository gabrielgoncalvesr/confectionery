import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import MessageError from '../../components/MessageError';

import api from '../../services/api';

import logoImage from '../../assets/logo.svg';
import heroesImage from '../../assets/heroes.png';

import './styles.css';

const Logon = () => {
    const history = useHistory();

    const [id, setId] = useState(null);
    const [loginError, setLoginError] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post('/sessions', { id });
            if (response.status === 200) {
                setLoginError(false);

                localStorage.setItem('ongId', id);
                localStorage.setItem('ongName', response.data.name);

                history.push("/profile");
            } else {
                throw new Error(response.message);
            }
        } catch (err) {
            setLoginError(true);
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImage} alt="Be The Hero" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input
                        placeholder="ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />

                    <MessageError
                        show={loginError}
                        message={"falha no login, tente novamente"}
                    />

                    <button className="button" type="submit"> Entrar </button>

                    <Link className="back-link " to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não Tenho Cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImage} alt="heroes" />
        </div >
    );
}

export default Logon;