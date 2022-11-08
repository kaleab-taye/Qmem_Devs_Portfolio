import BodyLayout from '../components/ui/BodyLayout';
import PageHeading from '../components/ui/PageHeading';
import ProgressDisplay from '../components/ui/ProgressDisplay';
import TimelineDisplay from '../components/ui/TimelineDisplay';

export default function resume() {
  return (
    <BodyLayout page='resume'>
      {/* current page desc section start*/}
      <PageHeading heading="Resume" subHeading="8 Years of Experience" />
      {/* current page desc section end*/}

      <div className="max-w-maxContentWid mx-10 2xl:mx-auto my-16 ">
        {/* timeline section start */}
        <div className="grid grid-flow-row sm:grid-flow-col mb-10">
          <TimelineDisplay
            heading="Experience"
            timelines={[
              {
                duration: '2008',
                place: 'University of Studies',
                position: 'UI Design',
                description:
                  'Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum.',
              },
              {
                duration: '2008',
                place: 'University of Studies',
                position: 'UI Design',
                description:
                  'Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum.',
              },
              {
                duration: '2008',
                place: 'University of Studies',
                position: 'UI Design',
                description:
                  'Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum.',
              },
            ]}
          />

          <TimelineDisplay
            heading="Education"
            timelines={[
              {
                duration: '2008',
                place: 'University of Studies',
                position: 'UI Design',
                description:
                  'Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum.',
              },
            ]}
          />
        </div>
        {/* timeline section end */}
        {/* skills section start */}
        <div className="grid grid-flow-col gap-8">
          <ProgressDisplay
            heading="Coding Proficiency"
            items={[
              { name: 'React', amount: '70%', id:'id123432' },
              { name: 'NEXT Js', amount: '80%', id:'id123432bg' },
            ]}
          />
          <ProgressDisplay
            heading="Coding Proficiency"
            items={[
              { name: 'HTML/CSS', amount: '100%', id:'id123gad432' },
              { name: 'Javascript', amount: '6%', id:'id123432kslfdg' },
            ]}
          />
        </div>
        {/* skills section end */}
      </div>
    </BodyLayout>
  );
}
