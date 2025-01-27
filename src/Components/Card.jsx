import React from "react";
import './Card.css'

export const Card = ({img,title,description,href}) => {

  const maxTitleLength = 40; // Maximum characters for the title
  const maxDescriptionLength = 100; // Maximum characters for the description

  return (
    <>
      <div className="card">
        <div>
          <img src={img} width="400px" height="180px" alt="loading" />
        </div>
        <div className="title">
          <h4>{title.length > maxTitleLength
          ? title.substring(0, maxTitleLength) + "..."
          : title}</h4>
          <p>
          {description.length > maxDescriptionLength
          ? description.substring(0, maxDescriptionLength) + "..."
          : description}
          </p>
        </div>
        <div>
          <a href={href}><button className="btn">Read more</button></a>
        </div>
      </div>
  
    </>
  );
};
