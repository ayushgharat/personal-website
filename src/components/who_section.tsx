"use client";
import ReactCurvedText from "react-curved-text";
import TextRevealByWord from "./ui/text-reveal";

const WhoAmI = () => {
  return (
    <div className="h-[200vh] flex-col">
      <TextRevealByWord text="Engineer by trade, Product Leader by passion, and Entrepreneur at heart." className="font-header" />
      
    </div>
  );
};

export default WhoAmI;
