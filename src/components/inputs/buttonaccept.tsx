import { ButtonAcceptInterface } from "../../interface/button";

const ButtonAccept = (props: ButtonAcceptInterface) => {
  const { textButton } = props;

  return (
    <button
      style={{
        background: "var(--primary-color)",
        color: "#fff",
        borderRadius: "10px",
        height: "49px",
        border: "none",
      }}
    >
      {textButton}
    </button>
  );
};

export default ButtonAccept;
