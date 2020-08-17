import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logoImage from '../../../../assets/logo.svg';

import './styles.css';

const MessageRegister = ({ ongId, successfulRegister }) => {

    return (
        <div className="registration-message-container">
            <div className="content">
                <section>
                    <img src={logoImage} alt="Be The Hero" />

                    {
                        successfulRegister &&
                        <div className="message-box">
                            <h1>Cadastrado com Sucesso</h1>
                            <p>Seu cadastro foi realizado com sucesso, utilize o ID abaixo para para acessar sua conta.</p>
                            <p>ID: {ongId}</p>
                        </div>
                    }

                    {
                        !successfulRegister &&
                        <div className="message-box">
                            <h1>Cadastro nâo Realizado</h1>
                            <p>Houve algum erro no seu cadastro, por favor, retorne a página de Logon e tente novamente.</p>
                        </div>
                    }

                    <Link className="back-link " to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar Para o Início
                    </Link>
                </section>
            </div>
        </div>
    )
}

export default MessageRegister;