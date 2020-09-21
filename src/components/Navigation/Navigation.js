import React, { useState } from 'react';
import style from './Navigation.module.css';

const Navigation = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
            setShowDropdown(!showDropdown);
      };

return (
    <div className={style.dropdownWrapper}>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Your experiences</li>
        </ul>
    </div>
)
}

export default Navigation;