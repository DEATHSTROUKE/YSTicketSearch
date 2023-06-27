import s from "./tickets_count.module.css";
import Image from "next/image";
import minusSvg from "@/../public/minus.svg";
import plusSvg from "@/../public/plus.svg";

const TicketsCount = () => {
  return <div className={s.count__wrapper}>
    <button className={s.btn}>
      <Image src={minusSvg}
             alt="Удалить товар из корзины"
             width={12}
             height={12}
      />
    </button>
    <div className={s.text}>0</div>
    <button className={s.btn}>
      <Image src={plusSvg}
             alt="Добавить товар в корзину"
             width={12}
             height={12}
      />
    </button>
  </div>;
};

export default TicketsCount;