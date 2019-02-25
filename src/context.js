import React, { Component } from 'react';
import { storeProducts, detailsProduct } from './data';

// create new context object
const ProductContext = React.createContext();
// provider
// consumer

class ProductProvider extends Component {
  state = {
    products: [],
    detailsProduct,
    cart: storeProducts,
    modalOpen: false,
    modalProduct: detailsProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
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
      return { products }
    })
  };

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  handleDetails = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailsProduct: product };
    })
  };

  addToCart = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(() => {
      return { products: tempProducts, cart: [...this.state.cart] };
    }, 
    () => {
      console.log(this.state);
      }
    );
  };

  openModal = id => {
    // retrieve product
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    })
  }

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    })
  }

  increment = (id) => {
    console.log('this is increment method');
  };

  decrement = (id) => {
    console.log('this is decrement method');
  };

  removeItem = (id) => {
    console.log('item removed');
  };

  clearCart = () => {
    console.log('cart empty.');
  };

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetails: this.handleDetails,
        addToCart: this.addToCart,
        openModal: this.openModal,
        closeModal: this.closeModal,
        increment: this.increment,
        decrement: this.decrement,
        removeItem: this.removeItem,
        clearCart: this.clearCart
      }}>
        {/* return all children within this component */}
        {this.props.children}
      </ProductContext.Provider>
    )
  }
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };