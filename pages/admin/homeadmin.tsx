import BackLogo from "../../Components/Back-end-comp/BackLogo";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config/firebase-config";

const Homeadmin = ({ finalLogoData }: any) => {
  return (
    <div>
      <BackLogo data={finalLogoData} />
    </div>
  );
};

export default Homeadmin;

export async function getServerSideProps() {
  const collectionRef = collection(db, "logos-associated");
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
