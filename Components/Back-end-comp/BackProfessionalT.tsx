/* eslint-disable @next/next/no-img-element */
import { Key, SetStateAction, useState } from "react";
import Link from "next/link";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase-config/firebase-config";
import { useRouter } from "next/router";

const BackProfessionalT = ({ data }: any) => {
  const router = useRouter();
  const data1 = data;
  const refreshData = () => {
    router.reload();
  };

  const [toggle, setToggle] = useState(false);
  const [addNewToggle, setAddNewToggle] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [smallDescription, setSmallDescription] = useState("");
  const [facebookLink, setFacebookLink] = useState("");
  const [twitterLink, setTwitterLink] = useState("");
  const [linkedInLink, setLinkedInLink] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [id, setID] = useState("");
  const uploadModal = () => {};
  const closeAddModal = () => {
    setAddNewToggle(false);
  };
  const updateModal = async () => {
    setToggle(() => {
      return !toggle;
    });
    const newField = {
      name: name,
      role: role,
      details: smallDescription,
      facebooklink: facebookLink,
      twitterlink: twitterLink,
      linkedinlink: linkedInLink,
      imagelink: imageLink,
    };
    const userDoc = doc(db, "professionalTeam", id);
    await updateDoc(userDoc, newField).then(() => {
      setID("");
      setName("");
      setImageLink("");
      setRole("");
      setFacebookLink("");
      setLinkedInLink("");
      setTwitterLink("");
      setSmallDescription("");
      refreshData();
    });
  };
  const closeModal = () => {
    setID("");
    setName("");
    setImageLink("");
    setRole("");
    setFacebookLink("");
    setLinkedInLink("");
    setTwitterLink("");
    setSmallDescription("");
    setToggle(() => {
      return !toggle;
    });
  };
  const openModal = (
    id: SetStateAction<string>,
    name: SetStateAction<string>,
    imagelink: SetStateAction<string>,
    role: SetStateAction<string>,
    facebooklink: SetStateAction<string>,
    linkedinlink: SetStateAction<string>,
    twitterlink: SetStateAction<string>,
    details: SetStateAction<string>
  ) => {
    setID(id);
    setName(name);
    setImageLink(imagelink);
    setRole(role);
    setFacebookLink(facebooklink);
    setLinkedInLink(linkedinlink);
    setTwitterLink(twitterlink);
    setSmallDescription(details);
    setToggle(() => {
      return !toggle;
    });
  };
  return (
    <div>
      <div>
        <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow">
          <p className="text-center text-3xl font-bold text-gray-800 dark:text-white">
            Professional team
          </p>

          <p className="text-center mb-12 text-xl font-normal text-gray-500 dark:text-gray-200">
            Meat the best team in wolrd
          </p>

          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-3  items-center mx-auto">
              {data1.map((item: any, i: Key | null | undefined) => {
                return (
                  <div className="p-4" key={i}>
                    <div className="text-center mb-4 opacity-90">
                      <a href="#" className="block relative">
                        <img
                          alt="profil"
                          src={item.imagelink}
                          className="mx-auto object-cover rounded-full h-40 w-40 "
                        />
                      </a>
                    </div>
                    <div className="text-center i">
                      <p className="text-2xl text-gray-800 dark:text-white">
                        {item.name}
                      </p>
                      <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                        {item.role}
                      </p>
                      <p className="text-md text-gray-500 dark:text-gray-400 max-w-xs mx-auto py-4 font-light">
                        {item.details}
                      </p>
                    </div>
                    <div className="pt-8 flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-between">
                      <Link href={item.facebooklink} passHref>
                        <svg
                          width={30}
                          height={30}
                          fill="currentColor"
                          className=" cursor-pointer text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z" />
                        </svg>
                      </Link>

                      <Link href={item.twitterlink} passHref>
                        <svg
                          width={30}
                          height={30}
                          fill="currentColor"
                          className=" cursor-pointer text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z" />
                        </svg>
                      </Link>

                      <Link href={item.linkedinlink} passHref>
                        <svg
                          width={30}
                          height={30}
                          fill="currentColor"
                          className=" cursor-pointer text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z" />
                        </svg>
                      </Link>
                    </div>
                    <div className="w-14 mx-auto mt-8 ">
                      <a
                        href="#my-modal"
                        className="btn btn-primary btn-sm"
                        onClick={() => {
                          openModal(
                            item.id,
                            item.name,
                            item.imagelink,
                            item.role,
                            item.facebooklink,
                            item.linkedinlink,
                            item.twitterlink,
                            item.details
                          );
                        }}
                      >
                        Edit
                      </a>
                    </div>
                    {toggle && (
                      <div>
                        <div id="my-modal" className="modal">
                          <div className="modal-box">
                            <div className="grid min-h-screen place-items-center">
                              <div className="w-11/12 bg-white">
                                <h1 className="text-xl font-semibold">
                                  Hello there 👋,
                                  <span className="font-normal">
                                    please fill in your information to continue
                                  </span>
                                </h1>
                                <form className="mt-6">
                                  <div className="flex justify-between gap-3">
                                    <span className="w-full">
                                      <label className="block text-xs font-semibold text-gray-600 uppercase">
                                        Name
                                      </label>
                                      <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => {
                                          setName(e.target.value);
                                        }}
                                        className="block w-full p-1 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                      />
                                    </span>
                                  </div>
                                  <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                                    Role
                                  </label>
                                  <input
                                    type="text"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    className="block w-full p-1 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                  />
                                  <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                                    Details
                                  </label>
                                  <input
                                    type="text"
                                    value={smallDescription}
                                    onChange={(e) =>
                                      setSmallDescription(e.target.value)
                                    }
                                    className="block w-full p-1 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                  />
                                  <label className="block text-xs font-semibold text-gray-600 uppercase">
                                    Facebook Link
                                  </label>
                                  <input
                                    type="text"
                                    value={facebookLink}
                                    onChange={(e) =>
                                      setFacebookLink(e.target.value)
                                    }
                                    className="block w-full p-1 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                  />
                                  <label className="block text-xs font-semibold text-gray-600 uppercase">
                                    Twitter Link
                                  </label>
                                  <input
                                    type="text"
                                    value={twitterLink}
                                    onChange={(e) =>
                                      setTwitterLink(e.target.value)
                                    }
                                    className="block w-full p-1 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                  />
                                  <label className="block text-xs font-semibold text-gray-600 uppercase">
                                    LinkedIn Link
                                  </label>
                                  <input
                                    type="text"
                                    value={linkedInLink}
                                    onChange={(e) =>
                                      setLinkedInLink(e.target.value)
                                    }
                                    className="block w-full p-1 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                  />

                                  <button
                                    className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
                                    onClick={updateModal}
                                  >
                                    Update
                                  </button>
                                  <button
                                    className="w-full py-3 mt-2  font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
                                    onClick={closeModal}
                                  >
                                    Close
                                  </button>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            {addNewToggle && (
              <div>
                <div id="addSpan" className="modal">
                  <div className="modal-box">
                    <div className="grid min-h-screen place-items-center">
                      <div className="w-11/12 bg-white">
                        <h1 className="text-xl font-semibold">
                          Hello there 👋,
                          <span className="font-normal">
                            please fill in your information to continue
                          </span>
                        </h1>
                        <form className="mt-6">
                          <div className="flex justify-between gap-3">
                            <span className="w-full">
                              <label className="block text-xs font-semibold text-gray-600 uppercase">
                                Name
                              </label>
                              <input
                                type="text"
                                placeholder="Enter A Name"
                                onChange={(e) => {
                                  setName(e.target.value);
                                }}
                                className="block w-full p-1 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                              />
                            </span>
                          </div>
                          <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                            Role
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Your Role"
                            onChange={(e) => setRole(e.target.value)}
                            className="block w-full p-1 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                          />
                          <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                            Details
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Your Small Details"
                            onChange={(e) =>
                              setSmallDescription(e.target.value)
                            }
                            className="block w-full p-1 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                          />
                          <label className="block text-xs font-semibold text-gray-600 uppercase">
                            Facebook Link
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Your Facebook Link"
                            onChange={(e) => setFacebookLink(e.target.value)}
                            className="block w-full p-1 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                          />
                          <label className="block text-xs font-semibold text-gray-600 uppercase">
                            Twitter Link
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Your Twitter Link"
                            onChange={(e) => setTwitterLink(e.target.value)}
                            className="block w-full p-1 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                          />
                          <label className="block text-xs font-semibold text-gray-600 uppercase">
                            LinkedIn Link
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Your LinkedIn Link"
                            onChange={(e) => setLinkedInLink(e.target.value)}
                            className="block w-full p-1 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                          />

                          <button
                            className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
                            onClick={uploadModal}
                          >
                            Upload
                          </button>
                          <button
                            className="w-full py-3 mt-2  font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
                            onClick={closeAddModal}
                          >
                            Close
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <a href="#addSpan">
              <button
                className="btn btn-sm"
                onClick={() => {
                  setAddNewToggle(true);
                }}
              >
                Add New
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackProfessionalT;
