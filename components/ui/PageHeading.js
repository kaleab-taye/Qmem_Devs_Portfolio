export default function PageHeading({ heading, subHeading }) {
  return (
    <div className="pb-32 lg:pb-40">
    <div className="w-full absolute left-0  border-y-2 py-7 lg:py-5 bg-background3 border-background2 grid mx-auto ">
      <div className=" mx-8 lg:mx-16 grid grid-flow-row lg:grid-flow-col ">
        <div className="text-4xl font-bold text-textColor1 py-1 lg:my-10 opacity-90">
          {heading}
        </div>
        <div className="text-sm text-textColor1 opacity-80 lg:ml-auto">
          {subHeading}
        </div>
      </div>
    </div>
    </div>
  );
}
