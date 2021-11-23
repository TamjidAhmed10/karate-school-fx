/* eslint-disable @next/next/no-img-element */
const Details = () => {
  return (
    <div style={{ backgroundColor: "#F5FAB9" }}>
      <h1 className=" mt-10 text-center text-4xl" style={{ color: "#6E7600" }}>
        Limhamns Shotokan Karate Klubb (LSKK)
      </h1>
      <div className="grid gird-cols-1 md:grid-cols-2 p-5">
        <img
          src="/1.jpg"
          alt=""
          className=" h-full w-full object-cover rounded-xl"
        />
        <div className=" grid place-items-center ">
          <div className="py-4 px-2 md:p-10">
            <h2 className=" text-3xl text-center ">Our Philosophy</h2>
            <p className="text-justify ">
              Sensei Shahnawaz Jinnah, Black Belt 5th Dan, is the founder and
              chef instructor(Sensei) of Limhamns Shotokan Karateklubb(LSKK),
              Klagshamn-Malmö. Sensei Jinnah joined Danish Karate Federation
              (DKrF) in the late 90s and was represented Danish National Team
              for European Masters Karate Championship in 2008, and won Silver
              medal in Kata event. In 2014 & 2015 Sensei Jinnah won Gold medal
              in Danish National Karate Championship (DM), in Kata Master class
              event. DM 2016 Sensei Jinnah won Silver medal in the same event.
              In 2017 Sensei Jinnah won Gold medal (kata master class event) in
              SKIF European Shotokan Karate Championship which was held in Czech
              Repuplic. Before he started his own karate association and club he
              was the chief instructor of Musashi Shotokan Karate-do club at
              Velby-Copenhagen, Denmark. He is also licensed referee from
              DKrF(Danish Karate Federation) and Shotokan Karate International
              Federation (SKIF)- Europe
            </p>
          </div>
        </div>
      </div>
      <div className="grid gird-cols-1 md:grid-cols-2 p-5 ">
        <img
          src="/4.jpg"
          alt=""
          className="md:order-2 h-full w-full object-cover rounded-xl"
        />
        <div className=" grid place-items-center ">
          <div className="py-4 px-2 md:p-10">
            <h2 className=" text-3xl text-center ">Our Philosophy</h2>
            <p className="text-justify ">
              Limhamns Shotokan Karate Klubb (LSKK) is conducting all training
              sessions and classes in Klagshamn Folkets Hus, Klagshamn, Malmö. A
              well known ground for sports & leisure activities, it has all
              modern facilities and environment which we use to provide training
              for both adults and children groups. Regular health and safety
              procedures are followed under the strict guidelines of Limhamns
              Shotokan Karate Klubb (LSKK) and the ground facility providers. It
              is well connected to travel from anywhere in Malmö. Car parking
              facility is also available for visitors in this premise.
            </p>
          </div>
        </div>
      </div>
      <div className="grid gird-cols-1 md:grid-cols-2 p-5">
        <img
          src="/5.jpg"
          alt=""
          className=" h-full w-full object-cover rounded-xl"
        />
        <div className="py-4 px-2 md:p-10">
          <h2 className=" text-3xl text-center ">Our Philosophy</h2>
          <p className="text-justify ">
            We promote karate for not only the improvement of physical health
            but also for increasing mental wellbeing. Our sessions are helping
            both adults and children to gain physical strength, boost
            self-confidence and increasing performance in their everyday
            activities, self defense, concentration and focus. Limhamns Shotokan
            Karate Klubb (LSKK) is a unique karate school that helps learners to
            seek perfection of character, to be sincere and to develop
            self-control.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
