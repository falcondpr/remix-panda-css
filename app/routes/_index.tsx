import type { MetaFunction } from "@remix-run/node";
import { css } from "styled-system/css";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div
      className={css({
        fontSize: "5xl",
        fontWeight: "semibold",
        backgroundColor: "rebeccapurple",
        height: "100dvh",
        display: "grid",
        placeItems: "center",
        color: "white",
      })}
    >
      Hello 🐼 CSS!
    </div>
  );
}
