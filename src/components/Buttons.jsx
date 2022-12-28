import { useDispatch } from "react-redux";
import { clear , filter } from "../reducers";
function Buttons () {
    const dispatch = useDispatch();
    return (
        <section className="flex justify-between">
          <button className=" text-white bg-red-500" onClick={
            (e) => {
                dispatch(clear())
            }
          } >Clear all</button>

<select  id="filter" onChange={(e) => {
    console.log(e.target.value);
    dispatch(filter(e.target.value));
}}>
  <option value="showall">Show all</option>
  <option value="completed">Completed</option>
  <option value="active">Active</option>
</select>
        </section>
    );
}

export default Buttons;