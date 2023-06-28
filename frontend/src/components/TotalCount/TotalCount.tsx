"use client"
import s from "@/app/cart/cart.module.css";
import { useTotal } from "@/store/features/cart/cartSlice";


const TotalCount = () => {
  const total= useTotal();

  return <div className={s.total}>
    <div>Итого билетов</div>
    <div>{total}</div>
  </div>;
};

export default TotalCount;