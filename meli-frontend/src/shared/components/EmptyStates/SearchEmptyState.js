import React from 'react';

import './SearchEmptyState.scss';

const SearchEmptyState = () => {
  return (
    <div className="container">
      <div className="wrap-list mb-5">
        <div className="container-fluid">
          <div className="row items-not-found">
            <div className="col-1 col-md-1">
              <svg class="ui-search-icon ui-search-icon--not-found ui-search-rescue__icon" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
                <g fill="none" fillRule="evenodd">
                  <path stroke="#484848" strokeLinecap="round" d="M37.891 50.705c4.584-1.85 8.61-5.256 11.216-9.957m2.764-9.071c.456-5.499-1.142-10.977-4.48-15.29a21.276 21.276 0 0 0-6.53-5.599c-5.845-3.24-12.566-3.444-18.403-1.139-4.65 1.836-8.739 5.265-11.375 10.022a22.488 22.488 0 0 0-2.832 10.308 22.102 22.102 0 0 0 3.058 11.86 21.288 21.288 0 0 0 8.02 7.79 21.275 21.275 0 0 0 8.427 2.594 21.853 21.853 0 0 0 10.135-1.518"></path>
                  <path stroke="#484848" strokeLinecap="round" d="M28.774 45.86a16.046 16.046 0 0 1-9.688-4.642m-3.693-5.7c-1.4-3.695-1.38-7.782.065-11.41a15.238 15.238 0 0 1 3.392-5.144c3.384-3.384 7.97-4.852 12.444-4.417 3.564.346 7.056 1.9 9.81 4.654 1.9 1.9 3.23 4.153 3.984 6.538a15.83 15.83 0 0 1 .236 8.768 15.246 15.246 0 0 1-3.984 6.947 15.237 15.237 0 0 1-5.289 3.449 15.651 15.651 0 0 1-7.277.956"></path>
                    <g fill="#484848" fillRule="nonzero">
                      <path d="M35.644 35.95l-12-12 .572-.572 12 12z"></path>
                      <path d="M36.215 23.95l-12 12-.57-.572 11.999-12z"></path>
                    </g>
                  <path stroke="#484848" strokeLinecap="square" d="M52.267 52.61l-6.646-6.647"></path>
                  <path fill="#FFDB15" d="M61.601 54.585l-2.823-2.824c-1.405-1.405-3.988-1.099-5.768.682-1.78 1.78-2.087 4.363-.682 5.768l9.599 9.599 8.89 8.89c1.403 1.404 3.987 1.098 5.767-.682 1.78-1.78 2.086-4.364.683-5.768"></path>
                  <path stroke="#484848" strokeLinecap="round" d="M52.095 58.273c-1.404-1.405-1.283-3.803.27-5.356s3.951-1.674 5.356-.27l9.6 9.6 8.89 8.89"></path>
                </g>
              </svg>
            </div>
                        
            <div className="col-6 col-md-6">
              <h4>No hay publicaciones que coincidan con tu búsqueda.</h4>
              <ul>
                <li><b>Revisa la ortografía</b> de la palabra.</li>
                <li>Utiliza <b>palabras más genéricas</b> o menos palabras.</li>
                <li>Navega por las categorías para encontrar un producto similar.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchEmptyState;
