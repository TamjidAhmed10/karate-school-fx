const JoinUs = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/1.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className=" "
        style={{
          backgroundColor: "rgba(201, 218, 81, .3)",
        }}
      >
        <div className="text-center  w-96  mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl  font-extrabold text-white  sm:text-2xl">
            <span
              className="block  	"
              style={{ textShadow: "3px 3px 6px black" }}
            >
              I am Shahnawaz Jinnah
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
