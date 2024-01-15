import ExperienceItem from "../ExperienceItem.jsx";

const Experience = () => {
  const experiences = [
    [
      'LogYard', 
      'LogYard is a lightweight and robust logging visualization tool that was designed with other developers in mind. With custom, context-bound logs, users of our application can know where their logs are coming from - whether that be a specific Kubernetes pod or cluster, or more simply, which directory it originated in. These logs can then be sorted, filtered, grouped and visualized using real-time graphical interfaces based on individual contexts or time.',
      [
        'JavaScript', 'TypeScript', 'ReactJS', 'React Router', 'Redux', 'NodeJS', 'ExpressJS', 'NoSQL Database', 'MongoDB', 'Vitest', 'Supertest', 'Cypress', 'bcrypt', 'C3.js', 'HTML5', 'CSS', 'TailwindCSS', 'Vite', 'Docker'
      ],
      ['/LogYard1.png', '/LogYard2.png'],
      ['https://www.logyard.io']
    ]
  ];

  const openSourceProducts = [
    [
      'PassPro', 
      'PassPro is a password and credentials management application that uses secure encryption techniques to safely store user\'s private account data in the cloud, making our users\'s digital lives easier to manage. Built with the latest runtime environment, Bun.io, and SvelteKit for high frontend performance, PassPro offers a seamless and highly responsive user experience.',
      [
        'JavaScript', 'TypeScript', 'Svelte', 'SvelteKit', 'cryptr', 'bcrypt', 'SQL', 'PostgreSQL', 'HTML5', 'CSS', 'TailwindCSS', 'Bun.io'
      ],
      ['/PassPro1.png', '/PassPro2.png','/PassPro3.png'],
      ['https://www.passpro.io']
    ],
    [
      'JobJuggler',
      'JobJuggler is a job application manager to stay organized in today\'s modern search process. By using JobJuggler in your job search you can be sure to stay on top of individual positions and never miss the chance to be a top applicant again.',
      [
        'JavaScript', 'TypeScript', 'ReactJS', 'React Router', 'Redux', 'Node.js', 'Express.js', 'SQL', 'PostgreSQL', 'HTML5', 'CSS', 'TailwindCSS', 
      ],
      ['/JobJuggler1.png', '/JobJuggler2.png'],
    ],
    [
      'myTools',
      'myTools is an application geared toward both small personal garages and large industrial warehouses. It is a lightweight solution to keep track of garage/warehouse inventory. With 10mm wrenches disappearing without reason, this app can be used to help identify who had it last.',
      [
        'JavaScript', 'ReactJS', 'React Router', 'Node.js', 'Express.js', 'NoSQL', 'MongoDB', 'HTML5', 'CSS', 'Webpack'
      ],
      ['/myTools1.png']
    ]
  ];

  return (
    <div className="text-text max-w-screen-xl mx-auto pt-4 pb-24">
      <div>
        <p className="text-4xl p-4">Experience</p>
        <div className="px-6 py-2 mx-6">
          {experiences.map(experience => {
            return (
              <ExperienceItem key={experience[0]} title={experience[0]} description={experience[1]} tools={experience[2]} images={experience[3]} link={experience[4]}/>
            )
          })}
        </div>
      </div>
      <div className="">
        <p className="text-4xl p-4">Open Source Products</p>
        <div className="px-6 py-2 mx-6">
          {openSourceProducts.map(experience => {
            return (
              <ExperienceItem key={experience[0]} title={experience[0]} description={experience[1]} tools={experience[2]} images={experience[3]} link={experience[4]}/>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
