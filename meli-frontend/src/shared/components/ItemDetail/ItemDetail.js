import React from 'react';

import ClipLoader from '../Loader/Loader';
import SearchEmptyState from '../EmptyStates/SearchEmptyState';

import './ItemDetail.scss';

const ItemDetail = (props) => {
  if (props.loading) {
    return (
      <ClipLoader />    
    );
  }

  if (!props.item || props.item.length === 0) {
    return <SearchEmptyState />;
  }

  const description = props.item.description.split('\n').map((item, key) => {
    return <span key={ key }>{ item }<br /></span>;
  });

  return (
    <div className="container">
      <div className="wrap-list mb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8 col-md-8">
              <div className="text-center">
                <img className="img-fluid" src={ props.item.picture } alt="Item" />
              </div>
              <h1>Descripcion del producto</h1>
              <p>{ description }</p>
            </div>
            <div className="col-4 col-md-4 d-none d-sm-block">
              <h6>{ props.item.condition }{ props.item.sold_quantity !== 0 ? ` - ${ props.item.sold_quantity } vendidos` : '' }</h6>
              <h4>{ props.item.title }</h4>
              <div className="price">
                <h3>{ props.item.price.currency } { props.item.price.amount }</h3>
                <p className="decimal-part">00</p>
              </div>
              <button type="button" className="btn btn-primary btn-block">Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ItemDetail;
