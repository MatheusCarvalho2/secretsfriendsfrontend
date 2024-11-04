import { FormInterface } from "../../interface/Form/Form";
import "./Form.css";

const FormInputs = (props: FormInterface) => {
  const { labelForInput, placeholderInput, typeInput, setInputValue } = props;

  return (
    <form action="" method="Post">
      <div>
        <label htmlFor="">{labelForInput}</label>
        <input
          type={typeInput}
          placeholder={placeholderInput}
          onChange={(event) => setInputValue(event.target.value)}
        />
      </div>
    </form>
  );
};

export default FormInputs;
