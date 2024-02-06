import { setFilter } from "components/redux/Reducer";
import { useDispatch } from "react-redux";

export const Filter = ({title}) => {

    const dispatch = useDispatch();

    const handleFilter = ({ target: {value} }) => {
        dispatch(setFilter(value));
    };

    return (
      <div>
        <h3>{title}</h3>
        <input
          name="filter"
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={handleFilter}
        />
      </div>
    );
}
