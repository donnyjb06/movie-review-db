import { FC } from "react";
import { FaRegStar } from "react-icons/fa";

interface StarProps {
  starValue: number;
  selectedStarValue: number;
  size: string;
}

const Star: FC<StarProps> = ({ starValue, selectedStarValue, size }) => {
  const isStarHighlighted = starValue <= selectedStarValue;
  return (
    <label>
      <input
        type="radio"
        name="star"
        value={starValue}
        style={{ display: "none" }}
      />
      <FaRegStar
        size={size}
        color={isStarHighlighted ? "var(--star-gold)" : "var(--surface-clr)"}
      />
    </label>
  );
};

export default Star;
