import React from "react";

import Card from "./Card/Card";

import styles from "./CardList.module.css";

const CardList = (props) => (
  <div className={styles.CardList}>
    {props.monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);

export default CardList;
