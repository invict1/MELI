import React, { Component } from 'react';

import SearchBar from '../../components/SearchBar/SearchBar';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import ItemDetail from '../../components/ItemDetail/ItemDetail';

const API_URL = process.env.REACT_APP_API_URL;

class ItemPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      categories: [],
      loading: false 
    };
  }

  componentDidMount() {
    if (this.props.location && this.state.item) {
      const itemId = this.props.match.params.id;
      this.getItem(itemId);
    }
  }

  getItem(itemId) {
    this.setState({ loading: true });
    this.requestItemAPICall(itemId)
      .then((data) => {
        this.setState({
          item: data.item,
          categories: data.categories,
          loading: false 
        });
      });
  }

  requestItemAPICall(id) {
    return fetch(API_URL + '/api/items/' + id)
      .then(response => response.json())
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <SearchBar history={ this.props.history } />
        <BreadCrumbs crumbs={ this.state.categories } />
        <ItemDetail
          item={ this.state.item }
          loading={ this.state.loading }
        />
      </div>
    );
  }
}

export default ItemPage;
