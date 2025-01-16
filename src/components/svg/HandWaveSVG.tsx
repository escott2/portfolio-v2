import { SVGProps } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../store";

function HandWaveSVG(props: SVGProps<SVGSVGElement>) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.03 3.95L2.5 7.5C-0.83 10.81 -0.83 16.19 2.5 19.5C5.83 22.81 11.19 22.83 14.5 19.5L20.5 13.5C21.5 12.53 21.5 10.94 20.5 9.96C20.4 9.84 20.27 9.73 20.13 9.64L20.5 9.25C21.5 8.28 21.5 6.69 20.5 5.71C20.36 5.55 20.17 5.41 20 5.3C20.38 4.38 20.21 3.28 19.46 2.53C18.59 1.66 17.24 1.57 16.26 2.25C16.0565 1.93658 15.7858 1.6724 15.4675 1.47663C15.1492 1.28087 14.7913 1.15844 14.4198 1.11822C14.0483 1.07801 13.6725 1.12102 13.3196 1.24414C12.9668 1.36725 12.6458 1.56738 12.38 1.83L9.87 4.34C9.78 4.2 9.67 4.07 9.55 3.95C9.07808 3.49301 8.44692 3.2375 7.79 3.2375C7.13308 3.2375 6.50192 3.49301 6.03 3.95ZM7.44 5.37C7.64 5.17 7.95 5.17 8.15 5.37C8.35 5.57 8.35 5.88 8.15 6.08L4.97 9.26C5.5318 9.8225 5.84736 10.585 5.84736 11.38C5.84736 12.175 5.5318 12.9375 4.97 13.5L6.38 14.91C7.06776 14.2223 7.54004 13.349 7.73897 12.3969C7.9379 11.4449 7.85485 10.4555 7.5 9.55L13.8 3.25C14 3.05 14.31 3.05 14.5 3.25C14.69 3.45 14.71 3.76 14.5 3.96L9.91 8.56L11.32 9.97L17.33 3.96C17.53 3.76 17.84 3.76 18.04 3.96C18.24 4.16 18.24 4.47 18.04 4.67L12.03 10.68L13.44 12.09L18.39 7.14C18.59 6.94 18.9 6.94 19.1 7.14C19.3 7.34 19.3 7.65 19.1 7.85L13.44 13.5L14.85 14.92L18.39 11.38C18.59 11.18 18.9 11.18 19.1 11.38C19.3 11.58 19.3 11.89 19.1 12.09L13.1 18.1C10.56 20.64 6.45 20.64 3.91 18.1C1.37 15.56 1.37 11.45 3.91 8.91L7.44 5.37ZM0 6C0 2.69 2.69 0 6 0V1.5C3.5 1.5 1.5 3.5 1.5 6H0Z"
        fill={isDarkMode ? "#ffffff" : "#000000"}
      />
    </svg>
  );
}
export default HandWaveSVG;