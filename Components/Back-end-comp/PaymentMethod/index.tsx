import { useState } from "react";
import PaymentDetails from "./PaymentDetails";

const PaymentMethod = ({ data }: any) => {
  const [toggle, setToggle] = useState(false);
  const [editDataOfItem, setEditDataOfItem] = useState("");
  const editDoc = (item: any) => {
    setEditDataOfItem(() => {
      return item;
    });
    setToggle(!toggle);
  };

  return (
    <div>
      {data.map((item: any, i: any) => {
        return (
          <div className="py-10" style={{ backgroundColor: "#DAE691" }} key={i}>
            <div className="text-center ">
              <h3 className="  font-bold text-2xl">Payment Method</h3>
              <p style={{ marginBottom: 0 }} className="">
                <span className="font-bold">IBAN:</span>{" "}
                SE6095000099602609893736
              </p>
              <p style={{ marginBottom: 0 }} className="">
                <span className="font-bold">BIC Kod:</span> NDEASESS
              </p>
              <p style={{ marginBottom: 0 }} className="">
                Nordea Bank, Sweden
              </p>
            </div>
            <div className="mt-5 grid  md:grid-flow-col md:auto-cols-min  justify-center ">
              <div className=" w-full  md:w-28 ">
                <div className=" text-center md:text-right tracking-wide	">
                  <p className=" font-bold">Bank Giro</p>
                  <p className="">5499-0825</p>
                  <div className="border-b-2 my-2 border-gray-900 md:hidden" />
                  <div className="md:border-b-2 md:border-gray-900 " />
                  <p className=" font-bold">Swish</p>
                  <p className="">123 252 0476</p>
                  <div className="border-b-2 my-2 border-gray-900 md:hidden" />
                </div>
              </div>
              <div className="divider divider-vertical " />

              <div className=" w-full md:w-28">
                <div className="text-center md:text-left tracking-wide	">
                  <p className=" font-bold">Bank Giro</p>
                  <p className="">5499-0825</p>
                  <div className="border-b-2 my-2 border-gray-900 md:hidden" />
                  <div className="md:border-b-2 md:border-gray-900 " />
                  <p className=" font-bold  ">Swish</p>
                  <p className="">123 252 0476</p>
                  <div className=""></div>
                </div>
              </div>
            </div>
            <div className="w-10 mx-auto mt-11">
              <button className="btn btn-sm" onClick={() => editDoc(item)}>
                Edit
              </button>
            </div>
          </div>
        );
      })}
      {toggle && (
        <PaymentDetails
          data1={editDataOfItem}
          changeToggleEdit={(
            toggle: boolean | ((prevState: boolean) => boolean)
          ) => setToggle(toggle)}
        />
      )}
    </div>
  );
};

export default PaymentMethod;
