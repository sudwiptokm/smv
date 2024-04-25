import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full items-center justify-center flex">{children}</div>
  );
};

export default AuthLayout;
