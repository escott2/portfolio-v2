import { FC, InputHTMLAttributes } from "react";
import styles from "./Textarea.module.scss";

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  id: string;
  customLabelClasses?: string;
  customTextareaClasses?: string;
}

const Textarea: FC<TextareaProps> = ({
  label,
  id,
  customLabelClasses = "",
  customTextareaClasses = "",
  ...rest
}) => {
  return (
    <>
      {label && (
        <label className={`${styles.label} ${customLabelClasses}`} htmlFor={id}>
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={`${styles.input} ${customTextareaClasses}`}
        {...rest}
      />
    </>
  );
};

export default Textarea;
