import { createContext, useState } from "react";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    const alreadyInCart = cart.findIndex(cartItem => {
      return cartItem.product.id == item.id;
    });

    if (alreadyInCart == -1) {
      setCart(currentData => [...currentData, { product: item, amount: 1 }]);
    } else {
      const tempCart = [...cart];
      tempCart[alreadyInCart].amount++;
      setCart(tempCart);
    }
  }

  function getTotalPrice() {
    const totalPrice = cart.reduce((accumulator, item) => accumulator + (item.product.price * item.amount), 0);

    return totalPrice;
  }

  return <GlobalContext.Provider value={{ cart, addToCart, getTotalPrice }}>
    {children}
  </GlobalContext.Provider>;

}

export { GlobalContext, GlobalProvider };