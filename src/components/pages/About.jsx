const About = () => {
  return (
    <>
      <div className="flex flex-wrap text-text mx-auto mt-[15%] max-w-screen-lg gap-12">
        <div className="pt-20 mx-auto">
          <p className="text-lg">Hey there! My name is</p>
          <p className="text-8xl text-gray-50">
            Preston <br /> Coldwell
          </p>
          <p className="text-tertiary text-2xl">
            <span className="text-text text-lg">and I'm a</span>
            Fullstack Developer 🧑🏻‍💻
          </p>
        </div>

        <div className="text-center my-auto mx-auto p-12 size-96">
          <img
            className="rounded-full object-contain"
            src="/Headshot.jpeg"
            alt="Headshot"
          />
        </div>
      </div>
      <p className="text-center text-text">Add a short description of what I work on here...</p>
    </>
  );
};

export default About;
