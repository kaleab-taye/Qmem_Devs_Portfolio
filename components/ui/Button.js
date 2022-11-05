export default function Button({
  placeholder,
  className,
  hover,
  color,
  background,
  ring,
}) {
  return (
    <div
      className={
        `ring ring-offset-0 ring-2 cursor-pointer font-medium text-sm m-auto rounded-full inline-flex py-2 px-8 bg-background1 duration-500` +
        ' ' +
        className +
        ' ' +
        hover +
        ' ' +
        color +
        ' ' +
        background+
        ' ' +
        ring
      }
    >
      <div className="m-auto grid">{placeholder}</div>
    </div>
  );
}

Button.defaultProps = {
  hover: 'hover:bg-accentColor',
  color: 'text-textColor1',
  ring: 'ring-accentColor'
};
