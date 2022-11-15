export default function FooterSection({ className }) {
  return (
    <div className="w-full text-[10px] md:text-[13px] mt-auto h-[55px] border-t border-background2 dark:border-background2Dark">
      <div
        className={
          `  grid grid-flow-col my-5 lg:mx-10 mx-2  text-textColor1 dark:text-textColor1Dark ` +
          ' ' +
          className
        }
      >
        <div className="grid grid-flow-col gap-px lg:gap-5 mr-auto my-auto">
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
        <div className="ml-auto my-auto text-textColor1 dark:text-textColor1Dark opacity-80">
          © 2022 All rights reserved.
        </div>
      </div>
    </div>
  );
}
