import { FC, InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  customInputClasses?: string;
  hint?: string;
  customLabelClasses?: string;
  error?: string;
}

const Input: FC<InputProps> = ({
  label,
  id,
  customInputClasses = "",
  hint,
  customLabelClasses = "",
  error,
  ...rest
}: InputProps) => {
  return (
    <>
      {label && (
        <label className={`${styles.label} ${customLabelClasses}`} htmlFor={id}>
          {label}
        </label>
      )}
      {hint && <p className={styles.hint}>{hint}</p>}
      {error && <p className={styles.error}>{error}</p>}
      <input
        id={id}
        className={`${styles.input} ${customInputClasses}`}
        {...rest}
      />
    </>
  );
};

export default Input;
