import styles from "./BaseButton.module.scss";
import { ComponentProps } from "react";

interface BaseButtonProps extends ComponentProps<"button"> {
  children: React.ReactNode;
  customClasses?: string;
}

function BaseButton({
  children,
  customClasses = "",
  ...props
}: BaseButtonProps) {
  return (
    <button className={`${styles.buttonBase} ${customClasses}`} {...props}>
      {children}
    </button>
  );
}

export default BaseButton;
