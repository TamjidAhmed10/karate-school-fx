const Test = () => {
  return (
    <div className=" ">
      <h1 className="text-3xl text-center mb-10">Class and Session</h1>
      <div className=" grid grid-flow-col auto-cols-min  justify-center ">
        <div className=" w-64 ">
          <div className=" text-right">
            <h4 className=" text-2xl ">
              Vårterminen(spring term) - <br />
              January to June
            </h4>
            <p className="">Wednesday &amp; Thursday :</p>
            <p className="">16:30 - 17:30 and 17:30-18:30 (nybörjare)</p>
            <p className="">18:30-19:30 (redan har kunskap)</p>
            <div className="divider" />
            <span className="session-fees-font-size">
              <b>Fees(per term)</b>
            </span>
            <p className="">
              from 4 years to 25 years 700 SEK
              <br />
              from 25 years to above 1000 SEK
            </p>

            <button className="btn btn-info ">Register</button>
          </div>
        </div>
        <div className="divider divider-vertical h-full" />

        <div className=" w-64">
          <div className=" text-left">
            <h4 className=" text-2xl">
              Höstterminen(Autum term)- <br />
              August to December
            </h4>
            <p className="">Wednesday &amp; Thursday :</p>
            <p className="">16:30 - 17:30 and 17:30-18:30 (nybörjare)</p>
            <p className="">18:30-19:30 (redan har kunskap)</p>
            <div className="divider" />
            {/* <p style="font-size: 20px;">Fess: 600k</p> */}
            <span className="">
              <b>Fees(per term)</b>
            </span>
            <p className="">
              from 4 years to 25 years 700 SEK
              <br />
              from 25 years to above 1000 SEK
            </p>

            <button className="btn  btn-info ">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
