import s from "./cart.module.css";
import { Metadata } from "next";
import TotalCount from "@/components/TotalCount/TotalCount";
import FilmsList from "@/components/FilmsList/FilmsList";
import CartList from "@/components/CartList/CartList";

export const metaData: Metadata = {
  title: "Корзина",
  description: "Страница с фильмами, добавленными в корзину",
};

const Cart = () => {
  return <div className={s.cart__wrapper}>
    <div className={s.cart__films}>
      <CartList />
    </div>
    <TotalCount />
  </div>;
};


export default Cart;