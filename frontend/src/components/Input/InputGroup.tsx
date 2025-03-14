import { FC } from "react";
import styles from "./InputGroup.module.scss";

interface InputGroupProps {
  labelText: string;
  inputType?: string;
  inputName: string;
  isTextArea: boolean;
}

const InputGroup: FC<InputGroupProps> = ({
  labelText,
  inputType,
  inputName,
  isTextArea,
}) => {
  return (
    <label className={styles.inputGroup}>
      {labelText}
      {isTextArea ? (
        <textarea name={inputName} className={styles.inputGroup__input}></textarea>
      ) : (
        <input
          type={inputType}
          name={inputName}
          className={styles.inputGroup__input}
        />
      )}
    </label>
  );
};

export default InputGroup;
