import React from 'react';

const MotivatorCard = ({ motivator }) => {
    // Membuat perulangan angka untuk avatar
    const avatarNumber = motivator.name.split(' ').map(nama => nama[0].toUpperCase()).join('');

    return (
        <div className="motivator-card">
            <div
                className="motivator-avatar"
                style={{ backgroundColor: motivator.color }}
            >
                {avatarNumber}
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