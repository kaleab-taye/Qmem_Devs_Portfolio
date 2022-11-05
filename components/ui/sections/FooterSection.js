export default function FooterSection({ className }) {
  return (
    <div className="w-full border-t border-background2">
      <div
        className={`max-w-maxContentWid mx-auto grid my-5` + ' ' + className}
      >
        <div className="grid grid-flow-col gap-5 mr-auto text-textColor3 text-[13px]">
        <div className="font-Helvetica opacity-70 cursor-pointer font-medium hover:opacity-100 px-1">
        Telegram
          </div>
          <div className="opacity-70 cursor-pointer font-medium hover:opacity-100 px-1">
          Linkedin</div>
          <div className="opacity-70 cursor-pointer font-medium hover:opacity-100 px-1">
          Instagram</div>
        </div>
      </div>
    </div>
  );
}
