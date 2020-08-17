import React from 'react';

import './styles.css';

const ToggleSwitch = ({ handleActivated, handleDisabled }) => {

    const handleSwitchChecked = (e) => {
        if (e.target.checked) {
            handleActivated();
        } else {
            handleDisabled();
        }
    }

    return (
        <div>
            <label class="switch">
                <input
                    type="checkbox"
                    onChange={handleSwitchChecked}
                />
                <span class="slider round"></span>
            </label>
        </div>
    )
}

export default ToggleSwitch;