import React from "react";
import Card from '../card/card.component';
import './card-list.style.css';



function CardList(props) {
  return <div className="card-list">
    {props.employees.map(employee => (
      <Card key={employee.id} employee={employee} />
    ))}
    </div>

  
};

export default CardList;
