import { FC, MouseEvent as ReactMouseEvent } from "react";

interface RoundedButtonProps {
  label: string;
  isActive: boolean;
  onClick: (event: ReactMouseEvent<HTMLButtonElement>, order: string) => void;
  dataSet: string | number;
}

const RoundedButton: FC<RoundedButtonProps> = ( {label, onClick, isActive, dataSet} ) => {
  return(
    <button onClick={(event: ReactMouseEvent<HTMLButtonElement>) => onClick(event, dataSet as string)} data-filter-sort-value={dataSet} style={{
      backgroundColor: isActive ? "var(--primary-clr)" : "var(--surface-clr)",
      padding: isActive ?  "7.5px 17.5px" : "5px 15px",
      color: "white",
      borderRadius: "9999px",
      border: "none",
      fontSize: "0.9rem",
      fontWeight: isActive ? "700" : "500",
      transition: "0.3s var(--btn-easing)",
      cursor: "pointer"
    }}>{label}</button>
  )
}

export default RoundedButton;