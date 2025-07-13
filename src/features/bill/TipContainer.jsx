import Tip from "../../components/Tip";

const tips = [5, 10, 15, 25, 50];

function TipContainer() {
  return (
    <div className="flex flex-col gap-4">
      <label className="uppercase text-sm font-medium text-[hsl(186,14%,43%)]">
        Select Tip %
      </label>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {tips.map((el) => (
          <Tip key={el} value={el} />
        ))}

        <Tip />
      </div>
    </div>
  );
}

export default TipContainer;
