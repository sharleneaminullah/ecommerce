import React, { useContext } from 'react';
import { isInCart } from '../../helpers';
import { CartContext } from '../../context/cart-context'; 
import { withRouter } from 'react-router-dom';
import './featured-product.styles.scss';

/* This component renders selective products
 */

const FeaturedProduct = (props) => {
  const { title, imageUrl, prices, history, id, description } = props;
  const product = { title, imageUrl, prices, id,  description };
  const { addProduct, cartItems, increase } = useContext(CartContext);
  const itemInCart = isInCart(product, cartItems);
  return (
    <div className='featured-product'>
      <div className='featured-image' onClick={() => history.push(`/product/${id}`)}>
        <img src={imageUrl} alt='product' />
      </div>
      <div className='name-price'>
        <h3>{title}</h3>
        <p>{prices[0].currency} {prices[0].amount}</p>
        <p>{prices[1].currency} {prices[1].amount}</p>
        { 
          !itemInCart && 
          <button 
            className='button is-black clasohlson-btn'
            onClick={() => addProduct(product)}>
              ADD TO CART</button>
        }
        {
          itemInCart &&
          <button 
            className='button is-white clasohlson-btn'
            id='btn-white-outline'
            onClick={()=> increase(product)}>
              ADD MORE</button>
        }        
      </div>
    </div>
  );
}

export default withRouter(FeaturedProduct);