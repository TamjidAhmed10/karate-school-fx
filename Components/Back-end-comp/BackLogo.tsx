/* eslint-disable @next/next/no-img-element */
import { Key, useState } from "react";
import Link from "next/link";
import LogoUploadForm from "./forms/LogoUploadForm";
import { doc, deleteDoc } from "firebase/firestore";
import LogoEditForm from "./forms/LogoEditForm";
import { db } from "../../firebase-config/firebase-config";
import { useRouter } from "next/router";
const BackLogo = ({ data }: any) => {
  const router = useRouter();
  const [toogleUpload, setToogleUpload] = useState(false);
  const [toogleEditData, setToogleEditData] = useState(false);
  const [editDataOfItem, setEditDataOfItem] = useState("");

  const uploadData = () => {
    setToogleUpload(!toogleUpload);
  };

  const editData = (item: any) => {
    console.log(item);
    setToogleEditData(!toogleEditData);
    setEditDataOfItem(() => {
      return item;
    });
  };
  
  const deleteData = async (id: any) => {
    const docRef = doc(db, "logos-associated", id);
    await deleteDoc(docRef).then(() => router.replace(router.asPath));
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
                        src={item.logoname}
                        alt={item.organizationname}
                        className="block object-contain h-28 "
                      />
                    </Link>
                    <div className="grid grid-cols-1 gap-4">
                      <button
                        className="btn btn-sm"
                        onClick={() => {
                          editData(item);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm"
                        onClick={() => {
                          deleteData(item.id);
                        }}
                      >
                        Delete
                      </button>
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
            {toogleEditData && (
              <LogoEditForm
                data1={editDataOfItem}
                changeToggleEdit={(
                  toogleEditData: boolean | ((prevState: boolean) => boolean)
                ) => setToogleEditData(toogleEditData)}
              />
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BackLogo;
