import React from "react";
import "./QuoteCard.css";

const QuoteCard = props => {
  return (
    <figure className="QuoteCard">
      <img
        src="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
        alt="Nelson Muntz"
      />
      <figcaption>
        <blockquote>
          {props.quote}
          {props[1]}
        </blockquote>
        <cite>{props.name}</cite>
      </figcaption>
    </figure>
  );
};

export default QuoteCard;
