import styles from "./Link.module.scss";

interface LinkProps {
  children: React.ReactNode;
  href: string;
  customClasses?: string;
  newWindow?: boolean;
}

function Link({
  children,
  href,
  customClasses = "",
  newWindow = false,
  ...props
}: LinkProps) {
  return (
    <a
      href={href}
      className={`${styles.link} ${customClasses}`}
      target={newWindow ? "_blank" : "_self"}
      {...props}
    >
      {children}
    </a>
  );
}

export default Link;
