import { useState } from "react";

import { css } from "styled-system/css";
import { FormField } from "~/components/form-field";
import { Layout } from "~/components/layout";

export default function Login() {
  const [action, setAction] = useState("login");
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setFormData((form) => ({
      ...form,
      [field]: event.target.value,
    }));
  };

  return (
    <Layout>
      <div
        className={css({
          height: "full",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "4 0",
        })}
      >
        <button
          className={css({
            fontSize: "20px",
            color: "white",
            position: "absolute",
            top: "10",
            cursor: "pointer",
            right: "10",
          })}
          onClick={() =>
            setAction(action === "login" ? "register" : "login")
          }
        >
          {action === "login" ? "Sign Up" : "Sign In"}
        </button>

        <h2
          className={css({
            fontSize: "5xl",
            fontWeight: "font-bold",
            color: "yellow.300",
          })}
        >
          Welcome to Kudos!
        </h2>
        <p
          className={css({
            fontWeight: "semibold",
            color: "slate.300",
          })}
        >
          {action === "login"
            ? "Log In To Give Some Praise!"
            : "Sign up To Get Started!"}
        </p>

        <form
          action=""
          className={css({
            width: "xl",
            bgColor: "gray.200",
            padding: "6",
            rounded: "xl",
            marginTop: "5",
            spaceY: "3",
          })}
        >
          {action !== "login" ? (
            <div
              className={css({
                spaceY: "3",
                order: "-1",
              })}
            >
              <FormField
                htmlFor="firstName"
                label="First Name"
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange(e, "firstName")}
              />
              <FormField
                htmlFor="lastName"
                label="Last Name"
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange(e, "lastName")}
              />
            </div>
          ) : null}

          <FormField
            htmlFor="email"
            label="Email"
            type="text"
            value={formData.email}
            onChange={(e) => handleInputChange(e, "email")}
          />
          <FormField
            htmlFor="password"
            label="Password"
            type="text"
            value={formData.password}
            onChange={(e) => handleInputChange(e, "password")}
          />

          <div>
            <button
              type="submit"
              name="_action"
              value={action}
              className={css({
                rounded: "xl",
                bgColor: "yellow.400",
                paddingX: "3",
                paddingY: "2",
                cursor: "pointer",
                width: "full",
                color: "blue.600",
                fontWeight: "semibold",
                transitionDuration: "300ms",
                transitionTimingFunction: "ease-in-out",
                _hover: {
                  bgColor: "yellow.500",
                  transform: "translateY(-2px)",
                },
              })}
            >
              {action === "login" ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
