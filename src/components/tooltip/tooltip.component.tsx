import { ReactNode } from "react";
import "./style.scss";

interface TooltipProps {
  title: string;
  children: string | ReactNode;
  buttons: ReactNode;
}

export const Tooltip = ({ title, children, buttons }: TooltipProps) => {
  return (
    <div className="tooltip">
      <div className="tooltip__header">{title}</div>
      <div className="tooltip__body">{children}</div>
      <div className="tooltip__footer">{buttons}</div>
    </div>
  );
};
