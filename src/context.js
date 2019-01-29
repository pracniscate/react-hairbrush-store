import React, { Component } from 'react';
import { storeProducts, detailsProduct } from './data';

// create new context object
const ProductContext = React.createContext();
// provider
// consumer

class ProductProvider extends Component {
  state = {
    products: [],
    detailsProduct
  };

  // component lifecycle
  componentDidMount() {
    this.setProducts();
  }
  // get the values of data - not a reference
  setProducts = () => {
    let products = [];
    storeProducts.forEach(item => {
      // copy the values 
      const singleItem = {...item};
      products = [...products, singleItem];
    })
    this.setState(() => {
      return {products}
    })
  };

  handleDetails = () => {
    console.log('hello from details');
  };

  addToCart = (id) => {
    console.log(`addToCart.id is ${id}`);
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