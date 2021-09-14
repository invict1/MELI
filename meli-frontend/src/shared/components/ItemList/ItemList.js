import React from 'react';

import ItemListUnit from './ItemListUnit';
import SearchEmptyState from '../EmptyStates/SearchEmptyState';
import ClipLoader from '../Loader/Loader';

const ItemList = (props) => {
  if (props.loading) {
    return <ClipLoader />;
  }

  if (!props.items) {
    return <SearchEmptyState />;
  }

  let items = [];
  items = props.items.map((item, index) => {
    if (index === props.items.length - 1) {
      return (
        <ItemListUnit key={ item.id } item={ item } />
      );
    }
    
    return (
      <>
        <ItemListUnit key={ item.id } item={ item } />
        <hr />
      </>
    );
  });

  return (
    <div className="container">
      <div className="wrap-list mb-5">
        <div className="container-fluid">
          { items }
        </div>
      </div>
    </div>
  );
};

export default ItemList;
