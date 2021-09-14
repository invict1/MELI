import React, { Component } from 'react';
import { parse } from 'qs';

import SearchBar from '../../components/SearchBar/SearchBar';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import ItemList from '../../components/ItemList/ItemList';

const API_URL = process.env.REACT_APP_API_URL;

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      items: [],
      categories: [],
      loading: false
    };
  }

  componentDidMount() {
    if (this.props.location.search && this.state.items) {
      const queryString = parse(this.props.location.search, { ignoreQueryPrefix: true });
      this.getItems(queryString.search);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search && prevProps.location.search
      && prevProps.location.search !== this.props.location.search) {
      const queryString = parse(this.props.location.search, { ignoreQueryPrefix: true });
      this.getItems(queryString.search);
    }
  }

  getItems(search) {
    this.setState({ search, items: [], categories: [], loading: true });
    this.getItemsAPICall(search)
      .then((data) => {
        this.setState({
          items: data.items,
          categories: data.categories,
          loading: false });
      });
  }

  getItemsAPICall(search) {
    const searchFormated = search.normalize('NFKD').replace(/[^\w]/g, '');

    return fetch(API_URL + '/api/items?q=' + encodeURI(searchFormated))
      .then(response => response.json())
      .catch(error => console.log(error));
  }

  render() {
    const lastCategory = this.state.categories ? this.state.categories[this.state.categories.length - 1] : [];

    return (
      <div>
        <SearchBar history={ this.props.history } />
        <BreadCrumbs crumbs={ this.state.categories } />
        <ItemList
          lastCategory={ lastCategory }
          items={ this.state.items }
          loading={ this.state.loading }
        />
      </div>
    );
  }
}

export default SearchPage;
