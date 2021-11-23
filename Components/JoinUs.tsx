const JoinUs = () => {
  return (
    <div
      style={{
        backgroundImage: "url(" + "/1.jpg" + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-green-200 bg-opacity-50">
        <div className="text-center  w-96  mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl  font-extrabold text-black dark:text-white sm:text-3xl">
            <span
              className="block shadow-2xl	"
              style={{ textShadow: "3px 3px 6px gray" }}
            >
              I am Shajniyaz Jinnah
            </span>
            <span
              className="block text-white"
              style={{ textShadow: "3px 3px 6px black" }}
            >
              Its today or never.
            </span>
          </h2>
          <div
            className="text-xl mt-4  max-w-md mx-auto text-red-900 font-bold	  "
            style={{ textShadow: "3px 3px 6px white" }}
          >
            Learn Karate <br /> Train Karate <br /> Enjoy Karate <br />
          </div>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-5 inline-flex rounded-md shadow">
              <button
                type="button"
                className="py-4 px-6  bg-green-800 hover:bg-green-900 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
