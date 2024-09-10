import { ReactNode } from "react";

export const Title = ({ children }: { children: ReactNode }) => {
  return <h1 className="text-primary font-bold text-xl">{children}</h1>;
};
