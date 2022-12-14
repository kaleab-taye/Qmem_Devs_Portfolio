export default function PartialUnderline({ text, className }) {
  var underlineLen = text.length - (text.length % 4);
  underlineLen = underlineLen / 4;
  return (
    <div className={className}>
      <span className="border-b-2 border-accentColor dark:border-accentColorDark pb-1">
        {text.substring(0, underlineLen)}
      </span>
      <span className="border-b-2 border-background2 dark:border-background2Dark pb-1">{text.substring(underlineLen)}</span>
    </div>
  );
}
PartialUnderline.defaultProps={
  className :'my-auto mr-auto text-xl font-extrabold text-textColor1 dark:text-textColor1Dark'
}
