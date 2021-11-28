/* eslint-disable @next/next/no-img-element */
import { FaEdit } from "react-icons/fa";
import { AiFillDelete, AiOutlineClear } from "react-icons/ai";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase-config/firebase-config";
import { TiTick } from "react-icons/ti";
import { useState} from "react";
const ClubWritings = ({ data }: any) => {
  const [inputChange, setInputChange] = useState("");
  const [keyVal, setKeyVal] = useState("");

  const clearall = () => {
    setInputChange("");
    setKeyVal("");
  };
  const uploadData = async () => {
    if (keyVal != "") {
      const newData = data.finalLogoData[0];
      newData[keyVal] = inputChange;
      const userDoc = doc(db, "clubwritings", data.finalLogoData[0]["id"]);
      await updateDoc(userDoc, newData);
      setInputChange("");
      setKeyVal("");
    }
  };
  const changedata = (a: any, b: any) => {
    setInputChange(b);
    setKeyVal(a);
  };
  return (
    <div className="w-11/12 mx-auto">
      <div className="overflow-x-auto xl:overflow-hidden bg-red-100">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="py-2" />
              <th className="py-2">Description</th>
              <th className="py-2 w-4/6">Details </th>
              <th className="py-2 w-1/6">Img Preview </th>
              <th className="py-2 w-1/6">Edit / Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Image Link</td>
              <td>{data.finalLogoData[0]["image1"]}</td>
              <td className="">
                <img src={data.finalLogoData[0]["image1"]} alt=" " className=""/>
              </td>
              <td className="flex justify-center  ">
                <div>
                  <button
                    className="btn btn-xs mx-4"
                    onClick={() => {
                      changedata("image1", data.finalLogoData[0]["image1"]);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th>2</th>
              <td>Description</td>
              <td>{data.finalLogoData[0]["field1"]}</td>
              <td></td>

              <td className="flex justify-center">
                <div>
                  <button
                    className="btn btn-xs mx-4"
                    onClick={() => {
                      changedata("field1", data.finalLogoData[0]["field1"]);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th>3</th>
              <td>Image Link</td>
              <td>{data.finalLogoData[0]["image2"]}</td>
              <td>
                <img src={data.finalLogoData[0]["image2"]} alt="" />
              </td>

              <td className="flex justify-center">
                <div>
                  <button
                    className="btn btn-xs mx-4"
                    onClick={() => {
                      changedata("image2", data.finalLogoData[0]["image2"]);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th>4</th>
              <td>Description</td>
              <td>{data.finalLogoData[0]["field2"]}</td>
              <td />
              <td className="flex justify-center ">
                <div>
                  <button
                    className="btn btn-xs mx-4"
                    onClick={() => {
                      changedata("field2", data.finalLogoData[0]["field2"]);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th>5</th>
              <td>Image Link</td>
              <td>{data.finalLogoData[0]["image3"]}</td>
              <td>
                <img src={data.finalLogoData[0]["image3"]} alt="" />
              </td>

              <td className="flex justify-center">
                <div>
                  <button
                    className="btn btn-xs mx-4"
                    onClick={() => {
                      changedata("image3", data.finalLogoData[0]["image3"]);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th>6</th>
              <td>Description</td>
              <td>{data.finalLogoData[0]["field3"]}</td>
              <td />
              <td className="flex justify-center ">
                <div>
                  <button
                    className="btn btn-xs mx-4"
                    onClick={() => {
                      changedata("field3", data.finalLogoData[0]["field3"]);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th>INPUT</th>
              <td>{keyVal}</td>

              <td>
                <textarea
                  className="w-full"
                  value={inputChange}
                  placeholder="Enter a image LINK"
                  onChange={(e) => {
                    setInputChange(e.target.value);
                  }}
                />
              </td>
              <td />
              <td>
                <div className="flex justify-center gap-10">
                  <div className="cursor-pointer" onClick={uploadData}>
                    <TiTick className="text-green-600 " />
                  </div>
                  <div className="cursor-pointer" onClick={clearall}>
                    <AiOutlineClear />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClubWritings;
