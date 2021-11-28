/* eslint-disable @next/next/no-img-element */

const Details = ({ data }: any) => {
  const clubData = data[0];
  return (
    <div style={{ backgroundColor: "#F5FAB9" }}>
      <h1 className=" mt-10 text-center text-4xl" style={{ color: "#847B00" }}>
        Limhamns Shotokan Karate Klubb (LSKK)
      </h1>
      <div className="grid gird-cols-1 md:grid-cols-2 p-5">
        <img
          src={clubData["image1"]}
          alt=""
          className=" h-full w-full object-cover rounded-xl"
        />
        <div className=" grid place-items-center ">
          <div className="py-4 px-2 md:p-10">
            <h2 className=" text-3xl text-center ">Our Philosophy</h2>
            <p className="text-justify ">{clubData["field1"]}</p>
          </div>
        </div>
      </div>
      <div className="grid gird-cols-1 md:grid-cols-2 p-5 ">
        <img
          src={clubData["image2"]}
          alt=""
          className="md:order-2 h-full w-full object-cover rounded-xl"
        />
        <div className=" grid place-items-center ">
          <div className="py-4 px-2 md:p-10">
            <h2 className=" text-3xl text-center ">Our Philosophy</h2>
            <p className="text-justify ">{clubData["field2"]}</p>
          </div>
        </div>
      </div>
      <div className="grid gird-cols-1 md:grid-cols-2 p-5">
        <img
          src={clubData["image3"]}
          alt=""
          className=" h-full w-full object-cover rounded-xl"
        />
        <div className="py-4 px-2 md:p-10">
          <h2 className=" text-3xl text-center ">Our Philosophy</h2>
          <p className="text-justify ">{clubData["field3"]}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
