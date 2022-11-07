import PartialUnderline from './PartialUnderline';
import ProgressItem from './ProgressItem';

export default function ProgressDisplay({ heading, items }) {
  return (
    <div className="grid gap-10">
      <div className="">
        <PartialUnderline text={heading} />
      </div>
      <div className="grid grid-flow-row gap-4">
        {items.map((item) => (
          <ProgressItem
            key={item.key}
            name={item.name}
            amount={item.amount}
          />
        ))}
      </div>
    </div>
  );
}
