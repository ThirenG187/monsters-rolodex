import React from "react";
import classes from "./Card.module.css";

const Card = (props) => (
  <div className={classes.Card}>
    <img
      alt="monster"
      src={`https://robohash.org/${props.monster.id}?set-set2`}
    />
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);

export default Card;
