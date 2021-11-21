import { useEffect, useState } from "react";
import { useScrollDirection } from "react-use-scroll-direction";
import { Transition } from "@headlessui/react";
import { FaBars } from "react-icons/fa";
import { useWindowSize } from "react-use";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isScrollingUp, isScrollingDown } = useScrollDirection();
  const [direction, setDirection] = useState(true);
  const { width } = useWindowSize();

  useEffect(() => {
    if (isScrollingUp) {
      setDirection(true);
    } else if (isScrollingDown) {
      setDirection(false);
      setIsOpen(false);
    }
  }, [isScrollingUp, isScrollingDown]);
  useEffect(() => {
    if (width > 768) {
      setIsOpen(false);
    }
  }, [width]);

  return (
    <>
      <div
        className={
          "custombgcolor border-b-2  sticky z-10  ease-in-out duration-700 " +
          (direction ? " top-0 " : " -top-36 ")
        }
      >
        <div className="navbar text-black md:ml-36 md:mr-28">
          <div
            className="flex-1 px-2 mx-2 cursor-pointer"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <Image
              src="/favicon.ico"
              alt="Picture of the author"
              width={32}
              height={32}
              className=""
            />

            <span
              className="pl-1 text-lg font-bold"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Portfolio <small className="text-xs">by Tamjid</small>
            </span>
          </div>
          <div className="flex-none hidden px-2 mx-2 lg:flex">
            <div className="flex items-stretch">
              <a className="btn btn-ghost btn-sm rounded-btn">HOME</a>

              <a className="btn btn-ghost btn-sm rounded-btn">Certification</a>

              <a className="btn btn-ghost btn-sm rounded-btn">Contact</a>
            </div>
          </div>

          <div className="flex-none">
            <button
              className="btn btn-square btn-ghost md:hidden"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>
      <div className="fixed z-10 -mt-1 w-full">
        <Transition
          show={isOpen}
          enter="transition-opacity duration-110"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="  custombgcolor grid grid-cols-1 text-black justify-center text-center  md:hidden ">
            <div
              className="py-3 border-t-2 border-gray-600 cursor-pointer"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              HOME
            </div>

            <div
              className="py-3 border-t-2 border-gray-600 cursor-pointer"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Certification
            </div>

            <div
              className="py-3 border-t-2 border-b-2 border-gray-600 cursor-pointer"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Contact
            </div>
          </div>
        </Transition>
      </div>
    </>
  );
};

export default Navbar;
