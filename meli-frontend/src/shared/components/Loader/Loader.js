import React from 'react';

import { ClipLoader } from 'react-spinners';

import './Loader.scss';

const Loader = () => {
  return (
    <div className="loader">
        <ClipLoader color={ "#FFE600" } />
    </div>
  );
};

export default Loader;
