import { InputsInterface } from "../../interface/inputs";

const FormInputs = (props: InputsInterface) => {
  const { labelForInput, placeholderInput, typeInput } = props;

  return (
    <form action="">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="">{labelForInput}</label>
        <input
          type={typeInput}
          placeholder={placeholderInput}
          style={{ marginBottom: "12px" }}
        />
      </div>
    </form>
  );
};

export default FormInputs;
