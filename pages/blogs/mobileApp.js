import Image from 'next/image';
import BodyLayout from '../../components/ui/BodyLayout';
import PageHeading from '../../components/ui/PageHeading';
import serviceImg1 from '../../public/service-1.png';

export default function mobileApp() {
  return (
    <BodyLayout>
      <PageHeading heading="Mobile Apps" />
      <div className="text-textColor1 text-md grid gap-10 max-w-maxHeroWid mx-10 2xl:mx-auto my-10 grid grid-flow-row">
        <div className='grid grid-flow-row md:grid-flow-col gap-8 '>
          <div className="text-xl my-auto opacity-70 text-justify">
            Mobile applications are the keystone for many businesses in the
            digital age. Apps running on smart devices give customers greater
            access to company-related resources and gives companies the chance
            to acquire more business opportunities. Devices that rely on apps,
            like smartphones, have become ubiquitous across all industries and
            markets. By developing its own offering, your company can tap into
            this seemingly infinite market and expand to reach its long-term
            growth goals in a much shorter time frame.
          </div>
          <div className="grid m-auto">
            <Image alt="service image" src={serviceImg1} />
          </div>
        </div>
        <div>
          If your company is looking for a way to tap into the digital market
          for its internal operations or customer-facing services, mobile app
          development is the best way to do it. There are many different systems
          that apps can function on, and most require apps built with different
          languages and specifications. We have the skills to build apps that
          don’t have this problem. KitelyTech specializes in both multi-platform
          synchronization & standalone mobile app creation on iOS, Android, and
          Windows. By building multi-platform apps, your company’s app can exist
          in any and all of the existing smart-device ecosystems. You won’t be
          limited to a specific subsection of the market that has a specific
          device. Your company can reach anyone with any device, making the app
          one of the best ways to facilitate communication with the target
          audience.
        </div>
      </div>
    </BodyLayout>
  );
}
