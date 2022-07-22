import React, { Component } from "react";


export class ProductItem extends Component {
  liftItemUp = (item) => {
    this.props.onItemDetail(item);
  };

  render() {
    const { id, name, alias, price, shortDescription, image } = this.props.item;

    return (
      <div key={id} className="col-sm-4 mb-5">
        <div
          className="card"
          style={{
            height: "100%",
          }}
        >
          <h3 className="card-header">{name}</h3>
          <div className="card-body">
            <img src={image} className="w-100" alt="" />
            <h3 className="card-title">{alias}</h3>
            <h4 className="card-text">Price: {price}</h4>
          </div>
          <div className="card-footer text-muted">
            <p className="card-text">{shortDescription}</p>
            <button
              onClick={() => this.liftItemUp(this.props.item)}
              className="btn btn-dark w-25"
            >
              Detail
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
