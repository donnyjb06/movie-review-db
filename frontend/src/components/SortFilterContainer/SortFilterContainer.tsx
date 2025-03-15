import "./SortFilterContainer.scss";
import { FC } from "react";
import Container from "../Container/Container";
import LabeledButtonGroup from "../LabeledButtonGroup/LabeledButtonGroup";
import { TbArrowsSort } from "react-icons/tb";
import { IoFilter } from "react-icons/io5";

const SortFilterContainer = () => {
  return (
    <div className="sort-filter-container">
      <Container>
        <div className="sort-filter-container__btn-groups">
          <LabeledButtonGroup gap="0.5rem" orientation="vertical">
            <p className="sort-filter-container__label">
              <TbArrowsSort color="var(--text-clr)" width={40} height={40}/>
              Sort By
            </p>
          </LabeledButtonGroup>
          <LabeledButtonGroup gap="0.5rem" orientation="vertical">
            <p className="sort-filter-container__label">
              <IoFilter />
              Filter by Rating
            </p>
          </LabeledButtonGroup>
        </div>
      </Container>
    </div>
  );
};

export default SortFilterContainer;
