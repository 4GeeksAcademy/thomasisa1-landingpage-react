import React from 'react';
import './styles.css'

const WelcomeSection = () => {
  return (
    <div className="jumbotron bg-light custom-padding-left">
      <h1 className="display-4">A Warm Welcome!</h1>
      <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid simique quae.</p>
      <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
    </div>
  );
};

export default WelcomeSection;