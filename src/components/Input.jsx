import { useDispatch, useSelector } from "react-redux";
import { setBill, setPeople } from "../features/bill/billSlice";

function Input({ labelText, iconLink }) {
  const dispatch = useDispatch();
  const { bill, numOfPeople, error } = useSelector((store) => store.bill);

  function handleChange(e) {
    const value = +e.target.value;
    if (labelText === "Bill") {
      dispatch(setBill(value));
    } else {
      dispatch(setPeople(value));
    }
  }

  const value = labelText === "Bill" ? bill : numOfPeople;

  return (
    <div className="flex flex-col">
      <label
        className="mb-2 uppercase text-sm font-medium text-[hsl(186,14%,43%)]"
        htmlFor={labelText}
      >
        {labelText}
      </label>

      <div className="relative">
        <img
          src={iconLink}
          alt=""
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
        />
        <input
          id={labelText}
          type="text"
          value={value}
          onChange={handleChange}
          className={`
            "
          w-full 
          p-3 
          pl-12 
          bg-[hsl(190,0%,95%)] 
          placeholder:text-[hsl(186,14%,43%)] 
          text-right 
          text-2xl 
          font-bold 
          rounded-md 
          focus:outline-none 
          focus:ring-2 
          focus:ring-[hsl(172,67%,45%)]
        "
            ${
              error
                ? "border-2 border-[hsl(0,100%,67%)] focus:ring-2 focus:ring-[hsl(0,100%,67%)]"
                : ""
            }
          `}
        />
      </div>

      {error && <p className="mt-1 text-xs text-[hsl(0,100%,67%)]">{error}</p>}
    </div>
  );
}

export default Input;
