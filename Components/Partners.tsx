const Partners = () => {
  return (
    <div>
      <section className="pt-7 pb-14" style={{ backgroundColor: "#FDFFDE " }}>
        <div className="container px-8 mx-auto sm:px-12 lg:px-20">
          <h1
            className="text-2xl font-bold tracking-wide text-center  uppercase mb-7"
            style={{ color: "#847B00" }}
          >
            Affiliated at Home and Abroad
          </h1>
          <div className=" grid items-center justify-center grid-cols-6  gap-y-8">
            <div className="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2">
              <img
                src="https://cdn.devdojo.com/tails/images/disney-plus.svg"
                alt="Disney Plus"
                className="block object-contain h-12"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
