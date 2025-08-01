import React, { useState, useMemo } from 'react';
import './App.css';
import MotivatorCard from './components/MotivatorCard';
import Filter from './components/Filter';
import motivatorsData from './data/motivators.json';

function App() {
  const [selectedKelas, setSelectedKelas] = useState('');

  // Mendapatkan daftar kelas yang tersedia
  const availableKelas = useMemo(() => {
    return motivatorsData.data.map(kelas => kelas.name).sort();
  }, []);

  // Mendapatkan semua santri dari semua kelas
  const allSantris = useMemo(() => {
    return motivatorsData.data.flatMap(kelas =>
      kelas.santris.map((santri, index) => ({
        ...santri,
        kelas: kelas.name,
        uniqueId: `${kelas.id}-${index}-${santri.name}` // Key yang lebih unik
      }))
    );
  }, []);

  // Filter motivator berdasarkan kelas yang dipilih
  const filteredMotivators = useMemo(() => {
    if (!selectedKelas) {
      return allSantris;
    }
    return allSantris.filter(santri => santri.kelas === selectedKelas);
  }, [selectedKelas, allSantris]);

  return (
    <div className="app">
      {/* Header Section */}
      <header className="header">
        <h1 className="title">MOTIVATION SHOW PROGRAMMER</h1>
        <p className="subtitle">
          {filteredMotivators.length} Motivator Terbaik Siap Memotivasi Anda
        </p>
      </header>

      {/* Filter Section */}
      <div className="filter-section">
        <Filter
          selectedKelas={selectedKelas}
          onKelasChange={setSelectedKelas}
          availableKelas={availableKelas}
        />
      </div>

      {/* Main Content */}
      <main className="main-content">
        <div className="motivators-grid">
          {filteredMotivators.map((motivator) => (
            <MotivatorCard key={motivator.uniqueId} motivator={motivator} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <h2 className="footer-title">✨ Ready to Get Motivated? ✨</h2>
        <p className="footer-description">
          Tim motivator terbaik siap memberikan inspirasi dan semangat untuk mencapai tujuan Anda
        </p>
      </footer>
    </div>
  );
}

export default App;
