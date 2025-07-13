import BillSplitter from "../features/bill/BillSplitter";
import ResultBill from "../features/bill/ResultBill";
import Logo from "./Logo";
import "../index.css";

function App() {
  return (
    <div className="w-full max-w-[920px] p-6">
      <div className="text-center mb-8">
        <Logo />
      </div>

      <div
        className="
          bg-white 
          rounded-[15px] 
          p-8 
          shadow-lg 
          flex flex-col gap-8 
          md:flex-row
        "
      >
        <div className="flex-1">
          <BillSplitter />
        </div>

        <div
          className="
            flex-1 
            bg-[hsl(183,100%,15%)] 
            rounded-[10px] 
            p-8 
            flex flex-col justify-between
          "
        >
          <ResultBill />
        </div>
      </div>
    </div>
  );
}

export default App;
