import * as React from 'react';
import './BodyHeader.css'

const BodyHeader = () => {
  return (
    <header className="wrapper_header">
      <div className="wrapper_header_title">
        <h1 className="body_title">Masahiro's Portfolio</h1>
      </div>
      <div className="wrapper_header_img">
        <img className="body_img" src="./img/top.webp" loading="lazy" />
      </div>
    </header>

  );
}

export default BodyHeader
