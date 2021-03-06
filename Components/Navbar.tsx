import { useEffect, useState } from "react";
import { useScrollDirection } from "react-use-scroll-direction";
import { Transition } from "@headlessui/react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useWindowSize } from "react-use";
import Image from "next/image";
import Link from "next/link";

import useStore from "../zust/zustfig";

const Navbar: React.FC = () => {
  const { toggle } = useStore();

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
          toggle
            ? "invisible"
            : "custombgcolor border-b-2  sticky z-10  ease-in-out duration-700 " +
              (direction ? " top-0 " : " -top-36 ")
        }
      >
        <div className="navbar text-black lg:ml-16 lg:mr-4">
          <Link href="/" passHref={true}>
            <div
              className="flex-1  px-2 mx-2 cursor-pointer "
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <Image
                src="/mainlogo.png"
                alt="Picture of the author"
                width={68}
                height={68}
                className=" object-contain "
              />

              <span
                className="pl-1 text-lg font-bold pt-1"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                LSKK
              </span>
            </div>
          </Link>

          <div className="flex-shrink hidden px-2 mx-2 lg:flex">
            <div className="flex items-stretch">
              <Link href="/" passHref={true}>
                <a className="btn btn-ghost btn-sm rounded-btn">HOME</a>
              </Link>
              <Link href="/instructor" passHref={true}>
                <a className="btn btn-ghost btn-sm rounded-btn">INSTRUCTOR</a>
              </Link>
              <Link href="/class" passHref={true}>
                <a className="btn btn-ghost btn-sm rounded-btn">CLASS</a>
              </Link>
              <Link href="/gallery" passHref={true}>
                <a className="btn btn-ghost btn-sm rounded-btn">GALLERY</a>
              </Link>
              <Link href="/events" passHref={true}>
                <a className="btn btn-ghost btn-sm rounded-btn">EVENT & NEWS</a>
              </Link>
              <Link href="/contact" passHref={true}>
                <a className="btn btn-ghost btn-sm rounded-btn">CONTACT US</a>
              </Link>
              <Link href="/history" passHref={true}>
                <a className="btn btn-ghost btn-sm rounded-btn">History</a>
              </Link>
              <Link href="/shop" passHref={true}>
                <a className="btn btn-ghost btn-sm rounded-btn">SHOP</a>
              </Link>
            </div>
          </div>

          <div className="flex-none">
            <button
              className="btn btn-square btn-ghost lg:hidden"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {isOpen ? <ImCross /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      <div className="fixed z-50 -mt-1 w-full">
        <Transition
          show={isOpen}
          enter="transition-opacity duration-110"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="  custombgcolor grid grid-cols-1 text-black justify-center text-center  lg:hidden ">
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
              INSTRUCTOR
            </div>

            <div
              className="py-3 border-t-2  border-gray-600 cursor-pointer"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              CLASS
            </div>
            <div
              className="py-3 border-t-2 border-gray-600 cursor-pointer"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              GALLERY
            </div>
            <div
              className="py-3 border-t-2 border-gray-600 cursor-pointer"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              EVENT & NEWS
            </div>
            <div
              className="py-3 border-t-2 border-gray-600 cursor-pointer"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              CONTACT US
            </div>
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
              SHOP
            </div>

            <div
              className="py-3 border-t-2 border-gray-600 cursor-pointer"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              HOME
            </div>
          </div>
        </Transition>
      </div>
    </>
  );
};

export default Navbar;
