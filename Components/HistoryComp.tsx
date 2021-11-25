const data = {
  imagelink: "http://karateschool.se/images/shotokan_history/shotokan.jpg",
  blogpost:
    "Karate was introduced to Japan in 1922 by an Okinawan schoolteacher Gichin Funakoshi, he is widely considered as the 'Father' of modern karate. He was born in 1868 and learnt karate from two highly respected Okinawan masters of the art, Yasutsune(Ankoh) Itosu and Yasutsune(Anko) Azato.\n" +
    "\n" +
    "Funakoshi modified the art, taking inspiration from traditional Japanese budo styles(kendo, judo, etc.) and emphasized the philosophical aspects. It was this new Karate-do that he took to Japan and was the first expert to introduce the art to the mainland in Japan.\n" +
    "\n" +
    "In 1916 Master Funakoshi gave a demonstration to the Butokuden in Kyoto- Japan, which at that time the official center of all martial arts. in the early of 1922 Master Funakoshi travelled to Tokyo to present his art at the First National Athletics exhibition in Tokyo organized by the Ministry of education. For Master Funakoshi, the word karate eventually took on a deeper and broader meaning through the synthesis of these many methods becoming karate-do, literally the 'way of karate' or the 'empty hand'.\n" +
    "\n" +
    "There are several Shotokan karate organizations are training Shotokan karate, we are member of SKIF(Shotokan Karate International Karate Federation). SKIF was established in 1987 by Late Hirokazu Kanazawa who had studied directly under the Grand Master Gichin Fonakoshi and was the Director and General Manager for Foreign Affair Division of Japan Karate Association (JKA) before Master Kanazawa founded SKIF.\n" +
    "\n" +
    "SKIF is a specified Non-profit Organizationin Japan has been expanding its activities since its founding and now has affiliated groups in over 130 countries worldwide.\n" +
    "\n" +
    "The philosophy of SHOTOKAN KARATE-DO is based on the traditional Budo sprits of karate which seeks for the perfection of character through hard training and discipline. In addition to the traditional philosophy underpinned by Rei-To-Setsu and Dojo-kun. SKIF also seeks for the healthy mental and physical growth of youth and peaceful international Exchange of friendship through the training and competition.\n" +
    "\n" +
    "DOJO KUN\n" +
    "1. SEEK PERFECTION OF CHARACTER\n" +
    "1. BE SINCERE\n" +
    "1. PUT MAXIMUM EFFORT INTO EVERYTHING YOU DO\n" +
    "1. RESPECT OTHERS\n" +
    "1. DEVELOP SELF CONTROL",
  imagelinkoflskk:
    "http://karateschool.se/images/shotokan_history/1607479792.jpg",
  bodycarateData:
    "In 2017 Sensei Shahnawaz Jinnah established School of Shotokan karate-do\
        with Colobri KFUK-KFUM, in 2020 Sensei Jinnah started a new förening:\
        Limhamns Shotokan Karateklubb, org nr. 802522-6781.This karate club is\
        affiliated by Swedish Karate Federation (Svensk Karate förbundet), Skåne\
        Karate Förbundet, and RF-SISU. It has also international affiliation by\
        Shotokan Karate-do International Federation(SKIF) - Denmark",
};

const HistoryComp = () => {
  return (
    <div>
      <div className=" md:w-9/12 mx-auto">
        <h1 className="text-center text-3xl py-6">
          History of Shotokan Karate
        </h1>
        <img src={data.imagelink} alt="" className="  " />
        <p className=" text-justify text-lg p-4  whitespace-pre-wrap">
          {data.blogpost}
        </p>
        <h1 className="text-center text-3xl pt-10">
          LIMHAMNS SHOTOKAN KARATE KLUBB (LSKK)
        </h1>
        <p className="text-lg p-4 text-center">
          (a member of School of Shotokan Karate)
        </p>
        <img
          src={data.imagelinkoflskk}
          alt=""
          className="w-full h-64 object-contain"
        />
        <p className="text-lg p-4 text-justify">
          In 2017 Sensei Shahnawaz Jinnah established School of Shotokan
          karate-do with Colobri KFUK-KFUM, in 2020 Sensei Jinnah started a new
          förening: Limhamns Shotokan Karateklubb, org nr. 802522-6781.This
          karate club is affiliated by Swedish Karate Federation (Svensk Karate
          förbundet), Skåne Karate Förbundet, and RF-SISU. It has also
          international affiliation by Shotokan Karate-do International
          Federation(SKIF) - Denmark
        </p>
        <h1 className="text-center text-3xl pt-10">BODY KARATE</h1>
        <p className="text-lg p-4 text-justify">{data.bodycarateData}</p>
      </div>
    </div>
  );
};

export default HistoryComp;
