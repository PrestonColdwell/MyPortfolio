import { useRef } from "react";
import ExperienceItem from "../ExperienceItem.tsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  Card,
  CardContent,
} from "../ui/index.tsx";
import Autoplay from "embla-carousel-autoplay";
const Experience = () => {
  const experiences = [
    [
      "BoxLock",
      "BoxLock's mission is to provide innovative, intelligent access control solutions that enhance security, operational efficiency, and accountability for businesses across various industries, ensuring the safety and integrity of their assets. With the BoxLock platform, businesses can easily manage and monitor access to their assets, track and report on asset usage, and integrate with other systems to streamline operations.",
      [
        "JavaScript",
        "TypeScript",
        "ReactJS",
        "HTML5",
        "CSS",
        "NodeJS",
        "SQL (PostgreSQL)",
        "AWS (Amplify, Cognito, EC2, Lambda, S3, RDS, CloudWatch)",
      ],
      ["/BoxLock1.png", "/BoxLock2.png", "/BoxLock3.png"],
    ],
    [
      "Your Home Sold Guarenteed Realty (YHSGR)",
      "Implemented and iterated on the entirety of the employee and performance analytics platform for the YHSGR team. The purpose of this application is to accurately track pending and closed agent transactions as well as report them to the broker for futher analysis.",
      [
        "JavaScript",
        "TypeScript",
        "ReactJS",
        "NextJS",
        "HTML5",
        "CSS",
        "SQL (PostgreSQL)",
        "AWS (RDS)",
        "NextAuth",
        "OAuth",
        "Two-Factor-Authentication (2FA)",
        "bcrypt",
        "Jest",
        "Cypress",
      ],
      ["/YHSGRMain.png"],
    ],
    [
      "LogYard",
      "LogYard is a lightweight and robust logging visualization tool that was designed with other developers in mind. With custom, context-bound logs, users of our application can know where their logs are coming from - whether that be a specific Kubernetes pod or cluster, or more simply, which directory it originated in. These logs can then be sorted, filtered, grouped and visualized using real-time graphical interfaces based on individual contexts or time.",
      [
        "JavaScript",
        "TypeScript",
        "ReactJS",
        "Redux",
        "NodeJS",
        "ExpressJS",
        "NoSQL (MongoDB)",
        "Vitest",
        "Supertest",
        "Cypress",
        "bcrypt",
        "C3.js",
        "HTML5",
        "CSS",
        "TailwindCSS",
        "Vite",
        "Docker",
      ],
      ["/LogYard3.png", "/LogYard1.png", "/LogYard2.png"],
      ["https://www.logyard.io"],
    ],
  ];

  const openSourceProducts = [
    [
      "PassPro",
      "PassPro is a password and credentials management application that uses secure encryption techniques to safely store user's private account data in the cloud, making our users's digital lives easier to manage. Built with the latest runtime environment, Bun.io, and SvelteKit for high frontend performance, PassPro offers a seamless and highly responsive user experience.",
      [
        "JavaScript",
        "TypeScript",
        "Svelte",
        "SvelteKit",
        "cryptr",
        "bcrypt",
        "SQL",
        "PostgreSQL",
        "HTML5",
        "CSS",
        "TailwindCSS",
        "Bun.io",
      ],
      ["/PassPro1.png", "/PassPro2.png", "/PassPro3.png"],
      ["https://www.passpro.io"],
    ],
    [
      "JobJuggler",
      "JobJuggler is a job application manager to stay organized in today's modern search process. By using JobJuggler in your job search you can be sure to stay on top of individual positions and never miss the chance to be a top applicant again.",
      [
        "JavaScript",
        "TypeScript",
        "ReactJS",
        "React Router",
        "Redux",
        "Node.js",
        "Express.js",
        "SQL",
        "PostgreSQL",
        "HTML5",
        "CSS",
        "TailwindCSS",
      ],
      ["/JobJuggler1.png", "/JobJuggler2.png"],
    ],
    [
      "myTools",
      "myTools is an application geared toward both small personal garages and large industrial warehouses. It is a lightweight solution to keep track of garage/warehouse inventory. With 10mm wrenches disappearing without reason, this app can be used to help identify who had it last.",
      [
        "JavaScript",
        "ReactJS",
        "React Router",
        "Node.js",
        "Express.js",
        "NoSQL",
        "MongoDB",
        "HTML5",
        "CSS",
        "Webpack",
      ],
      ["/myTools1.png"],
    ],
  ];

  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  return (
    <div className="text-text max-w-screen-xl mx-auto pt-4 pb-24">
      <div>
        <p className="text-4xl p-4">Experience</p>
        <div className="px-6 py-2 mx-6">
          {experiences.map((experience) => {
            return (
              <ExperienceItem
                key={String(experience[0])}
                title={experience[0]}
                description={experience[1]}
                tools={experience[2] as string[]} // Fix: Change type to 'string | string[]'
                images={experience[3] as string[]} // Fix: Change type to 'string | string[]'
                link={experience[4] as string} // Fix: Change type to 'string | undefined'
              />
            );
          })}
        </div>
      </div>
      <div className="">
        <p className="text-4xl p-4">Open Source Products</p>
        <div className="px-6 py-2 mx-6">
          {openSourceProducts.map((experience) => {
            return (
              <ExperienceItem
                key={String(experience[0])}
                title={experience[0]}
                description={experience[1]}
                tools={experience[2] as string[]}
                images={experience[3] as string[]}
                link={experience[4] as string}
              />
            );
          })}
        </div>
      </div>
    </div>
    // <div className=" border-2 border-tertiaryLight rounded-3xl p-6 text-center bg-secondaryDark/90 mx-8">
    //   <h2 className="text-2xl">Your Home Sold Guaranteed Realty (YHSGR)</h2>
    //   <Carousel
    //     plugins={[plugin.current]}
    //     className="mt-10 max-w-lg mx-auto pointer-events-auto"
    //     onMouseEnter={plugin.current.stop}
    //     onMouseLeave={plugin.current.reset}
    //   >
    //     <CarouselContent>
    //       <CarouselItem key="a1">
    //         <div className="p-1">
    //           <Card>
    //             <CardContent className="flex items-center justify-center p-6">
    //               <img src="/YHSGRMain.png" alt="YHSGR" />
    //             </CardContent>
    //           </Card>
    //         </div>
    //       </CarouselItem>
    //       <CarouselItem key="a2">
    //         <div className="p-1">
    //           <Card>
    //             <CardContent className="flex items-center justify-center p-6">
    //               <img src="/YHSGRMain.png" alt="YHSGR" />
    //             </CardContent>
    //           </Card>
    //         </div>
    //       </CarouselItem>
    //       <CarouselItem key="a3">
    //         <div className="p-1">
    //           <Card>
    //             <CardContent className="flex items-center justify-center p-6">
    //               <img src="/YHSGRMain.png" alt="YHSGR" />
    //             </CardContent>
    //           </Card>
    //         </div>
    //       </CarouselItem>
    //     </CarouselContent>
    //     <CarouselPrevious />
    //     <CarouselNext />
    //   </Carousel>
    // </div>
  );
};

export default Experience;
