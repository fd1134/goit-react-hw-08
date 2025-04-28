import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const handleFilterChange = (filter) => dispatch(changeFilter(filter));
  const searchFieldId = useId();

  return (
    <>
      <div className={css.searchContainer}>
        <p>Find contacts by name</p>
        <input
          type="text"
          name="search"
          id={searchFieldId}
          onChange={(e) => handleFilterChange(e.target.value)}
        />
      </div>
    </>
  );
};
export default SearchBox;
