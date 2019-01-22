import React, { Component } from 'react';
import { storeProducts, detailsProduct } from './data';

// create new context object
const ProductContext = React.createContext();
// provider
// consumer

class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailsProduct
  };

  handleDetails = () => {
    console.log('hello from details')
  };

  addToCart = () => {
    console.log('hello from addToCart')
  };

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetails,
        addToCart: this.addToCart
      }}>
        {/* return all children within this component */}
        {this.props.children}
      </ProductContext.Provider>
    )
  }
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };