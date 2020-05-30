import * as React from 'react';
import './BodyContents.css';
import './About/About';
import About from './About/About';

const BodyContents = () => {
  return (
    <div className="wrapper_contents">
      <About />
    </div>
  );
}

export default BodyContents