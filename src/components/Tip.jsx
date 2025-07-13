import { useDispatch, useSelector } from "react-redux";
import { setTip } from "../features/bill/billSlice";

function Tip({ value }) {
  const dispatch = useDispatch();
  const { tip } = useSelector((store) => store.bill);

  const handleClick = () => {
    dispatch(setTip(value));
  };

  const handleChange = (e) => {
    dispatch(setTip(+e.target.value));
  };

  if (value !== undefined) {
    const isActive = tip === value;
    return (
      <button
        type="button"
        onClick={handleClick}
        className={`
          py-3 text-xl font-bold rounded-md text-white transition
          ${
            isActive
              ? "bg-[hsl(172,67%,45%)]"
              : "bg-[hsl(183,100%,15%)] hover:bg-[hsl(172,67%,45%)]"
          }
        `}
      >
        {value}%
      </button>
    );
  }

  return (
    <input
      type="number"
      placeholder="Custom"
      value={tip}
      onChange={handleChange}
      className="
        w-full p-3 text-right text-2xl font-bold rounded-md
        bg-[hsl(190,0%,95%)] placeholder:text-[hsl(186,14%,43%)]
        focus:outline-none focus:ring-2 focus:ring-[hsl(172,67%,45%)]
      "
    />
  );
}

export default Tip;
