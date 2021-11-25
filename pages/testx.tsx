const data = {
  adress: "Klagshamn Folkets Hus, Borrebackevägen 217, Klagshamn 21852",
  phonenumber: "0708698276",
  email: "info@karateschool.se",
};
import { FaHome } from "react-icons/fa";
import Footer from "../Components/Footer";
import Instructors from "../Components/Instructors";
import Navbar from "../Components/Navbar";
const Test2 = () => {
  return (
    <div>
          <Navbar />
          <Instructors writings="Contact"/>
      <section className="w-11/12 mx-auto bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row">
            <div className="relative w-full bg-cover lg:w-6/12 xl:w-7/12 bg-gradient-to-r from-white via-white to-gray-100">
              <div className="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
                <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                  <div className="relative">
                    <h2 className="text-2xl font-bold text-gray-900 xl:text-3xl">
                      Contact Information
                    </h2>
                    <div className="py-2   ">
                      <div
                        className=" flex text-2xl font-bold gap-2"
                        style={{ alignItems: "center" }}
                      >
                        <FaHome />
                        <span>Adress</span>
                      </div>
                      <p>{data.adress}</p>
                    </div>
                    <div className="py-2">
                      <div
                        className=" flex text-2xl font-bold gap-2"
                        style={{ alignItems: "center" }}
                      >
                        <FaHome />
                        <span>Phone Number</span>
                      </div>
                      <p>{data.phonenumber}</p>
                    </div>
                    <div className="py-2 ">
                      <div
                        className=" flex text-2xl font-bold gap-2"
                        style={{ alignItems: "center" }}
                      >
                        <FaHome />
                        <span>Email Adress</span>
                      </div>
                      <p>{data.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-white lg:w-6/12 xl:w-5/12">
              <div className="flex flex-col items-start justify-start w-full h-full p-4 lg:p-16 xl:p-16 ">
                <h4 className="w-full text-3xl font-bold text-center">Get in touch</h4>
                <p className="text-lg w-full font-bold text-center">
                  Send a Message
                </p>
                <div className="relative w-full mt-4 space-y-2">
                  <div className="relative">
                    <label className="font-medium text-gray-900">Name</label>
                    <input
                      type="text"
                      className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div className="relative">
                    <label className="font-medium text-gray-900">Email</label>
                    <input
                      type="text"
                      className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                      placeholder="Enter Your Email Address"
                    />
                  </div>
                  <div className="relative">
                    <label className="font-medium text-gray-900">
                      Your Message
                    </label>
                    <textarea
                      className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                      placeholder="Enter a Message"
                    />
                  </div>
                  <div className="relative">
                    <a
                      href="#_"
                      className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease"
                    >
                      Submit
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          </section>
          <Footer/>
    </div>
  );
};

export default Test2;
