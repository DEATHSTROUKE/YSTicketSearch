import s from "./cart.module.css";
import { Metadata } from "next";
import TotalCount from "@/components/TotalCount/TotalCount";
import Image from "next/image";
import TicketsCount from "@/components/TicketsCount/TicketsCount";
import Link from "next/link";
import FilmCard from "@/components/FilmCard/FilmCard";

const Cart = () => {
  return <div className={s.cart__wrapper}>
    <div className={s.cart__films}>
      <FilmCard />

    </div>
    <TotalCount />
  </div>;
};


export default Cart;