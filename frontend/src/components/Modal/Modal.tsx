import s from "./modal.module.css";
import Image from "next/image";
import closeSvg from "@/../public/close.svg"
import cn from 'classnames'

const Modal = () => {
  return <div className={s.modal__wrapper}>
    <div className={s.modal}>
      <div className={s.modal__line}>
        <div className={s.modal__title}>Удаление билета</div>
        <Image
          src={closeSvg}
          width={16}
          height={16}
          alt="Закрыть" />
      </div>
      <div className={s.text}>
        Вы уверены, что хотите удалить билет?
      </div>
      <div className={s.buttons}>
        <button className={cn(s.btn, s.btn__yes)}>Да</button>
        <button className={cn(s.btn, s.btn__no)}>Нет</button>
      </div>
    </div>
  </div>;
};

export default Modal;