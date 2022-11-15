import PartialUnderline from '../PartialUnderline';
import TimelineElement from '../TimelineElement';

export default function TimelineDisplay({ timelines, heading }) {
  return (
    <div className="grid gap-5 text-textColor1 dark:text-textColor1Dark mb-auto">
      <PartialUnderline text={heading} />
      <div className="grid">
        {timelines.map((timeline, index, row) => (
          <TimelineElement
            key={Math.random()}
            duration={timeline.duration}
            place={timeline.place}
            position={timeline.position}
            description={timeline.description}
            className={
              index + 1 !== row.length && index !== 0
                ? 'border-b pt-8'
                : index + 1 === row.length && row.length > 1
                ? 'pt-8'
                : index === 0 && row.length > 1
                ? 'border-b'
                : null
            }
          />
        ))}
      </div>
    </div>
  );
}
