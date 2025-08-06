import React from "react";

const Filter = ({ selectedKelas, onKelasChange, availableKelas }) => {
	return (
		<div className='filter-container'>
			<label htmlFor='kelas-filter' className='filter-label'>
				Filter berdasarkan kelas:
			</label>
			<select
				id='kelas-filter'
				value={selectedKelas}
				onChange={(e) => onKelasChange(e.target.value)}
				disabled
				className='filter-select'
			>
				<option value=''>Semua Kelas</option>
				{availableKelas.map((kelas) => (
					<option key={kelas} value={kelas}>
						{kelas}
					</option>
				))}
			</select>
		</div>
	);
};

export default Filter;
