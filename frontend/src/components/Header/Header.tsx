import s from "./header.module.css";
import CartDisplay from "@/components/CartDisplay/CartDisplay";
import Link from "next/link";
import basketSvg from "@/../public/basket.svg";
import Image from "next/image"

const Header = () => {
  return <header className={s.header}>
    <div className={s.logo}>
      <Link href="/">Билетопоиск</Link>
    </div>
    <div className={s.cart}>
      <CartDisplay />
      <Image
        src={basketSvg}
        width={32}
        height={32}
        alt="Корзина"
      />
    </div>
  </header>;
};

export default Header;