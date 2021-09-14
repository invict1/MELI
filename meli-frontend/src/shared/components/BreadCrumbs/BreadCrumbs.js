import React from 'react';
import './BreadCrumbs.scss';

const BreadCrumbs = (props) => {
  let breadcrumbs = [];

  if (props.crumbs && props.crumbs.length) {
    breadcrumbs = props.crumbs.map((crumb) => {
      return (
        <li className="breadcrumb-item" key={ crumb }>
          { crumb }
        </li>
      );
    });
  }

  return (
    <div className="container">
      <ol className="breadcrumb">
        { breadcrumbs }
      </ol>
    </div>
  );
};

export default BreadCrumbs;
