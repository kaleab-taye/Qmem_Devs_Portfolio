import { faDesktop, faMobilePhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import PartialUnderline from '../PartialUnderline';
import WhatWeDoCard from '../WhatWeDoCard';

export default function WhatWeDoSection() {
  return (
    <div className="m-auto grid grid-flow-row gap-8 text-textColor1 my-10">
      <div className="">
        <PartialUnderline text="What We Do" />
      </div>
      <div className="grid grid-flow-row sm:grid-flow-col ">
        <div className="grid grid-flow-row mb-auto">
          <WhatWeDoCard
            title="Frontend Web App"
            description="Our powerful team of frontend developers aims to craft solutions that add value to your business. Our services include Frontend Architecture & Design, User Interface Design & Development, Custom Frontend Development and Maintenance & Support."
          >
            <FontAwesomeIcon className="" icon={faDesktop} />
          </WhatWeDoCard>
          <WhatWeDoCard
            title="Mobile Application"
            description="If your company is looking for a way to tap into the digital market for its internal operations or customer-facing services, mobile app development is the best way to do it. we have specialized on creating both
                  multi-platform synchronization & standalone mobile app creation."
          >
            <FontAwesomeIcon className="" icon={faMobilePhone} />
          </WhatWeDoCard>
          <WhatWeDoCard
            title="Backend Api"
            description="Designing and developing fully functional, well documented and secure api for  API . Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex."
          >
            <FontAwesomeIcon className="" icon={faMobilePhone} />
          </WhatWeDoCard>
        </div>
        <div className="grid grid-flow-row mb-auto">
          <WhatWeDoCard
            title="SEO Optimazation"
            description="Our Professional SEO services ensure that both new and returning customers can easily locate your site when looking for a product or service.We optimize your SEO in an effective way to increase your online presence and getting the attention of potential customers without increasing your marketing budget and resources. "
          >
            <FontAwesomeIcon className="" icon={faMobilePhone} />
          </WhatWeDoCard>
          <WhatWeDoCard
            title="Website"
            description="We Design, Build and Launch your website to support your business growth by providing marketing, advertising, customer education, company branding, and sales channels conveniently rolled into one system."
          >
            <FontAwesomeIcon className="" icon={faMobilePhone} />
          </WhatWeDoCard>
        </div>
      </div>
    </div>
  );
}
