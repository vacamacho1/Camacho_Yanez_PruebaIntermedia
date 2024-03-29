// AddAdopterForm.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';

const AddAdopterForm = ({ onAdopterSubmit }) => {
    const [adopterName, setAdopterName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (adopterName) {
            onAdopterSubmit(adopterName);
            setAdopterName('');
        } else {
            console.error('Debe ingresar un nombre para el adoptante.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={adopterName} onChange={(e) => setAdopterName(e.target.value)} placeholder="Nombre del adoptante 👤" />
            <button type="submit">Agregar adoptante</button>
        </form>
    );
};

AddAdopterForm.propTypes = {
    onAdopterSubmit: PropTypes.func.isRequired,
};

export default AddAdopterForm;