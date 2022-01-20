import React from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR_CART':
      return { ...state, cart: [] };
    case 'REMOVE':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };

    case 'TOTALS':
      return { ...state };

    case 'INCREASE':
      let tempCart = state.cart.map(item => {
        if (item.id === action.payload) {
          if (item.amount === item.max_amount)
            return { ...item, amount: item.amount };
          else return { ...item, amount: item.amount + 1 };
        }
        return item;
      });

      return { ...state, cart: tempCart };

    case 'DECREASE':
      let tempCart2 = state.cart
        .map(item => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter(item => item.amount !== 0);
      return { ...state, cart: tempCart2 };

    case 'GET_TOTALS':
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          console.log(price, amount);
          cartTotal.amount += amount;
          cartTotal.total += amount * price;
          console.log(cartTotal.total);
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));

      return { ...state, total, amount };

    default:
      console.log('NO CASE FOUND');
      break;
  }

  return state;
};

export default reducer;
