import { FC } from "react";
import styles from "./Form.module.scss";
import { TailSpin } from "react-loader-spinner";
import { useQuery } from "../../helpers/hooks/useQuery";
import React from "react";
import { FetchFunction } from "../../helpers/types/fetchfunction";
import { ReviewFormData } from "../../helpers/types/ReviewFormData";


interface FormProps {
  children: React.ReactNode;
  submitBtnText: string;
  submitCallback: FetchFunction
}

const Form: FC<FormProps> = ({ children, submitBtnText, submitCallback }) => {
  const [isLoading, fetchResponse] = useQuery();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const formDataObj: ReviewFormData = {};
  
    formData.forEach((value, key) => {
      formDataObj[key] = value;
    })
  
    fetchResponse(submitCallback, formDataObj)
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {children}
      <button className={styles.form__submitBtn}>
        {submitBtnText}
        {isLoading ? <TailSpin width={15} height={15} color="#FFFFFF"/> : null}
      </button>
    </form>
  );
};

export default Form;
