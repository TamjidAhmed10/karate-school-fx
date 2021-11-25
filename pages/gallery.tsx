const imagelinks = [
  { imagelink: "http://karateschool.se/images/gallery/1610473913.jpg" },
  { imagelink: "http://karateschool.se/images/gallery/1610474033.jpg" },
  { imagelink: "http://karateschool.se/images/gallery/1610474117.jpg" },
  { imagelink: "http://karateschool.se/images/gallery/1610474285.jpg" },
  { imagelink: "http://karateschool.se/images/gallery/1610474605.jpg" },
  { imagelink: "http://karateschool.se/images/gallery/1610474674.jpg" },
  { imagelink: "http://karateschool.se/images/gallery/1610474906.jpg" },
  { imagelink: "http://karateschool.se/images/gallery/1610821095.jpg" },
];
import Masonry from "react-masonry-css";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import useStore from "../zust/zustfig";
import Instructors from "../Components/Instructors";
import Footer from "../Components/Footer";
const Gallery = () => {
     const { toggle, setToggle } = useStore();
     const [urlLink, setUrlLink] = useState("");
     const breakpointColumnsObj = {
       default: 4,
       1100: 3,
       700: 2,
       500: 1,
     };
  return (
    <div>
      <div>
        <Navbar />
        <Instructors writings="Gallery" />
        <h1 className="font-bold text-4xl py-6 text-center"> Gallery </h1>
        <div className={"center-masonry w-9/12 mx-auto z-50"}>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {imagelinks.map((post, i) => {
              return (
                <div
                  key={i}
                  className={toggle ? "filter blur-lg" : ""}
                  onClick={() => {
                    setToggle(true);
                    setUrlLink(post.imagelink);
                  }}
                >
                  <img src={post.imagelink} alt="dd" className="rounded-lg	" />
                </div>
              );
            })}
          </Masonry>
          {toggle && (
            <div
              className="fixed bg-black  bg-opacity-60 inset-0 flex justify-center items-center z-80"
              onClick={() => {
                setToggle(false);
              }}
            >
              <div className="relative ">
                <img
                  src={urlLink}
                  alt="yoo"
                  className=" object-contain h-screen p-8 w-full"
                />
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Gallery;
