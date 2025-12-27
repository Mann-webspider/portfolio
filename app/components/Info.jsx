
function Info(props) {
  return (
    <div>
      <div className="flex relative  xl:pl-44 pl-10 xl:text-[5rem] md:text-[3rem] text-[2rem] uppercase font-[itcBold] border-y-2 border-gray-400 text-text hover:bg-primary hover:text-background duration-300   w-full">
        <div className="flex flex-row xl:justify-between md:justify-between justify-around   w-full xl:pr-64 items-center md:pl-20">
        {props.title}
        <p className="xl:text-[0.9rem] text-[0.6rem] px-5  md:text-[0.8rem] font-[itcMedium] xl:w-96 md:px-10 md:leading-4 leading-3 md:w-96 w-48 text-background select-none capitalize">
        {props.desc}
        </p>
        </div>
      </div>
      {/* <br /> */}
    </div>
  );
}

export default Info;
