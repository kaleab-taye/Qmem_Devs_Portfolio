export default function TimelineElement({
  duration,
  place,
  position,
  description,
  className,
}) {
  return (
    <div className={"border-l border-background2  p-4 m-4 grid my-auto "+' '+className}>
      {/* date and area start */}
      <div className="grid grid-flow-col m-auto gap-2 m-auto absolute -ml-10 -mt-3 ">
        <div className="rounded-full px-3 py-px  m-auto border-2 inline-flex border-accentColor bg-background1 text-[13px] font-semibold opacity-90">
          {duration}
        </div>
        <div className="m-auto text-sm opacity-50">{place}</div>
      </div>
      {/* date and area start */}
      <div className="pt-6 grid grid-flow-row gap-2 ">
        <div className="font-bold">{position}</div>
        <div className="text-sm opacity-90 leading-6 text-[12.88px] font-medium">
          {description}
        </div>
      </div>
    </div>
  );
}
