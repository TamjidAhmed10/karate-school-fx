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
import { useState, useEffect } from "react";

const Logos = () => {
  const [newImgAlt, setNewImgAlt] = useState("");
  const [newImgLink, setNewImgLink] = useState("");
  const [iD, setID] = useState("");
  const [users, setUsers] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const collectionRef = collection(db, "logos-associated");
  const [updateAll, setUpdateAll] = useState(true);
  const clearall = () => {
    setNewImgAlt("");
    setNewImgLink("");
    setID("");
  };
  const newLinKAdd = async () => {
    if (editMode) {
      const newField = { logoalt: newImgAlt, logolink: newImgLink };
      const userDoc = doc(db, "logos-associated", iD);
      await updateDoc(userDoc, newField);
      setNewImgAlt("");
      setNewImgLink("");
      setID("");
      setEditMode(false);
      setUpdateAll(true);
    } else {
      await addDoc(collectionRef, { logoalt: newImgAlt, logolink: newImgLink });
      setNewImgAlt("");
      setNewImgLink("");
      setUpdateAll(true);
    }
  };
  const deleteAData = async (id: any) => {
    const userDoc = doc(db, "logos-associated", id);
    await deleteDoc(userDoc);
    setUpdateAll(true);
  };
  const updateData = async (id: any, logolink: any, logoalt: any) => {
    setID(id);
    setNewImgAlt(logoalt);
    setNewImgLink(logolink);
    setEditMode(true);
  };
  useEffect(() => {
    const getUsers = async () => {
      const data: any = await getDocs(collectionRef);
      setUsers(
        data.docs.map((doc: { data: () => any; id: any }) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    if (updateAll) {
      getUsers();
      setUpdateAll(false);
    }
  }, [updateAll]);
  return (
    <div>
      
      <div className="w-11/12 mx-auto">
        <h1 className="text-3xl text-center bg-gray-200">Home Page Settings</h1>
        <h2 className="text-3xl text-center bg-gray-400">Logo Settings</h2>
        <div className="overflow-hidden bg-red-50">
          <table className=" table-auto w-full">
            <thead>
              <tr>
                <th className="py-2" />
                <th>Image Description</th>
                <th>Image details</th>

                <th>Edit / Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((logo, i) => {
                return (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <td>{logo["logoalt"]}</td>
                    <td className="">{logo["logolink"]}</td>

                    <td className="">
                      <div className="flex justify-center gap-10">
                        <div
                          className="cursor-pointer"
                          onClick={() => {
                            updateData(
                              logo["id"],
                              logo["logolink"],
                              logo["logoalt"]
                            );
                          }}
                        >
                          <FaEdit />
                        </div>
                        <div
                          className="cursor-pointer"
                          onClick={() => {
                            deleteAData(logo["id"]);
                          }}
                        >
                          <AiFillDelete />
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
              <tr>
<th>INPUT</th>
              <td>
                <input
                  type="text"
                  className=""
                  placeholder="Enter a image Description"
                  value={newImgAlt}
                  onChange={(e) => {
                    setNewImgAlt(e.target.value);
                  }}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="w-full"
                  placeholder="Enter a image LINK"
                  value={newImgLink}
                  onChange={(e) => {
                    setNewImgLink(e.target.value);
                  }}
                />
              </td>
              <td>
                <div className="flex justify-center gap-10">
                  <div onClick={newLinKAdd} className="cursor-pointer">
                    <TiTick className="text-green-600 " />
                  </div>
                  <div onClick={clearall} className="cursor-pointer">
                    <AiOutlineClear />
                  </div>
                </div>
              </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Logos;
