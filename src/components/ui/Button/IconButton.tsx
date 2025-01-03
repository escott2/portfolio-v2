import { default as BaseButton } from "./BaseButton";
import styles from "./IconButton.module.scss";
import { ComponentProps } from "react";

interface IconButtonProps extends ComponentProps<"button"> {
  children: React.ReactNode;
  customClasses?: string;
}

function IconButton({
  children,
  customClasses = "",
  ...props
}: IconButtonProps) {
  return (
    <BaseButton
      customClasses={`${styles.iconButton} + ${customClasses}`}
      {...props}
    >
      {children}
    </BaseButton>
  );
}

export default IconButton;
