import s from "./modal.module.css";
import Image from "next/image";
import closeSvg from "@/../public/close.svg";
import cn from "classnames";

const Modal = ({ onConfirm, onCancel }) => {
  const onClose = (e) => {
    if (e.target !== e.currentTarget) return;
    e.stopPropagation();
    onCancel();
  };

  return <div className={s.modal__wrapper} onClick={onClose}>
    <div className={s.modal}>
      <div className={s.modal__line}>
        <div className={s.modal__title}>Удаление билета</div>
        <button onClick={onCancel}>
          <Image
            src={closeSvg}
            width={16}
            height={16}
            alt="Закрыть" />
        </button>
      </div>
      <div className={s.text}>
        Вы уверены, что хотите удалить билет?
      </div>
      <div className={s.buttons}>
        <button className={cn(s.btn, s.btn__yes)} onClick={onConfirm}>Да</button>
        <button className={cn(s.btn, s.btn__no)} onClick={onClose}>Нет</button>
      </div>
    </div>
  </div>;
};

export default Modal;