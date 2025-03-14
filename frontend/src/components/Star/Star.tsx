import { FC } from "react";
import { FaRegStar } from "react-icons/fa";

interface StarProps {
  starValue: number;
  selectedStarValue: number;
  size: string;
  className: string;
}

const Star: FC<StarProps> = ({
  starValue,
  selectedStarValue,
  size,
  className,
}) => {
  const isStarHighlighted = starValue <= selectedStarValue;
  const starColor = isStarHighlighted ? "var(--star-color)" : "initial";
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
        color={starColor}
        className={className}
      />
    </label>
  );
};

export default Star;
