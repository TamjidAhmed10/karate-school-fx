import { Key, useState } from "react";
import Link from "next/link";
import LogoUploadForm from "./forms/LogoUploadForm";
const BackLogo = ({ data }: any) => {
  const [toogleUpload, setToogleUpload] = useState(false);
  const uploadData = () => {
    setToogleUpload(!toogleUpload);
  };
  return (
    <div>
      <div>
        <section className="pt-7 pb-14" style={{ backgroundColor: "#FDFFDE " }}>
          <div className="container px-8 mx-auto sm:px-12 lg:px-20">
            <h1
              className="text-2xl font-bold tracking-wide text-center  uppercase mb-7"
              style={{ color: "#847B00" }}
            >
              Affiliated at Home and Abroad
            </h1>
            <div className=" grid items-center justify-center md:grid-cols-4 grid-cols-1 gap-y-8">
              {data.map((item: any, i: Key | null | undefined) => {
                return (
                  <div className="flex items-center justify-center " key={i}>
                    <Link href="#" passHref>
                      <img
                        src={item.logolink}
                        alt={item.logoalt}
                        className="block object-contain h-28 "
                      />
                    </Link>
                    <div className="grid grid-cols-1 gap-4">
                      <button className="btn btn-sm">Edit</button>
                      <button className="btn btn-sm">Delete</button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className="border text-center mt-10 bg-gray-50 py-2 cursor-pointer hover:bg-red-100 select-none"
              onClick={uploadData}
            >
              <p>+ Add New Item</p>
            </div>
            {toogleUpload ? (
              <LogoUploadForm
                changeToggle={(
                  toogleUpload: boolean | ((prevState: boolean) => boolean)
                ) => setToogleUpload(toogleUpload)}
              />
            ) : (
              ""
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BackLogo;
