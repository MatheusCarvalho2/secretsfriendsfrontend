export interface FormInterface {
  labelForInput: string;
  placeholderInput: string;
  typeInput: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}
