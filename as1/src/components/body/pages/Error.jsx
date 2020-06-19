import React from 'react';
import {NavLink} from 'react-router-dom';

import img_1 from '../../../img/error_sign.png'

const Error = (props) => {
  const { error } = props,
  contact = <NavLink to={"/kontakt"}>wsparciem technicznym</NavLink>;

  return (
    <div className="error-page">
      <div className="error-page-title"><h2>{error.title ? error.title : `Wystąpił bład ${error.code}`}</h2></div>
      <div className="error-page-describtion"><p>{error.describtion ? error.describtion : <>Jeśli błąd będzie wystepować cześciej to proszę skontaktować się z {contact}.</>}</p></div>
      {/* <div className="error-page-hyperlink"><a target="_blank" rel="noopener noreferrer" href={error.hyperlink}>{error.hyperlink}</a></div> */}
      <div className="error-page-image">
        <img src={img_1} alt="error_temporary_image[04-12-2019]" />
      </div>
    </div>
  );
}

export default Error;