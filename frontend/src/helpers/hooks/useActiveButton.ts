import { useState, MouseEvent as ReactMouseEvent } from "react";

export const useActiveButton = (
  onClick: (event: ReactMouseEvent<HTMLButtonElement>) => void
) => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleClick = (
    event: ReactMouseEvent<HTMLButtonElement>,
    isActiveCriteria: string
  ) => {
    setActiveButton(prevActiveButton => {
      if (prevActiveButton === isActiveCriteria) {
        return null
      }
      return isActiveCriteria
    });
    onClick(event);
  };

  return [activeButton, handleClick] as const;
};
