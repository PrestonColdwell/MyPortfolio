import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  return (
    <div className="bg-primaryDark/80 w-fit mx-auto pb-24 rounded-xl">
      <div className="pt-12 md:pt-24 relative flex flex-wrap md:flex-nowrap text-text mx-auto mt-12 sm:mt-18 md:mt-24 max-w-screen-lg gap-6 md:gap-12 md:px-10">
        <div className="p-4 mx-auto">
          <div className="bg-tertiary/70 absolute -top-8 left-12 h-6 w-6"></div>
          <p className="text-lg">Hey there! My name is</p>
          <p className="text-8xl text-gray-50">
            Preston <br /> Coldwell
          </p>
          <TypeAnimation
            sequence={[
              "I'm a Fullstack Software Engineer 🧑🏻‍💻",
              1000,
              "I'm a UI/UX Specialist 🎨",
              1000,
              "I'm a Web Developer 🌐",
              1000,
              "I'm a Mobile Developer 📱",
              1000,
              "I'm a Problem Solver 🧩",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "1.4em", display: "inline-block" }}
            repeat={Infinity}
          />
        </div>

        <div>This is currently in a new development process. Thank you for your understanding.</div>

        <div className="m-auto mb-10 sm:my-auto size-72">
          <img
            className="rounded-full object-contain"
            src="/Headshot.jpeg"
            alt="Headshot"
          />
        </div>
      </div>

      <div className="relative max-w-screen-lg mx-auto px-8">
        <div className="hidden sm:block bg-tertiary/30 absolute -bottom-12 left-24 h-6 w-6"></div>
        <div className="bg-tertiary/50 absolute -top-10 sm:-top-4 right-12 h-6 w-6"></div>
        <div className="hidden sm:block bg-tertiary/90 absolute -bottom-48 right-64 h-6 w-6"></div>
        <p className="text-center text-text text-lg pt-8 sm:pt-24">
          As a Software Engineer at BoxLock, I focus on developing scalable and
          efficient analytics and authentication systems that drive our Access
          Control Platform. Leveraging technologies like TypeScript, React,
          PostgreSQL and AWS, I work to enhance our application across the
          stack, striving to deliver a product that is both seamless and highly
          functional for our users. My role involves not just building features
          but also ensuring that they contribute meaningfully to the overall
          user experience and meet our high standards of performance.
          <br />
          <br />
          In my previous role with LogYard, I contributed to the open-source
          community by creating tools that simplify workflows for developers.
          This experience has deepened my commitment to crafting solutions that
          make a tangible difference in the way people work. I’m passionate
          about developing tools and systems that ease tasks and improve
          efficiency, reflecting my belief in the value of practical,
          user-focused engineering.
          <br />
          <br />
          If you have an interest in my work or simply would like to connect, I
          would love to hear from you! Feel free to reach out to me at using any
          of the contact methods{" "}
          <Link className="text-link pointer-events-auto" to="/contact">
            HERE
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
