import { FormInterface } from "../../interface/Form/Form";
import "./Form.css";

const FormInputs = (props: FormInterface) => {
  const { labelForInput, placeholderInput, typeInput, setInputValue, inputName, inputId } = props;

  return (
    <form action="" method="Post">
      <div>
        <label htmlFor={inputId}>{labelForInput}</label>
        <input
          type={typeInput}
          placeholder={placeholderInput}
          name={inputName}
          id={inputId}
          onChange={(event) => setInputValue(event.target.value)}
        />
      </div>
    </form>
  );
};

export default FormInputs;
