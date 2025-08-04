import React from 'react';
import { getAvatarColorByNumber } from '../utils/colors';

const MotivatorCard = ({ motivator, avatarNumber }) => {
    // Menggunakan fungsi utility untuk mendapatkan warna yang berputar
    const avatarColor = getAvatarColorByNumber(avatarNumber);

    return (
        <div className="motivator-card">
            <div
                className="motivator-avatar"
                style={{ backgroundColor: avatarColor }}
            >
                {avatarNumber}
            </div>
            <h3 className="motivator-name">{motivator.name}</h3>
            <p
                className="motivator-type"
                style={{ color: avatarColor }}
            >
                {motivator.fullName}
            </p>
            <span className="motivator-kelas">{motivator.kelas}</span>
        </div>
    );
};

export default MotivatorCard; 