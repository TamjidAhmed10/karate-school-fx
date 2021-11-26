/* eslint-disable @next/next/no-img-element */
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Caurosal2 = () => {
  return (
    <div>
      <Splide
        options={{
          rewind: true,
          gap: "1rem",
          autoplay: true,
          pauseOnHover: false,
          interval: 3000,
        }}
      >
        <SplideSlide>
          <div className=" thumbnail">
            <img
              src="1.jpg"
              alt="Image 1"
              className="object-cover  w-full block"
            />
            
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className=" thumbnail">
            <img src="2.jpg" alt="Image 2" className="object-cover w-full" />
            
          </div>
        </SplideSlide>
        <SplideSlide>
          <img src="3.jpg" alt="Image 2" className="object-cover  w-full" />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Caurosal2;
