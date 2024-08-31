import React from 'react';
import './Styles.css';

const Header = () => {
    return (
        <header className="header">
            <input type="text" placeholder="ค้นหา..." className="search-bar" />
            <div className="user-info">
                <span className="notifications-icon">🔔</span>
                <span className="user-avatar">👤 John Smith</span>
            </div>
        </header>
    );
};

export default Header;
