import { FormInterface } from "../../interface/inputs/form";
import '../../style/inputs/form.css'

const FormInputs = (props: FormInterface) => {
  const { labelForInput, placeholderInput, typeInput } = props;

  return (
    <form action="">
      <div>
        <label htmlFor="">{labelForInput}</label>
        <input
          type={typeInput}
          placeholder={placeholderInput}
        />
      </div>
    </form>
  );
};

export default FormInputs;
