import { ReactNode } from "react";

export const Paragraphe = ({ children }: { children: ReactNode }) => {
  return <p className="text-primary text-sm">{children}</p>;
};
