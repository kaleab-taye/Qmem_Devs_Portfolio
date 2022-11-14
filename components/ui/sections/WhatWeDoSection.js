import { faDesktop, faMobilePhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import PartialUnderline from '../PartialUnderline';
import WhatWeDoCard from '../WhatWeDoCard';
import seoIcon from '../../../public/icons/SEO-rafiki.svg';
import appIcon from '../../../public/icons/App-icon.svg';
import webAppIcon from '../../../public/icons/webAppIcon.svg';
import backendIcon from '../../../public/icons/backendIcon.svg';
import websiteIcon from '../../../public/icons/websiteIcon.svg';
import { HomeIcon } from '../../svg/api-icon.js';
import DeleteIcon from '@mui/icons-material/Delete';

export default function WhatWeDoSection() {
  return (
    <div className="m-auto grid grid-flow-row gap-8 text-textColor1 dark:text-textColor1Dark my-10">
      <div className="">
        <PartialUnderline text="What We Do" />
      </div>
      <div className="grid grid-flow-row sm:grid-flow-col ">
        <div className="grid grid-flow-row mb-auto gap-4">
          <WhatWeDoCard
            title="Frontend Web App"
            description="Our powerful team of frontend developers aims to craft solutions that add value to your business. Our services include Frontend Architecture & Design, User Interface Design & Development, Custom Frontend Development and Maintenance & Support."
          >
            <Image alt="web app" src={webAppIcon} />
          </WhatWeDoCard>
          <WhatWeDoCard
            title="Mobile Application"
            description="If your company is looking for a way to tap into the digital market for its internal operations or customer-facing services, mobile app development is the best way to do it. we have specialized on creating both
                  multi-platform synchronization & standalone mobile app creation."
          >
            <Image className="" src={appIcon} alt="seo icon" />
          </WhatWeDoCard>
          <WhatWeDoCard
            title="Backend Api"
            description="If you want to strengthen your application landscape with higher-quality backend solutions, We provide a complete range of backend development services, from building custom backend layers to enabling cloud integration to help enterprises lead in the digital age."
          >
            <Image className="" src={backendIcon} alt="seo icon" />
          </WhatWeDoCard>
        </div>
        <div className="grid grid-flow-row mb-auto gap-4">
          <WhatWeDoCard
            title="SEO Optimazation"
            description="Our Professional SEO services ensure that both new and returning customers can easily locate your site when looking for a product or service.We optimize your SEO in an effective way to increase your online presence and getting the attention of potential customers without increasing your marketing budget and resources. "
          >
            <Image className="" src={seoIcon} alt="seo icon" />
          </WhatWeDoCard>
          <WhatWeDoCard
            title="Website"
            description="We Design, Build and Launch your website to support your business growth by providing marketing, advertising, customer education, company branding, and sales channels conveniently rolled into one system."
          >
            <Image className="" src={websiteIcon} alt="seo icon" />
          </WhatWeDoCard>
        </div>
      </div>
    </div>
  );
}
