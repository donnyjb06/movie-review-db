import { FC } from "react";
import RoundedButton from "../RoundedButton/RoundedButton";
import { useActiveButton } from "../../helpers/hooks/useActiveButton";
import { useReviewsContext } from "../../helpers/hooks/useReviewContext";
import "./SortOrderGroup.scss"

interface SortOrderGroupProps {
  sortOrderData: { type: string; order: string }[];
}

const SortOrderGroup: FC<SortOrderGroupProps> = ({ sortOrderData }) => {
  const { handleSortOrderChange } = useReviewsContext();
  const [activeButton, handleClick] = useActiveButton(handleSortOrderChange)

  return (
    <div className="sort-order-group">
      {sortOrderData.map((sortOrder) => {
        return (
          <RoundedButton
            key={sortOrder.order}
            label={`${sortOrder.type} (${sortOrder.order})`}
            isActive={activeButton === sortOrder.order}
            onClick={handleClick}
            dataSet={sortOrder.order}
          />
        );
      })}
    </div>
  );
};

export default SortOrderGroup;
