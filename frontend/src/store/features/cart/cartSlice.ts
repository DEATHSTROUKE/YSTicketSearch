import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { Film, FilmGenre } from "@/types/Film";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

export interface Filter {
  name: string | null;
  cinemaId: string | null;
  genre: FilmGenre | null;
}

export interface CartItem extends Film {
  quantity: number;
}

export interface CartState {
  items: Film[];
  cartItems: CartItem[];
  filter: Filter;
  total: number;
}

const initialState: CartState = {
  items: [],
  cartItems: [],
  total: 0,
  filter: {
    genre: null,
    name: null,
    cinemaId: null,
  },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state: CartState, action: PayloadAction<Film>) => {
      const cartEntity = state.cartItems.find(
        ({ id }) => action.payload.id === id,
      );

      if (cartEntity && cartEntity.quantity >= 30) {
        return;
      } else if (!cartEntity) {
        state.cartItems.push({
          quantity: 1,
          ...action.payload,
        });
      } else {
        cartEntity.quantity++;
      }
      state.total++;
    },

    removeFromCart(state: CartState, action: PayloadAction<Film>) {
      const cartEntity = state.cartItems.find(
        ({ id }) => action.payload.id === id,
      );

      if (!cartEntity) return;

      if (cartEntity.quantity === 1) {
        state.cartItems = state.cartItems.filter((film) => film !== cartEntity);
      } else {
        cartEntity.quantity--;
      }

      state.total--;
    },

    deleteFilmFromCart(
      state: CartState,
      action: PayloadAction<Film>,
    ) {
      const cartEntity = state.cartItems.find(
        ({ id }) => action.payload.id === id,
      );

      state.total -= cartEntity ? cartEntity.quantity : 0;
      state.cartItems = state.cartItems.filter((item) => item !== cartEntity);
    },

    changeCinemaFilter(
      state: CartState,
      action: PayloadAction<Filter["cinemaId"]>,
    ) {
      state.filter.cinemaId = action.payload;
    },

    changeNameFilter(state: CartState, action: PayloadAction<Filter["name"]>) {
      state.filter.name = action.payload;
    },

    changeGenreFilter(
      state: CartState,
      action: PayloadAction<Filter["genre"]>,
    ) {
      state.filter.genre = action.payload;
    },
  },
});

export const useFilmQuantity = (film: Film) => {
  const quantity = useSelector<CartSlice, number>((state) => {
    const cartItem = state.cart.cartItems.find(({ id }) => id === film.id);
    return cartItem ? cartItem.quantity : 0;
  });

  const dispatch = useDispatch();

  const incQuantity = useCallback(
    () => dispatch(addToCart(film)),
    [film, dispatch],
  );
  const decQuantity = useCallback(
    () => dispatch(removeFromCart(film)),
    [film, dispatch],
  );

  return { quantity, incQuantity, decQuantity };
};

export const useCartFilms = () => {
  return useSelector(state => state.cart.cartItems);
};

export const useDeleteFilmFormCart = (id: string) => {
  const dispatch = useDispatch();
  return useCallback(
    () => dispatch(deleteFilmFromCart(id)),
    [id, dispatch],
  );
};

export const useTotal = () => {
  return useSelector<CartSlice, number>((state) => state.cart.total);
};

export const useGetFilm = (id: string) => {
  return useSelector(state => {
    return state.cart.items.find(item => item.id === id);
  });
};

export const {
  addToCart,
  removeFromCart,
  changeCinemaFilter,
  changeNameFilter,
  changeGenreFilter,
  deleteFilmFromCart,
} = cartSlice.actions;

export type CartSlice = {
  cart: CartState;
};

export default cartSlice.reducer;
