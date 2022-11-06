export default function FooterSection({ className }) {
  return (
    <div className="w-full border-t border-background2">
      <div
        className={
          ` mx-auto grid grid-flow-col my-5  text-textColor3 text-[13px]` +
          ' ' +
          className
        }
      >
        <div className="grid grid-flow-col gap-5 mr-auto my-auto">
          <div className="font-Helvetica opacity-70 cursor-pointer font-medium hover:opacity-100 px-1">
            Telegram
          </div>
          <div className="opacity-70 cursor-pointer font-medium hover:opacity-100 px-1">
            Linkedin
          </div>
          <div className="opacity-70 cursor-pointer font-medium hover:opacity-100 px-1">
            Instagram
          </div>
        </div>
        <div className="ml-auto my-auto text-textColor1 opacity-80">© 2022 All rights reserved.</div>
      </div>
    </div>
  );
}
