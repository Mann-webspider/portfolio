import React from "react";

function Info(props) {
  return (
    <div>
      <div className="flex relative  xl:pl-64 sm:pl-20 xl:text-[5rem] md:text-[3rem] sm:text-[3rem] uppercase font-[itcBold] border-y-2 border-gray-400 text-text hover:bg-primary hover:text-background duration-300   w-full">
        <div className="flex flex-row justify-between    w-full xl:pr-64 items-center ">
        {props.title}
        <p className="text-[0.9rem] font-[itcMedium] xl:w-96 leading-4 sm:w-full text-background select-none">
        {props.desc}
        </p>
        </div>
      </div>
      {/* <br /> */}
    </div>
  );
}

export default Info;
