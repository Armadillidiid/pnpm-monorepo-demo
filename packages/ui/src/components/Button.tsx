import * as React from "react";

type ButtonProps = React.ComponentProps<"button"> & {
  children: React.ReactNode;
};

export const Button = ({ children, ...props }: ButtonProps) => {
  return <button {...props}>{children}</button>;
};
