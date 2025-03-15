import { FC } from "react";

interface LabeledButtonGroupProps {
  children: React.ReactNode;
  gap: string;
  orientation: "horizontal" | "vertical";
}

const getFlexDirection = (orientation: "horizontal" | "vertical") => {
  if (orientation === "horizontal") {
    return "row";
  } else if (orientation === "vertical") {
    return "column";
  }
}

const LabeledButtonGroup: FC<LabeledButtonGroupProps> = ( { children, gap, orientation } ) => {
  return(
    <div style={{display: "flex", gap: gap, flexDirection: getFlexDirection(orientation)}}>
      {children}
    </div>
  )
}

export default LabeledButtonGroup