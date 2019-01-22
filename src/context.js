import React, { Component } from 'react';

// create new context object
const ProductContext = React.createContext();
// provider
// consumer

class ProductProvider extends Component {
  render() {
    return (
      <ProductContext.Provider value="hello from context">
        {/* return all children within this component */}
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };