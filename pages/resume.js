import BodyLayout from '../components/ui/BodyLayout';

export default function resume() {
  return (
    <BodyLayout>
      {/* current page desc section */}
      <div className="border-y-2 py-7 bg-background3 border-background2 w-screen grid mx-auto ">
        <div className=" mx-8 lg:mx-16  ">
          <div className="text-4xl font-bold text-textColor1 py-1">Resume</div>
          <div className="text-sm text-textColor1 opacity-80">
            8 Years of Experience
          </div>
        </div>
      </div>
      <div className="max-w-maxContentWid mx-10 2xl:mx-auto w-full bg-red-500">
        rest of the pageg
      </div>
    </BodyLayout>
  );
}
