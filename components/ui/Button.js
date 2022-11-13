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
        `ring ring-offset-0 ring-2 cursor-pointer font-medium text-sm m-auto rounded-full inline-flex py-2 px-8 bg-background1 dark:bg-background1Dark duration-500` +
        ' ' +
        className +
        ' ' +
        hover +
        ' ' +
        color +
        ' ' +
        background +
        ' ' +
        ring
      }
    >
      <div className="m-auto grid">{placeholder}</div>
    </div>
  );
}

Button.defaultProps = {
  hover: 'hover:bg-accentColor dark:hover:bg-accentColorDark',
  color: 'text-textColor1 dark:text-textColor1Dark',
  ring: 'ring-accentColor dark:ring-accentColorDark',
};
