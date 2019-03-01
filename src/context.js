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
    cart: [],
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
      return { products: tempProducts, cart: [...this.state.cart, product] };
    },
    // CALLBACK
    () => {
      this.addTotals();
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
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    // find item that doesn't match id
    tempCart = tempCart.filter(item => item.id !== id);

    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(() => {
      return {
        cart: [...tempCart],
        products: [...tempProducts]
      }
    }, () => {
      this.addTotals();
    })
  };

  clearCart = () => {
    this.setState(() => {
      return { cart: [] }
    }, () => {
      // get new copies of objects
      this.setProducts();
      this.addTotals();
    });
  };

  addTotals = () => {
    let subTotal = 0;
    // loop through the cart array & add items in that array
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;  // 10%
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total
      }
    })
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