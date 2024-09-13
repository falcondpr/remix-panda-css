import { useEffect, useState } from "react";
import { css } from "styled-system/css";

export interface FormFieldProps {
  htmlFor: string;
  label: string;
  type?: string;
  // eslint-disable-next-line
  value: any;
  // eslint-disable-next-line
  onChange: (...args: any) => any;
  error?: string;
}

export function FormField({
  htmlFor,
  label,
  type = "text",
  value,
  onChange,
  error = "",
}: FormFieldProps) {
  const [errorText, setErrorText] = useState<string>(error);

  useEffect(() => {
    setErrorText(error);
  }, [error]);

  return (
    <div>
      <label
        htmlFor={htmlFor}
        className={css({
          color: "blue.600",
          fontWeight: "semibold",
        })}
      >
        {label}
      </label>
      <input
        type={type}
        id={htmlFor}
        name={htmlFor}
        value={value}
        className={css({
          width: "full",
          paddingY: "2",
          paddingX: "3",
          rounded: "xl",
          marginY: "1",
          backgroundColor: "white",
        })}
        onChange={(e) => {
          onChange(e);
          setErrorText("");
        }}
      />

      <div>
        <p
          className={css({
            fontSize: "sm",
            fontWeight: "semibold",
            textAlign: "center",
            lineHeight: "20px",
            color: "red",
            width: "full",
          })}
        >
          {errorText}
        </p>
      </div>
    </div>
  );
}
