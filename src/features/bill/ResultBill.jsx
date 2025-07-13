import { useDispatch, useSelector } from "react-redux";
import { reset } from "./billSlice";

function ResultBill() {
  const { bill, tip, numOfPeople } = useSelector((store) => store.bill);
  const dispatch = useDispatch();

  const totalTipAmount = (bill * tip) / 100;
  const tipAmountPerPerson = numOfPeople ? totalTipAmount / numOfPeople : 0;

  const totalAmount = bill + totalTipAmount;
  const totalAmountPerPerson = numOfPeople ? totalAmount / numOfPeople : 0;

  function handleReset(e) {
    e.preventDefault();

    dispatch(reset());
  }

  return (
    <div className="flex flex-col justify-between h-full text-white">
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm uppercase">Tip Amount</p>
            <p className="text-xs text-[hsl(186,14%,43%)]">/ person</p>
          </div>
          <p className="text-4xl font-bold text-[hsl(172,67%,45%)]">
            {tipAmountPerPerson.toFixed(2)}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm uppercase">Total</p>
            <p className="text-xs text-[hsl(186,14%,43%)]">/ person</p>
          </div>
          <p className="text-4xl font-bold text-[hsl(172,67%,45%)]">
            {totalAmountPerPerson.toFixed(2)}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={handleReset}
        className="
          mt-8 py-4 w-full rounded-md 
          bg-[hsl(172,67%,45%)] uppercase font-bold tracking-wider 
          hover:bg-[hsl(172,67%,60%)] transition 
          text-[hsl(183,100%,15%)]
        "
      >
        Reset
      </button>
    </div>
  );
}

export default ResultBill;
