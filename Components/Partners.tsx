/* eslint-disable @next/next/no-img-element */
import { Key } from "react";

const Partners = ({ data }: any) => {
  return (
    <div>
      <section className="pt-7 pb-14" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container px-8 mx-auto sm:px-12 lg:px-20">
          <h1
            className="text-2xl font-bold tracking-wide text-center  uppercase mb-7"
            style={{ color: "#847B00" }}
          >
            Affiliated at Home and Abroad
          </h1>
          <div className=" grid items-center justify-center grid-cols-4  gap-y-8">
            {data.map((item: any, i: Key | null | undefined) => {
              return (
                <div className="flex items-center justify-center " key={i}>
                  <img
                    src={item.logoname}
                    alt={item.organizationname}
                    className="block object-contain h-28 "
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
