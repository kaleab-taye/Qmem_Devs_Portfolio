import { useEffect } from 'react';

export default function ProgressItem({ name, amount,  }) {
  
  return (
    <div className="grid gap-0.5">
      <div className="grid grid-flow-col text-[13px]  text-textColor1 dark:text-textColor1Dark">
        <div className="mr-auto font-bold ">{name}</div>
        <div className="ml-auto opacity-50">{amount}</div>
      </div>
      <div className="grid grid-flow-col rounded border-2 p-px border-background2 dark:border-background2Dark">
        <div
          style={{ width: `${amount}` }}
          className=" border-b-4 border-accentColor dark:border-accentColorDark "
        ></div>
      </div>
    </div>
  );
}
