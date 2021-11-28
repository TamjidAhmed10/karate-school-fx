import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase-config/firebase-config";
import { TiTick } from "react-icons/ti";
import { useState, useEffect } from "react";
import Logos from "../Components/Back-end-comp/Logos";
import ClubWritings from "../Components/Back-end-comp/ClubWritings";
import BackSlideForm from "../Components/Back-end-comp/BackSlideForm";
import BackProfessionalT from "../Components/Back-end-comp/BackProfessionalT";

const Test2 = ({ finalLogoData }: any) => {
 
  return (
    <div>
      {/* <ClubWritings data={{finalLogoData}}/> */}
      <BackProfessionalT data={finalLogoData} />
    </div>
  );
};

export default Test2;

export async function getServerSideProps() {
  const collectionRef = collection(db, "professionalTeam");
  const logodata: any = await getDocs(collectionRef);
  const finalLogoData = logodata.docs.map(
    (doc: { data: () => any; id: any }) => ({
      ...doc.data(),
      id: doc.id,
    })
  );

  return {
    props: { finalLogoData }, // will be passed to the page component as props
  };
}

// export async function getServerSideProps() {
//     const collectionRef = collection(db, "clubwritings");
//     const logodata: any = await getDocs(collectionRef);
//     const finalLogoData = logodata.docs.map(
//       (doc: { data: () => any; id: any }) => ({
//         ...doc.data(),
//         id: doc.id,
//       })
//     );

//     return {
//       props: { finalLogoData }, // will be passed to the page component as props
//     };
// }
