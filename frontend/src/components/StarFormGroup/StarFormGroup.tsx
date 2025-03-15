import styles from "./StarFormGroup.module.scss";
import Star from "../Star/Star";
import { FC, useState } from "react";

const StarFormGroup: FC = () => {
  const [selectedStarValue, setSelectedStarValue] = useState<number>(0);
  const [hoveredStarValue, setHoveredStarValue] = useState<number | null>(null);

  const handleStarChange = (value: number) => {
    setSelectedStarValue(value);
  };

  const handleOnMouseEnter = (value: number) => {
    console.log(`Hovering over star ${value}`);
    setHoveredStarValue(value);
  };

  const handleOnMouseLeave = () => {
    console.log("Mouse left star");
    setHoveredStarValue(null);
  };

  return (
    <fieldset className={styles.starFormGroup}>
      <legend>Rating</legend>
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          starValue={value}
          selectedStarValue={selectedStarValue}
          size="1.5rem"
          name="userRating"
          className={styles.starFormGroup__star}
          onChange={() => handleStarChange(value)}
          hoveredStarValue={hoveredStarValue}
          onMouseEnter={() => handleOnMouseEnter(value)}
          onMouseLeave={handleOnMouseLeave}
        />
      ))}
    </fieldset>
  );
};

export default StarFormGroup;
