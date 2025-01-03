import { default as BaseButton } from "./BaseButton";
import { ComponentProps } from "react";

interface PrimaryButtonProps extends ComponentProps<"button"> {
  children: React.ReactNode;
  customClasses?: string;
}

function PrimaryButton({
  children,
  customClasses = "",
  ...props
}: PrimaryButtonProps) {
  return (
    <BaseButton customClasses={customClasses} {...props}>
      {children}
    </BaseButton>
  );
}

export default PrimaryButton;
