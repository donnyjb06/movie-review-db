import { FC } from "react"
import styles from "./Form.module.scss"

interface FormProps {
  children: React.ReactNode;
  submitBtnText: string;
}

const Form: FC<FormProps> = ( { children, submitBtnText } ) => {
  return(
    <form className={styles.form}>
      {children}
      <input type="submit" className={styles.form__submitBtn} value={submitBtnText}/>
    </form>
  )
}

export default Form;