import Image from "next/image";
const Test = () => {
  return (
    <div>
      <div className="hero p-10">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <img
            src="http://karateschool.se/images/instructor/instructor-1.jpg"
            className=" rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="mb-2 text-3xl font-bold text-center">
              Nour Aldin Alkurdi (SENPAI)
            </h1>
            <p className="mb-5 text-center">
              He started karate in 2007 and received 2nd Dan in Shotokan style.
              2014 he stood 2nd place in Asain Karate Championship in Malaysia.
              He received many national and international medals. Before he
              moved to Sweden he was in Syrian national team. Besides Karate he
              is training artistic gymnastics.
            </p>
          </div>
        </div>
      </div>
      <div className="hero p-10">
        <div className="flex-col  hero-content lg:flex-row-reverse">
          <div>
            <h1 className="mb-2 text-3xl font-bold text-center">
              Shirin Davarpanah Jazi (SENPAI)
            </h1>
            <p className="mb-5 text-center">
              Shirin Davarpanah Jazi was born in Iran in 1985 and began her
              Karate training in 1992. Over the years she has trained with
              amazing instructors in Shotokan and Shitoryu styles in England,
              Iran and Canada. During the 2000’s she was a successful athlete at
              the provincial, national and international levels. In 2002 she
              started officiating and became the first Iranian female to receive
              international officiating degree. By 2010 she transitioned into
              coaching and managed her own club before immigrating to Canada. In
              Canada she continued her passion for officiating and received her
              Canadian and PanAmerican officiating degrees. Before relocating to
              Sweden, she trained under the guidance of Kyoshi Allen Tanzadeh
              (8th Dan, Shitoryu) in Canada. Shirin currently holds 5th Dan
              black belt in Shotokan and 1st Dan black belt in Shitoryu. Apart
              from her Karate career, Shirin has completed a PhD in Human
              Neuroscience, as well as being a physiotherapist. She is an expert
              in human movement and physical fitness.
            </p>
          </div>
          <img
            src="http://karateschool.se/images/instructor/instructor-1.jpg"
            className=" rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Test;
