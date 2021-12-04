import { useEffect, useState } from "react";
import FormX from "../Components/FormX";
import useStore from "../zust/zustfig";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase-config/firebase-config";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const Memberform = () => {
  const { formdata } = useStore();
  const usersCollectionRef = collection(db, "membersx");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fireStoreFun = async () => {
      if (formdata != "") {
        await addDoc(usersCollectionRef, formdata);
      }
    };
    fireStoreFun();
  }, [formdata, usersCollectionRef]);
  useEffect(() => {
    const getUsers = async () => {
      const data: any = await getDocs(usersCollectionRef);
      setUsers(
        data.docs.map((doc: { data: () => any; id: any }) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Navbar />
      <FormX />
      <Footer />
    </div>
  );
};

export default Memberform;
