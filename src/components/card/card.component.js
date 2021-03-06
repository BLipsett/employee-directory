import React from 'react';
import './card.component.style.css';

function Card(props) {
    return (
    <div className="card-container">
        <h1> { props.employee.name } </h1>
        <p>{ props.employee.email }</p>
    </div>
    );
}

export default Card;