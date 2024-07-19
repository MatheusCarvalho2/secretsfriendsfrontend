import { ButtonAcceptInterface } from "../../interface/inputs/button";
import '../../style/inputs/buttonaccept.css';

const ButtonAccept = (props: ButtonAcceptInterface) => {
  const { textButton } = props;

  return <button className="button-accept">{textButton}</button>;
};

export default ButtonAccept;
