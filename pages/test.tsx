import Image from "next/image";
import Class from "../Components/Class";
import Instructors from "../Components/Instructors";
const Test = () => {
  return (
    <div>
      <Instructors writings="Class" />
      <Class>
        <div className="w-11/12 mx-auto">
          <p className=" text-justify py-2">
            Our classes and sessions are designed for both adults and children.
            More than 30 years of experience in both national and international
            Karate organizations helps us to care for the need of individual
            learners of different age groups. From school children to corporate
            professionals, Limhamns Shotokan Karate Klubb (LSKK) is suitable for
            all. We also provide training sessions for professionals who want to
            take part in national and international competitions as an
            individual or as a team.
          </p>
          <p className="py-2">
            We train BODY KARATE every Friday (from 30 years to above). To train
            BODY KARATE you do not need any former experience. It is mixed with
            all kinds of punches and blocks, kicks, yoga, aerobics, and some
            cardio workout. In general, it is perfect training for both body
            conditions and fitness. Just come and join.
          </p>
          <p className="text-center py-2 ">
            We have divided our training schudle in two terms:
          </p>
          <p className="text-center py-2">
            Vårterminen (spring term)- January to June
          </p>
          <p className="text-center py-2">
            Höstterminen (Autum term)- August to December
          </p>
        </div>
      </Class>
    </div>
  );
};

export default Test;
