import React, { Component } from 'react';
import './App.css';

import ShoesStore from '../src/BTVN_Props_Buoi33/ShoesStore';
import ProductList from '../src/BTVN_Props_Buoi33/ProductList';
import Modal from '../src/BTVN_Props_Buoi33/Modal';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      selectedProduct: null,
    };
  }
  modalHandle = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };
  handleSelect = (product) => {
    this.modalHandle();
    this.setState({  isOpen: true ,selectedProduct: product });
  };

  render() {
    console.log(this.state);
    return (
      <ShoesStore>
        <ProductList onShowDetail={this.handleSelect} />
        {this.state.isOpen && (
          <Modal
            onClose={this.modalHandle}
            content={this.state.selectedProduct}
          />
        )}
      </ShoesStore>
    );
  }
}
export default App;
