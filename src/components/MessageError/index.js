import React from 'react';

import './styles.css';

const MessageError = ({ show, message }) => {
    return (
        <div className="error-box">
            {
                <span
                    className={show ? "error-message" : "error-message-invisible"}>
                    {message}
                </span>
            }
        </div>
    )
}

export default MessageError;