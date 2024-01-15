const About = () => {
  return (
    <div className="h-dvh">
      <div className="relative flex flex-wrap md:flex-nowrap text-text mx-auto mt-12 sm:mt-18 md:mt-24 max-w-screen-lg gap-6 md:gap-12 md:px-10">
        <div className="p-4 mx-auto">
          {/* design box */}
          <div className="bg-tertiary/70 absolute -top-8 left-12 h-6 w-6"></div>
          <p className="text-lg">Hey there! My name is</p>
          <p className="text-8xl text-gray-50">
            Preston <br /> Coldwell
          </p>
          <p className="text-tertiary text-2xl whitespace-nowrap">
            <span className="text-text text-lg">I'm a </span>
            Fullstack Software Engineer 🧑🏻‍💻
          </p>
        </div>

        <div className="m-auto mb-10 sm:my-auto size-72">
          <img
            className="rounded-full object-contain"
            src="/Headshot.jpeg"
            alt="Headshot"
          />
        </div>
      </div>

      <div className="relative max-w-screen-lg mx-auto px-8">
        {/* design box */}
        <div className="hidden sm:block bg-tertiary/30 absolute -bottom-12 left-24 h-6 w-6"></div>
        {/* design box */}
        <div className="bg-tertiary/50 absolute -top-10 sm:-top-4 right-12 h-6 w-6"></div>
        {/* design box */}
        <div className="hidden sm:block bg-tertiary/90 absolute -bottom-48 right-64 h-6 w-6"></div>
        <p className="text-center text-text text-lg pt-8 sm:pt-24">
          I'm a software engineer that excels in designing and creating exceptional digital experiences. Right now, I'm devoting my time and expertise to the open-source community, specifically toward my team's product, LogYard. I'd love to connect regarding potential opportunities so please feel free to reach out and connect!
        </p>

      </div>
    </div>
  );
};

export default About;
