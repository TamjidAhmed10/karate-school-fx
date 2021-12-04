import { useState } from "react";
import ClassTimeForm from "./ClassTimeForm";
const ClassTime = ({ data }: any) => {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [editDataOfItem, setEditDataOfItem] = useState("");
  const editData = (item: any) => {
    setEditDataOfItem(() => {
      return item;
    });
    setToggleEdit(!toggleEdit);
  };
  return (
    <div>
      <h1 className="text-3xl text-center m-4">Class and Session</h1>
      {data.map((item: any, i: any) => {
        return (
          <div key={i}>
            <div className=" grid  md:grid-flow-col md:auto-cols-min  justify-center ">
              <div className=" w-full md:w-64 ">
                <div className=" text-center md:text-right tracking-wide	">
                  <h4 className=" text-2xl ">
                    Vårterminen(spring term) - <br />
                    January to June
                  </h4>
                  <p className="">Wednesday &amp; Thursday :</p>
                  <p className="">16:30 - 17:30 and 17:30-18:30 (nybörjare)</p>
                  <p className="">18:30-19:30 (redan har kunskap)</p>
                  <div className="md:border-b-2 md:border-gray-900 " />
                  <span className="">
                    <b>Fees(per term)</b>
                  </span>
                  <p className="">
                    from 4 years to 25 years 700 SEK
                    <br />
                    from 25 years to above 1000 SEK
                  </p>

                  <div className="border-b-2 my-8 border-gray-900 md:hidden" />
                </div>
              </div>
              <div className="divider divider-vertical " />

              <div className=" w-full md:w-64">
                <div className="text-center md:text-left tracking-wide	">
                  <h4 className=" text-2xl">
                    Höstterminen(Autum term)- <br />
                    August to December
                  </h4>
                  <p className="">Wednesday &amp; Thursday :</p>
                  <p className="">16:30 - 17:30 and 17:30-18:30 (nybörjare)</p>
                  <p className="">18:30-19:30 (redan har kunskap)</p>
                  <div className="md:border-b-2 md:border-gray-900  " />

                  <span className="">
                    <b>Fees(per term)</b>
                  </span>
                  <p className="">
                    from 4 years to 25 years 700 SEK
                    <br />
                    from 25 years to above 1000 SEK
                  </p>

                  <div className=""></div>
                </div>
              </div>
            </div>
            <div className="text-center p-10">
              <h2 className="text-2xl font-bold ">Friday</h2>
              <h3 className="text-2xl ">Body Carate</h3>
              <h4 className="text-xl py-1">
                From 17:00 to 18:00 (Mix training)
              </h4>
              <button
                className="btn  btn-info "
                onClick={() => {
                  editData(item);
                }}
              >
                Edit
              </button>
            </div>
          </div>
        );
      })}
      {toggleEdit && (
        <ClassTimeForm
          data1={editDataOfItem}
          changeToggleEdit={(
            toggleEdit: boolean | ((prevState: boolean) => boolean)
          ) => setToggleEdit(toggleEdit)}
        />
      )}
    </div>
  );
};

export default ClassTime;
