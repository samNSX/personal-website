import profileColorfullImg from "./assets/sam_profile.png";
const Introduction = () => {
  return (
    <div className="flex justify-center sm:items-center pt-24 sm:pt-0 h-screen">
      <div className="px-5">
        <h1 className="font-bold text-[43px] sm:text-6xl leading-[1em] mb-5 lg:whitespace-nowrap text-center">
          <span className="block fadeInLeft">
            <span>Hello, I'm</span>
            <span className="hidden sm:inline"> </span>
            <span className="block sm:inline">Samuel Lu</span>
          </span>
          <div className="text-xl my-3 text-gray-500 fadeInRight">
            GigaByte Technical Support Representative
          </div>
        </h1>
        <div className="flex flex-col items-center justify-center fadeInBottom">
          <p className="text-xl leading-[37px]">
            To the person reading this, my name is Samuel Lu and I would like
            thank you for taking time out of your day to arrive at my page. Here
            you can learn more about me, see what projects I have been a part
            of, my experiences, any certificates or licenses I obtained, and
            finally contact information.
          </p>
        </div>
        {/* <div className="flex justify-center pb-16">
          <div className="relative">
            <img className="w-[300px]" src={profileColorfullImg} alt="" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Introduction;
