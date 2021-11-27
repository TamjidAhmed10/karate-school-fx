import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase-config/firebase-config";
import { TiTick } from "react-icons/ti";
import { useState, useEffect } from "react";
import Logos from "../Components/Back-end-comp/Logos";

const Test2 = () => {
  return (
    <div>
      <Logos />
    </div>
  );
};

export default Test2;
