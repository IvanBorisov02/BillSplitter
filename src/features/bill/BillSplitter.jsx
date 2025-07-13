import Input from "../../components/Input";
import TipContainer from "./TipContainer";

import BILL_ICON from "../../assets/images/icon-dollar.svg";
import PEOPLE_ICON from "../../assets/images/icon-person.svg";

function BillSplitter() {
  return (
    <div className="flex flex-col gap-6">
      <Input labelText="Bill" iconLink={BILL_ICON} />

      <TipContainer />

      <Input labelText="Number of People" iconLink={PEOPLE_ICON} />
    </div>
  );
}

export default BillSplitter;
