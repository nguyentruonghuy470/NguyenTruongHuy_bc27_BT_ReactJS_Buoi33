import React, { Component } from 'react';
import ProductItem from './ProductItem';
import productsData from '../BTVN_Props_Buoi33/data.json';
import '../BTVN_Props_Buoi33/styleList.css'
export class ProductList extends Component {
  showDetailHandle = (item) => {
    this.props.onShowDetail(item);
  };
  render() {
    return (
      <div className="row mt-5">
        {productsData.map((item) => {
          return (
            <ProductItem
              onItemDetail={this.showDetailHandle}
              item={item}
              key={item.id}
            />
          );
        })}
      </div>
    );
  }
}
export default ProductList;