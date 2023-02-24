import React from "react";
import './card.css'

export const Card = (props) => (
    <div className="card-container">
        <img src={`https://robohash.org/${props.yy.id}?set=set2&size=180x180`} />
        <h2>{props.yy.name}</h2>
        <p>{props.yy.email}</p>
    </div>
    )