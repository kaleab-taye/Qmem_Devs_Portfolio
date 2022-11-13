export default function PageHeading({ heading, subHeading }) {
  return (
    <div className="pb-28 lg:pb-44">
      <div className="w-full absolute left-0  border-y-2 py-7 lg:py-5 bg-background3 dark:bg-background3Dark border-background2 dark:border-background2Dark grid mx-auto ">
        <div className=" mx-8 lg:mx-16 grid grid-flow-row lg:grid-flow-col ">
          <div className="text-4xl font-bold text-textColor1 dark:text-textColor1Dark py-1 lg:my-10 opacity-90">
            {heading}
          </div>
          <div className="text-sm text-textColor1 dark:text-textColor1Dark opacity-80 lg:ml-auto">
            {subHeading}
          </div>
        </div>
      </div>
    </div>
  );
}
