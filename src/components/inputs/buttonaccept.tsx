import { useState } from "react";
import { ButtonAcceptInterface } from "../../interface/inputs/button";
import "../../style/inputs/buttonaccept.css";

const ButtonAccept = (props: ButtonAcceptInterface) => {
  const { textButton, onClick } = props;

  const [isPulsing, setIsPulsing] = useState(false);

  const handleClick = () => {
    setIsPulsing(true);
    onClick();

    // Remove a classe de pulso após a animação
    setTimeout(() => {
      setIsPulsing(false);
    }, 300); // Duração da animação definida em CSS
  };
  return (
    <button className={isPulsing ? "pulsing" : "buttonaccept"} onClick={handleClick}>
      {textButton}
    </button>
  );
};

export default ButtonAccept;
