import { useState } from "react";
import { ButtonAcceptInterface } from "../../interface/Button/Button";
import "./ButtonAccept.css";

const ButtonAccept = (props: ButtonAcceptInterface) => {
  const { textButton, onClick } = props;

  const [isPulsing, setIsPulsing] = useState(false);

  const handleClick = () => {
    setIsPulsing(true);
    onClick();
    setTimeout(() => {
      setIsPulsing(false);
    }, 300);
  };
  return (
    <button className={isPulsing ? "pulsing" : "buttonaccept"} onClick={handleClick}>
      {textButton}
    </button>
  );
};

export default ButtonAccept;
