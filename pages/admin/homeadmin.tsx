import BackLogo from "../../Components/Back-end-comp/BackLogo";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config/firebase-config";
import LSSK from "../../Components/Back-end-comp/LSSK";
import Professional from "../../Components/Back-end-comp/Professional";
import ClassTime from "../../Components/Back-end-comp/ClassTime";
import PaymentMethod from "../../Components/Back-end-comp/PaymentMethod";
import FAQB from "../../Components/Back-end-comp/FAQB";
const Homeadmin = ({
  finalLogoData,
  lsskdetails,
  professionalteam,
  classtimes,
  paymentmethod,
  faq,
}: any) => {
  return (
    <div>
      <BackLogo data={finalLogoData} />
      <LSSK data={lsskdetails} />
      <Professional data={professionalteam} />
      <ClassTime data={classtimes} />
      <PaymentMethod data={paymentmethod} />
      <FAQB data={faq} />
    </div>
  );
};

export default Homeadmin;

export async function getServerSideProps() {
  const collectionRef = collection(db, "logos-associated");
  const logodata: any = await getDocs(collectionRef);
  const lsskcollectionRef = collection(db, "lsskdetails");
  const lsskdetailsget: any = await getDocs(lsskcollectionRef);
  const professionalcollectionRef = collection(db, "professionalTeam");
  const professionalteamget: any = await getDocs(professionalcollectionRef);
  const classtimescollectionRef = collection(db, "classtimes");
  const classtimesget: any = await getDocs(classtimescollectionRef);
  const paymentmethodcollectionRef = collection(db, "paymentmethod");
  const paymentmethodget: any = await getDocs(paymentmethodcollectionRef);
  const faqcollectionRef = collection(db, "faq");
  const faqget: any = await getDocs(faqcollectionRef);
  const finalLogoData = logodata.docs.map(
    (doc: { data: () => any; id: any }) => ({
      ...doc.data(),
      id: doc.id,
    })
  );
  const lsskdetails = lsskdetailsget.docs.map(
    (doc: { data: () => any; id: any }) => ({
      ...doc.data(),
      id: doc.id,
    })
  );
  const professionalteam = professionalteamget.docs.map(
    (doc: { data: () => any; id: any }) => ({
      ...doc.data(),
      id: doc.id,
    })
  );
  const classtimes = classtimesget.docs.map(
    (doc: { data: () => any; id: any }) => ({
      ...doc.data(),
      id: doc.id,
    })
  );
  const paymentmethod = paymentmethodget.docs.map(
    (doc: { data: () => any; id: any }) => ({
      ...doc.data(),
      id: doc.id,
    })
  );
  const faq = faqget.docs.map((doc: { data: () => any; id: any }) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return {
    props: {
      finalLogoData,
      lsskdetails,
      professionalteam,
      classtimes,
      paymentmethod,
      faq,
    }, // will be passed to the page component as
  };
}
