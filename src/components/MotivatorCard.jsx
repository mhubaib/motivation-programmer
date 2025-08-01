import React from 'react';

const MotivatorCard = ({ motivator }) => {
    // Mengambil huruf pertama dari nama untuk avatar
    const avatarLetter = motivator.name.charAt(0).toUpperCase();

    return (
        <div className="motivator-card">
            <div
                className="motivator-avatar"
                style={{ backgroundColor: motivator.color }}
            >
                {avatarLetter}
            </div>
            <h3 className="motivator-name">{motivator.name}</h3>
            <p
                className="motivator-type"
                style={{ color: motivator.color }}
            >
                {motivator.fullName}
            </p>
            <span className="motivator-kelas">{motivator.kelas}</span>
        </div>
    );
};

export default MotivatorCard; 