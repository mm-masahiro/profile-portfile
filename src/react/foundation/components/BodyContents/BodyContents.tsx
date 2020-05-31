import * as React from 'react';
import './BodyContents.css';
import './About/About';
import About from './About/About';
import Job from './Job/Job';
import Hobby from './Hobby/Hobby';

const BodyContents = () => {
  return (
    <div className="wrapper_contents">
      <About />
      <Job />
      <Hobby />
    </div>
  );
}

export default BodyContents