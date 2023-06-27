import s from "@/app/faq/faq.module.css";
import arrowSvg from "../../../public/arrow.svg";
import Image from "next/image";


const Question = ({ title, text }) => {
  return <div className={s.question}>
    <div className={s.question__line}>
      <div className={s.question__title}>{title}</div>
      <button>
        <Image src={arrowSvg} alt="Развернуть элемент" />
      </button>
    </div>
    <div className={s.question__text}>
      {text}
    </div>
  </div>;
};

export default Question;