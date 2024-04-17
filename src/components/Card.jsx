// ./src/components/Card.jsx

import "../components/card.scss";
import React from 'react';
import personImage from '../assets/person.jpg';

const Card = ({ candidate }) => {
    return (
        <div className="candidate-card">
            <img className="candidate-card__image" src={personImage} alt="Candidate" />
            <h3 className="candidate-card__name">{candidate}</h3>
        </div>
    );
};

export default Card;
