import s from "./tickets_count.module.css";
import Image from "next/image";
import minusSvg from "@/../public/minus.svg";
import plusSvg from "@/../public/plus.svg";
import cn from 'classnames'

const TicketsCount = ({quantity, incQuantity, decQuantity}) => {

  return <div className={s.count__wrapper}>
    <button className={cn(s.btn, {[s.btn_disabled]: quantity === 0})} onClick={decQuantity}>
      <Image src={minusSvg}
             alt="Удалить товар из корзины"
             width={12}
             height={12}
      />
    </button>
    <div className={s.text}>{quantity}</div>
    <button className={cn(s.btn,  {[s.btn_disabled]: quantity >= 30})} onClick={incQuantity}>
      <Image src={plusSvg}
             alt="Добавить товар в корзину"
             width={12}
             height={12}
      />
    </button>
  </div>;
};

export default TicketsCount;