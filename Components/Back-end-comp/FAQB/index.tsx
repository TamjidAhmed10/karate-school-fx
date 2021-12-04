import { Key, useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../firebase-config/firebase-config";
import { useRouter } from "next/router";
import FAQBform from "./FAQBform";
const FAQB = ({ data }: any) => {
  const router = useRouter();
  const [toggleEdit, setToggleEdit] = useState(false);
  const [editDataOfItem, setEditDataOfItem] = useState("");
  const addnewdata = () => {};
  const editData = (item: any) => {
    setEditDataOfItem(() => {
      return item;
    });
    setToggleEdit(!toggleEdit);
  };
  const deleteData = async (item: any) => {
    const docummentRef = doc(db, "faq", item.id);
    await deleteDoc(docummentRef).then(() => {
      router.replace(router.asPath);
    });
  };
  return (
    <div>
      <div className="bg-lightblue py-20 px-4">
        <div className="mx-auto max-w-6xl flex flex-col  md:flex-row">
          <h2 className="mr-8 mb-10 text-center w-full md:w-1/3 text-3xl font-extrabold leading-9">
            Frequently-asked questions
          </h2>
          <dl className="w-full md:w-2/3">
            {data.map((item: any, i: Key | null | undefined) => {
              return (
                <div key={i}>
                  <div>
                    <dt className="mb-4">
                      <h3 className="text-xl font-semibold">
                        We already have ongoing projects. Will Valohai easily
                        integrate with them?
                      </h3>
                    </dt>
                  </div>

                  <dd className="mb-16">
                    <p>
                      Running existing machine learning projects in Valohai is
                      very simple! Integration only requires adding a
                      valohai.yaml configuration file. Moving projects in and
                      out of Valohai is easy – the integration is only the
                      configuration file.
                    </p>
                  </dd>
                  <div className="flex  gap-10">
                    <div className="w-10 ">
                      <button
                        className="btn btn-sm"
                        onClick={() => editData(item)}
                      >
                        Edit
                      </button>
                    </div>
                    <div className="w-10 ">
                      <button
                        className="btn btn-sm"
                        onClick={() => deleteData(item)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </dl>
        </div>
        <div
          className="border text-center mt-10 bg-gray-50 py-2 cursor-pointer hover:bg-red-100 select-none"
          onClick={addnewdata}
        >
          <p>+ Add New Item</p>
        </div>
        {toggleEdit && (
          <FAQBform
            data1={editDataOfItem}
            changeToggleEdit={(
              toggleEdit: boolean | ((prevState: boolean) => boolean)
            ) => setToggleEdit(toggleEdit)}
          />
        )}
      </div>
    </div>
  );
};

export default FAQB;
