import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            description,
            price,
            title,
            inCart
          } = value.detailsProduct;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-green my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end title */}
              {/* product info */}
              <div className="row">
                {/* product image */}
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                {/* product description */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>{title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by: <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-green">
                    <strong>
                      price: <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about the product:
                  </p>
                  <p className="text-muted lead">{description}</p>
                  {/* buttons */}
                  <div>
                    <Link to='/'>
                      <ButtonContainer>back to products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                    disabled={ inCart ? true : false }
                    onClick={() => {
                      value.addToCart(id)
                    }}
                    >
                      {/* is the item in the cart? */}
                      { inCart ? 'inCart' : 'add to cart'}
                    </ButtonContainer>
                  </div>
                </div>  
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    );
  }
}
