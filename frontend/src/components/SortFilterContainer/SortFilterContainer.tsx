import "./SortFilterContainer.scss";
import { FC } from "react";
import Container from "../Container/Container";
import LabeledButtonGroup from "../LabeledButtonGroup/LabeledButtonGroup";
import { TbArrowsSort } from "react-icons/tb";
import { IoFilter } from "react-icons/io5";
import SortOrderGroup from "../SortOrderGroup/SortOrderGroup";
import FilterGroup from "../FilterGroup/FilterGroup";


const sortOrders = [
  {type: "Movie Name", order: "a-z"},
  {type: "Movie Name", order: "z-a"},
  {type: "Rating", order: "low-high"},
  {type: "Rating", order: "high-low"},
]

const filterData = ["1", "2", "3", "4", "5"];

const SortFilterContainer: FC = () => {
  return (
    <div className="sort-filter-container">
      <Container>
        <div className="sort-filter-container__btn-groups">
          <LabeledButtonGroup gap="0.5rem" orientation="vertical">
            <p className="sort-filter-container__label">
              <TbArrowsSort color="var(--text-clr)" width={40} height={40} />
              Sort By
            </p>
            <SortOrderGroup sortOrderData={sortOrders}/>
          </LabeledButtonGroup>
          <LabeledButtonGroup gap="0.5rem" orientation="vertical">
            <p className="sort-filter-container__label">
              <IoFilter />
              Filter by Rating
            </p>
            <FilterGroup filterData={filterData}/>
          </LabeledButtonGroup>
        </div>
      </Container>
    </div>
  );
};

export default SortFilterContainer;
