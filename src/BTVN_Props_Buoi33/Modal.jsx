import React, { Component } from "react";

export class Modal extends Component {
  render() {
    const { name, image, description, alias, quantity } = this.props.content;

    return (
      <>
        <div
          style={{
            display: 'block',
            opacity: '1',
          }}
          className="modal fade show"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Product Cart</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={this.props.onClose}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="row mt-5">
                  <div className="col-sm-6">
                    <img
                      src={image}
                      alt={name}
                      width="100%"
                      height="500px"
                    />
                  </div>
                  <div className="col-sm-6">
                    <h1>Chi tiết Sản phẩm</h1>
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>Alias: </td>
                          <td>{alias}</td>
                        </tr>
                        <tr>
                          <td>Description: </td>
                          <td>{description}</td>
                        </tr>
                        <tr>
                          <td>Quantity: </td>
                          <td>{quantity}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={this.props.onClose}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Modal;
