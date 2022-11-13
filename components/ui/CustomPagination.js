export default function CustomPagination({
  length,
  currentIndex,
  currentIndexSetter,
}) {
  var array = [];
  for (var i = 0; i < length; i += 1) {
    array.push(i);
  }
  return (
    <div className="grid grid-flow-col  w-fit gap-2 mx-auto">
      {array.map((arr) => (
        <div
          key={arr}
          onClick={() => currentIndexSetter(arr)}
          className="bg  w-fit "
        >
          {currentIndex === arr ? (
            <span className="grid py-3 my-auto ">
              <span className="grid w-11 bg-accentColor dark:bg-accentColorDark py-1 rounded-xl h-px "></span>
            </span>
          ) : (
            <span className="grid py-3 my-auto  cursor-pointer">
              <span className="grid py-1 bg-background2 dark:bg-background2Dark rounded h-px grid w-8"></span>
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
