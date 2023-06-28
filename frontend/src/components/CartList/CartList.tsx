"use client";

import { deleteFilmFromCart, useCartFilms } from "@/store/features/cart/cartSlice";
import CartFilmCard from "@/components/FilmCard/CartFilmCard";
import { createPortal } from "react-dom";
import Modal from "@/components/Modal/Modal";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

const CartList = () => {
  const cartItems = useCartFilms();
  const dispatch = useDispatch();
  const [filmToDelete, setFilmToDelete] = useState(null);

  const onConfirm = useCallback(() => {
    dispatch(deleteFilmFromCart(filmToDelete));
    setFilmToDelete(null);
  }, [dispatch, filmToDelete]);

  const onDelete = useCallback((film) => {
    setFilmToDelete(film);
  }, []);

  const closeModal = useCallback(() => setFilmToDelete(null), []);

  const renderModal = useCallback(() => {
    return <Modal onConfirm={onConfirm}
                  onCancel={closeModal}
    />;
  }, [closeModal, onConfirm]);

  return <>
    {(cartItems && cartItems.length === 0) ? "Корзина пуста" : ""}
    {cartItems.map(item => <CartFilmCard
      key={item.id}
      film={item}
      onDelete={onDelete}
    />)}
    {
      filmToDelete && createPortal(
        renderModal(),
        document.querySelector("#reactPortalModal"),
      )
    }
  </>;
};

export default CartList;