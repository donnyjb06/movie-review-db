import { FC } from "react";
import { FaRegStar } from "react-icons/fa";

interface StarProps {
  starValue: number;
  selectedStarValue: number;
  size: string;
  className?: string;
  name?: string;
  onChange?: () => void;
  hoveredStarValue?: number | null;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const Star: FC<StarProps> = ({
  starValue,
  selectedStarValue,
  size,
  className,
  name,
  onChange,
  hoveredStarValue,
  onMouseEnter,
  onMouseLeave,
}) => {
  const isStarHighlighted =
    starValue <= (hoveredStarValue ?? selectedStarValue);
  const starColor = isStarHighlighted
    ? "var(--star-gold)"
    : "var(--surface-clr)";
  return name ?    
    (<label onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <input
        type="radio"
        name={name}
        value={starValue}
        style={{ display: "none"}} 
        onChange={onChange}
        checked={starValue === selectedStarValue}
      />
      <FaRegStar size={size} color={starColor} className={className} style={{transition: "0.3s ease-in-out"}}/>
    </label>) :
    (<FaRegStar size={size} color={starColor} className={className}/>)
  
};

export default Star;
