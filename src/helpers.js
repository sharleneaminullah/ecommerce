
export const isInCart = (product, cartItems) => {
  return cartItems.find(item => item.id === product.id);
}


export const API = "http://localhost:8181/products";
export const AUTHOR_EMAIL = "sharlene108@gmail.com";