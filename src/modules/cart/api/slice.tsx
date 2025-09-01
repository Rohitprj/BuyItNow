// import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { RootState } from '@store/store';
// // import { RootState } from '@reduxjs/toolkit/query';

// interface CartItem {
//   _id: string;
//   name: string;
//   price: number;
//   quantity: number;
//   totalPrice: number;
// }

// interface CartState {
//   items: CartItem[];
// }

// const initialState: CartState = {
//   items: [],
// };

// export const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     clearCart: state => {
//       state.items = [];
//     },
//     addItems: (state, action: PayloadAction<CartItem>) => {
//       const newItem = action.payload;
//       const existingItems = state.items.find(item => item._id === newItem._id);
//       if (existingItems) {
//         existingItems.quantity += 1;
//         existingItems.totalPrice += newItem.price * existingItems.quantity;
//       } else {
//         state.items.push({
//           ...newItem,
//           quantity: 1,
//           totalPrice: newItem.price,
//         });
//       }
//     },
//     removeItem: (state, action: PayloadAction<CartItem>) => {
//       const newItem = action.payload;
//       const existingItems = state.items.find(item => item._id === newItem._id);
//       if (existingItems) {
//         if (existingItems.quantity > 1) {
//           existingItems.quantity -= 1;
//           existingItems.totalPrice -= existingItems.price;
//         }
//       } else {
//         state.items = state.items.filter(item => item._id !== newItem._id);
//       }
//     },
//   },
// });

// export const { clearCart, addItems, removeItem } = cartSlice.actions;
// export const selectCartItems = (state: RootState) => state.cart.items;

// export const selectItemCountById = (id: string) =>
//   createSelector(selectCartItems, items => {
//     const item = items.find((item: any) => item._id === id);
//     return item ? item?.quantity : 0;
//   });

// export const selectTotalItemsInCart = createSelector(selectCartItems, items => {
//   return items.reduce((total, item) => total + item?.quantity, 0);
// });

// export const selectTotalCartPrice = createSelector(selectCartItems, items => {
//   return items?.reduce((total, item) => total + item.quantity, 0);
// });

// export default cartSlice.reducer;

import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '@store/store';

interface CartItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: state => {
      state.items = [];
    },
    addItems: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item._id === newItem._id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price; // Corrected calculation
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
    },
    removeItem: (state, action: PayloadAction<CartItem>) => {
      const itemToRemove = action.payload;
      const existingItem = state.items.find(
        item => item._id === itemToRemove._id,
      );
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          existingItem.totalPrice = existingItem.quantity * existingItem.price; // Corrected calculation
        } else {
          // If quantity is 1, remove the item entirely from the array.
          state.items = state.items.filter(
            item => item._id !== itemToRemove._id,
          );
        }
      }
    },
  },
});

export const { clearCart, addItems, removeItem } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectItemCountById = (id: string) =>
  createSelector(selectCartItems, items => {
    const item = items.find(item => item._id === id);
    return item ? item.quantity : 0;
  });

export const selectTotalItemsInCart = createSelector(selectCartItems, items => {
  return items.reduce((total, item) => total + item.quantity, 0);
});

export const selectTotalCartPrice = createSelector(selectCartItems, items => {
  return items.reduce((total, item) => total + item.totalPrice, 0);
});

export default cartSlice.reducer;
