import './Card.css';
import React from "react";

const Card = (props) => {
const classes = 'card ' + props.className;
console.log('props in card',props);

return (
<div className={classes}>{props.children}</div>
);
}

export default Card;