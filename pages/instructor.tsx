import Footer from "../Components/Footer";
import Instructors from "../Components/Instructors";
import Navbar from "../Components/Navbar";
import Referee from "../Components/Referee";
import Saga from "../Components/Saga";
import Senpie from "../Components/Senpie";
import Sense from "../Components/Sense";
const Instructor = () => {
  return (
    <div>
      <Navbar />
      <Instructors writings={"Instructors"} />
      <Sense />
      <Senpie />
      <Saga />
      <Referee />
      <Footer/>
    </div>
  );
};

export default Instructor;
