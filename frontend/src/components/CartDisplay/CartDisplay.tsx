"use client"

import s from './cart_display.module.css'
import { useTotal } from "@/store/features/cart/cartSlice";

const CartDisplay = () => {
  const total = useTotal();

  return <>
    { total > 0 ? <div className={s.block}>{total}</div> : ''}
  </>
}

export default CartDisplay;
