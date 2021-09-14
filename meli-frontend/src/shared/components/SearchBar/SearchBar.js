import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import logo from './../../../assets/Logo_ML.png';
import ImgSearch from './../../../assets/ic_Search.png';

import './SearchBar.scss';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      search: '' 
    };

    this.submitSearch = this.submitSearch.bind(this);
    this.updateSearchbar = this.updateSearchbar.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  updateSearchbar(event) {
    const target = event.target;
    this.setState({
      search: target.value,
    });
  }

  submitSearch = () => {
    if (this.state.search) {
      this.props.history.push(`/items?search=${this.state.search}`);
    }
  }

  keyPress(e) {
    if (e.keyCode === 13) {
      this.submitSearch();
    }
  }

  render() {
    return (
      <nav>
        <div className="container">
          <div className="navbar col-12 px-2">
            <div className="col-1 col-md-1 logo">
              <Link to="/">
                <img src={ logo } alt="logo" title="logo" />
              </Link>
            </div>
            <div className="col-11 col-md-11">
              <div className="form-inline d-inline w-100">
                <div className="input-group">
                  <input type="text"
                    onChange={ this.updateSearchbar }
                    onKeyDown={ this.keyPress }
                    placeholder="Nunca dejes de buscar"
                    className="form-control"
                  />
                  <div className="input-search-button">
                    <button onClick={ this.submitSearch } className="input-group-text" alt="">
                      <img src={ ImgSearch } alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default SearchBar;
