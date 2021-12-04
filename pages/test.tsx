import countapi from "countapi-js";
import { useEffect } from "react";
const Test = () => {
  useEffect(() => {
    countapi.visits("tamjid10").then((result) => {
      console.log(result.value);
    });
  }, []);
  return <div></div>;
};

export default Test;
