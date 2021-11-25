const Instructors = (props: any) => {
    return (
      <div className="">
        <div
          style={{
            backgroundImage: "url(/fix1.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className=" "
            style={{
              backgroundColor: "rgba(109, 104, 117, .45)",
            }}
          >
            <div className=" w-full h-52 z-20 relative">
              <h2
                className=" text-3xl lg:text-4xl pl-8 lg:pl-24 font-bold text-yellow-50"
                style={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  textShadow: "2px 2px 4px #000000",
                }}
              >
               {props.writings}
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Instructors
