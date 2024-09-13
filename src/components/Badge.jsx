"use client";
import CountUp from "react-countup";

const Badge = ({
  containerStyles,
  icon,
  endCountNum,
  endCountText,
  badgeText,
}) => {
  return (
    <>
      <div
        className={`lg:badge bg-white p-1.5 lg:px-5 lg:p-2.5 rounded-2xl w-[9.1rem] lg:w-fit border flex justify-center items-center space-x-1 ${containerStyles}`}
      >
        <div className="lg:text-3xl text-2xl text-primary">{icon}</div>
        <div className="flex items-center lg:gap-x-2 gap-x-1">
          <div className="lg:text-4xl text-3xl leading-none font-bold text-primary">
            <CountUp end={endCountNum} delay={1} duration={4} />
            {endCountText}
          </div>
          <div className="lg:max-w-[70px] lg:leading-none leading-none text-[15px] text-center font-bold text-black">
            {badgeText}
          </div>
        </div>
      </div>
    </>
  );
};

export default Badge;
