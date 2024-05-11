import React from 'react';

const Card = ({ title, text, buttonText }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src="http://placehold.it/500x325" alt="Placeholder" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href="#" className="btn btn-primary">{buttonText}</a>
        </div>
      </div>
    </div>
  );
};

export default Card;