import s from "./footer.module.css";
import Link from "next/link";


const Footer = () => {
  return <footer className={s.footer}>
    <div>
      <Link href="/faq">Вопросы и ответы</Link>
    </div>
    <div>
      <Link href="/about">О нас</Link>
    </div>
  </footer>;
};

export default Footer;