import { css } from "styled-system/css";

interface ILayout {
  children?: React.ReactNode;
}

export function Layout({ children }: ILayout) {
  return (
    <div
      className={css({
        height: "100dvh",
        backgroundColor: "blue.600",
        width: "100%",
      })}
    >
      {children}
    </div>
  );
}
