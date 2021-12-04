/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config/firebase-config";
const TableOf = () => {
  const [users, setUsers] = useState([]);
  const collectionRef = collection(db, "membersx");

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
    getUsers();
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-3xl text-center">Table Of Members</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full table-zebra">
          <thead>
            <tr>
              <th>Ser</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Address</th>
              <th>Karate Type</th>
              <th>Birthdate</th>
              <th>Age</th>
              <th>Submitted date</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item: any, index) => {
              return (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{item.fullName}</td>
                  <td>{item.gender}</td>
                  <td>{item.emailAdress}</td>
                  <td>{item.adress}</td>
                  <td>{item.karateType}</td>
                  <td>{item.birthDate}</td>
                  <td>{item.age}</td>
                  <td>{item.submitDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableOf;
