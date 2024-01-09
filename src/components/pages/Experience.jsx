import ExperienceItem from "../ExperienceItem.jsx";

const Experience = () => {
  const experiences = [
    [
      'LogYard', 
      'LogYard is a logging visualization tool that uses relevant contexts attached to individual logs to properly monitor a user\'s application. These logs can then be graphically visualized based on these contexts or time',
      ['ReactJS', 'NodeJS', 'Express', 'MongoDB'],
      ['/LogYardDashboard.jpeg', '/LogYardVisualizer.gif']
    ]
  ];

  const openSourceProducts = [
    [
      'PassPro', 
      'PassPro is a password protection product.',
      ['Svelte', 'NodeJS', 'Express', 'PostgreSQL'],
      ['/PassProDashboard.jpeg', '/PassProVisualizer.gif']
    ]
  ];

  return (
    <div className="text-text">
      <div>
        <p className="text-4xl p-4">Experience</p>
        <div className="px-6 py-2 mx-6 border-2 border-secondary rounded-lg">
          {experiences.map(experience => {
            return (
              <ExperienceItem key={experience[0]} title={experience[0]} description={experience[1]} tools={experience[2]} images={experience[3]}/>
            )
          })}
        </div>
      </div>
      <div>
        <p className="text-4xl p-4">Open Source Products</p>
        <div className="px-6 py-2 mx-6 border-2 border-secondary rounded-lg">
          {openSourceProducts.map(experience => {
            return (
              <ExperienceItem key={experience[0]} title={experience[0]} description={experience[1]} tools={experience[2]} images={experience[3]}/>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
