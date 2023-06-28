"use client";

import s from "@/app/faq/faq.module.css";
import arrowSvg from "../../../public/arrow.svg";
import Image from "next/image";
import cn from "classnames";
import { useState } from "react";


const Question = ({ title, text }) => {
  const [isOpened, setIsOpened] = useState(false);

  return <div className={s.question} onClick={() => setIsOpened(!isOpened)}>
    <div className={s.question__line}>
      <div className={s.question__title}>{title}</div>
      <button className={cn(s.btn, {[s.btn_rotated]: isOpened})}>
        <Image src={arrowSvg} alt="Развернуть элемент" />
      </button>
    </div>
    <div className={cn(s.question__text, { [s.question__text_opened]: isOpened })}>
      {text}
    </div>
  </div>;
};

export default Question;