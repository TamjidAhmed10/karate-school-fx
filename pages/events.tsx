import Footer from "../Components/Footer";
import Instructors from "../Components/Instructors";
import Navbar from "../Components/Navbar";

const data = [
  {
    heading: "Our international branch in India-Assam",
    date: "05 November 2020 | India",
    details: "Soon I am visiting our India branch in Assam",
    img: "http://karateschool.se/images/newsEvent/1610484190.jpg",
  },
  {
    heading: "Attending Karate Seminar, Bangladesh, 24th till 31st January",
    date: "24 January 2020 | Dhaka & Chittagong",
    details:
      "Karate Seminar in Dhaka & Chittagong City, Bangladesh Sensi Shahnawaz Jinnah is attending Karate Seminar in Dhaka & Chittagong city in Bangladesh. Multiple seminars will be held from 24th January till 31st January 2020 where Sensi Shahnawaz will meet other trainers to discuss various topics on karate training and its development processes.",
    img: "http://karateschool.se/images/newsEvent/1602730022.jpg",
  },
  {
    heading: "Vårtermin will start from the 19th January, kl.16:30",
    date: "17 December 2019",
    details: " Karate School, Klagshamn Folkets Hus",
    img: "http://karateschool.se/images/newsEvent/1610478730.jpg",
  },
];

const Events = () => {
  return (
      <div>
          <Navbar />
          <Instructors writings="News and Events" />
          <h1 className="text-4xl text-center py-4 bg-gray-300">News and Events</h1>
      {data &&
        data.map((datas, i) => (
          <div key={i} className=" w-11/12 md:w-9/12 my-4 mx-auto ">
            {/* Section 1 */}
            <section className="px-2 p-2 bg-gray-50 md:px-0">
              <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                <div className="flex flex-wrap items-center sm:-mx-3">
                  <div className="w-full md:w-1/2 md:px-3">
                    <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0 text-justify">
                      <h1 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-xl md:text-xl lg:text-2xl xl:text-3xl">
                        {datas.heading}
                      </h1>
                      <small className="text-sm">{datas.date}</small>
                      <p className="mx-auto  text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                        {datas.details}
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className=" overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                      <img
                        src={datas.img}
                        className="w-full h-64 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ))}
          <Footer/>
    </div>
  );
};

export default Events;
