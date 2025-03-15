import { useActiveButton } from "../../helpers/hooks/useActiveButton";
import RoundedButton from "../RoundedButton/RoundedButton";
import { FC } from "react";
import "./FilterGroup.scss";
import { useReviewsContext } from "../../helpers/hooks/useReviewContext";

interface FilterGroupProps {
  filterData: string[];
}

const FilterGroup: FC<FilterGroupProps> = ({ filterData }) => {
  const { handleFilterChange } = useReviewsContext();
  const [activeButton, handleClick] = useActiveButton(handleFilterChange);

  return (
    <div className="filter-group">
      {filterData.map((filter) => {
        return (
          <RoundedButton
            label={`${filter} Stars`}
            isActive={activeButton === filter}
            onClick={handleClick}
            dataSet={filter}
          />
        );
      })}
    </div>
  );
};

export default FilterGroup;
