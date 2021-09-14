import React from 'react';
import { Link } from 'react-router-dom';
import ICShipping from './../../../assets/ic_shipping.png';
import './ItemListUnit.scss';

const ItemListUnit = (props) => {
  return (
    <div className="product-list">
      <div className="row col-12 my-2">
        <div className="col-3 col-md-3 img-container">
          <Link to={ `/items/${ props.item.id }` }>
            <img
              className="rounded img-fluid thumbnail"
              src={ props.item.picture }
              alt="Item"
            />
          </Link>
        </div>
        <div className="col-6 col-md-6">
          <div className="contain-detail">
            <div className="info-product">
              <div className="product-price">
                <Link to={ `/items/${ props.item.id }` }>
                  <span>{ props.item.price.currency } { props.item.price.amount }</span>
                </Link>
                <img src={ ICShipping } alt="shipping" />
              </div>
              <h2>{ props.item.title }</h2>
            </div>
          </div>
        </div>
        <div className="col-3 col-md-3">
          <div className="location">
            <p>{ props.item.address }</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListUnit;
