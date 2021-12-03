import { Key, useState } from "react";
import DetailsUpdate from "./DetailsUpdate";

/* eslint-disable @next/next/no-img-element */
const LSSK = ({ data }: any) => {
  const [toggle, setToggle] = useState(false);
  const [editDataOfItem, setEditDataOfItem] = useState("");
  const editDoc = (item: any) => {
    setEditDataOfItem(() => {
      return item;
    });
    setToggle(true);
  };
  return (
    <div>
      {data.map((item: any, i: Key | null | undefined) => {
        return (
          <div key={i}>
            <div style={{ backgroundColor: "#F5FAB9" }}>
              <h1
                className=" mt-10 text-center text-4xl"
                style={{ color: "#847B00" }}
              >
                Limhamns Shotokan Karate Klubb (LSKK)
              </h1>
              <div className="grid gird-cols-1 md:grid-cols-2 p-5">
                <img
                  src={item.img1}
                  alt=""
                  className=" h-full w-full object-cover rounded-xl"
                />
                <div className=" grid place-items-center ">
                  <div className="py-4 px-2 md:p-10">
                    <h2 className=" text-3xl text-center ">{item.heading1}</h2>
                    <p className="text-justify ">{item.paragraph1}</p>
                  </div>
                </div>
              </div>
              <div className="grid gird-cols-1 md:grid-cols-2 p-5 ">
                <img
                  src={item.img2}
                  alt=""
                  className="md:order-2 h-full w-full object-cover rounded-xl"
                />
                <div className=" grid place-items-center ">
                  <div className="py-4 px-2 md:p-10">
                    <h2 className=" text-3xl text-center ">{item.heading2}</h2>
                    <p className="text-justify ">{item.paragraph2}</p>
                  </div>
                </div>
              </div>
              <div className="grid gird-cols-1 md:grid-cols-2 p-5">
                <img
                  src={item.img1}
                  alt=""
                  className=" h-full w-full object-cover rounded-xl"
                />
                <div className="py-4 px-2 md:p-10">
                  <h2 className=" text-3xl text-center ">{item.heading3}</h2>
                  <p className="text-justify ">{item.paragraph3}</p>
                </div>
              </div>
              <div className="w-10 mx-auto">
                <button className="btn btn-sm" onClick={() => editDoc(item)}>
                  Edit
                </button>
              </div>
            </div>
          </div>
        );
      })}
      {/* EDIT DATA PART */}
      {toggle && (
        <DetailsUpdate
          data1={editDataOfItem}
          changeToggleEdit={(
            toggle: boolean | ((prevState: boolean) => boolean)
          ) => setToggle(toggle)}
        />
      )}
    </div>
  );
};

export default LSSK;
