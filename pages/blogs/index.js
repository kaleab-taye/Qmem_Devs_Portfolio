import BodyLayout from '../../components/ui/BodyLayout';
import PageHeading from '../../components/ui/PageHeading';

export default function blogs() {
  return (
    <BodyLayout page='blogs'>
      <PageHeading heading="Blogs" subHeading="Get in Touch" />
      <div className="max-w-maxContentWid mx-10 2xl:mx-auto my-10  grid grid-flow-row">
        {' '}
        <div className='text-xl mx-auto font-bold text-textColor1'>
        No blog found !
        </div>
      </div>
    </BodyLayout>
  );
}
