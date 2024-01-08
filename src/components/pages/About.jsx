const About = () => {
  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap text-text mx-auto md:mt-[5%] max-w-screen-lg gap-6 md:gap-12 md:px-10">
        <div className="p-4 pt-10 md:pt-20 mx-auto">
          <p className="text-lg">Hey there! My name is</p>
          <p className="text-8xl text-gray-50">
            Preston <br /> Coldwell
          </p>
          <p className="text-tertiary text-2xl">
            <span className="text-text text-lg">and I'm a </span>
            Fullstack Developer 🧑🏻‍💻
          </p>
        </div>

        <div className="text-center my-auto mx-auto px-6 md:p-12 size-64 md:size-96">
          <img
            className="rounded-full object-contain"
            src="/Headshot.jpeg"
            alt="Headshot"
          />
        </div>
      </div>

      <div>
        <p className="text-center text-text">
          I'm a software engineer that excels in designing and creating exceptional digital experiences. Right now, I'm devoting my time and efforts to the open-source community, specifically toward my team's product, LogYard. I'd love to connect regarding potential opportunities so please feel free to reach out!
        </p>
      </div>

    </>
  );
};

export default About;
