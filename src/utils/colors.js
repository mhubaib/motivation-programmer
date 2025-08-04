// Array 8 warna untuk avatar motivator
export const avatarColors = [
    '#FF6B6B', // Merah
    '#4ECDC4', // Cyan  
    '#45B7D1', // Biru
    '#96CEB4', // Hijau
    '#FFEAA7', // Kuning
    '#DDA0DD', // Ungu
    '#98D8C8', // Mint
    '#F7DC6F'  // Orange
];

// Fungsi untuk mendapatkan warna berdasarkan avatarNumber (dimulai dari 1)
export const getAvatarColorByNumber = (avatarNumber) => {
    return avatarColors[(avatarNumber - 1) % avatarColors.length];
}; 