const data = {
  springterm: "Vårterminen(spring term) - ",
  springtermduration: "January to June",
  springweekdays: "Wednesday and Thursday :",
  springternoobie: "16:30 - 17:30 and 17:30-18:30 (nybörjare)",
  springterpro: "18:30-19:30 (redan har kunskap)",
  springfeesforkids: "from 4 years to 25 years 700 SEK",
  springfeesforadult: "from 25 years to above 1000 SEK",
  autumterm: "Vårterminen(spring term) - ",
  autumtermduration: "January to June",
  autumweekdays: "Wednesday and Thursday :",
  autumternoobie: "16:30 - 17:30 and 17:30-18:30 (nybörjare)",
  autumterpro: "18:30-19:30 (redan har kunskap)",
  autumfeesforkids: "from 4 years to 25 years 700 SEK",
  autumfeesforadult: "from 25 years to above 1000 SEK",
};
const BackClass = () => {
  return (
    <div>
      <div className=" py-8 " style={{ backgroundColor: "#E6EFB7" }}>
        <h1 className="text-3xl text-center mb-4">Class and Session</h1>

        <div className=" grid  md:grid-flow-col md:auto-cols-min  justify-center ">
          <div className=" w-full md:w-64 ">
            <div className=" text-center md:text-right tracking-wide	">
              <h4 className=" text-2xl ">
                Vårterminen(spring term) - <br />
                January to June
              </h4>
              <p className="">Wednesday &amp; Thursday :</p>
              <p className="">16:30 - 17:30 and 17:30-18:30 (nybörjare)</p>
              <p className="">18:30-19:30 (redan har kunskap)</p>
              <div className="md:border-b-2 md:border-gray-900 " />
              <span className="">
                <b>Fees(per term)</b>
              </span>
              <p className="">
                from 4 years to 25 years 700 SEK
                <br />
                from 25 years to above 1000 SEK
              </p>

              <button className="btn btn-info ">Register</button>
              <button className="btn btn-sm">Edit</button>
              <div className="border-b-2 my-8 border-gray-900 md:hidden" />
            </div>
          </div>
          <div className="divider divider-vertical " />

          <div className=" w-full md:w-64">
            <div className="text-center md:text-left tracking-wide	">
              <h4 className=" text-2xl">
                Höstterminen(Autum term)- <br />
                August to December
              </h4>
              <p className="">Wednesday &amp; Thursday :</p>
              <p className="">16:30 - 17:30 and 17:30-18:30 (nybörjare)</p>
              <p className="">18:30-19:30 (redan har kunskap)</p>
              <div className="md:border-b-2 md:border-gray-900  " />

              <span className="">
                <b>Fees(per term)</b>
              </span>
              <p className="">
                from 4 years to 25 years 700 SEK
                <br />
                from 25 years to above 1000 SEK
              </p>

              <button className="btn  btn-info ">Register</button>
              <div className=""></div>
            </div>
          </div>
        </div>
        <div className="text-center p-10">
          <h2 className="text-2xl font-bold ">Friday</h2>
          <h3 className="text-2xl ">Body Carate</h3>
          <h4 className="text-xl py-1">From 17:00 to 18:00 (Mix training)</h4>
          <button className="btn  btn-info ">Register</button>
        </div>
      </div>
    </div>
  );
};

export default BackClass;
