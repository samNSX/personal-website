import profileColorfullImg from "./assets/sam_profile.png";
const Introduction = () => {
  return (
    <div className="flex justify-center sm:items-center pt-24 sm:pt-0 sm:h-screen">
      <div className="px-5">
        <div className="flex justify-center pb-2 blurIn opacity-0 blur-0">
          <div className="relative">
            <img
              className="w-[200px] sm:w-[250px] relative z-1"
              src={profileColorfullImg}
              alt=""
            />

            <img
              className="absolute top-0 left-0 w-[200px] sm:w-[250px] blur-[23px] translate-x-[12px] translate-y-[24px]"
              src={profileColorfullImg}
              alt=""
            />
          </div>
        </div>
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
        <div className="flex flex-col items-center justify-center fadeInBottom my-8">
          <p className="text-xl leading-[37px]">
            To the person reading this, my name is Samuel Lu and I would like
            thank you for taking time out of your day to arrive at my page. Here
            you can learn more about me, see what projects I have been a part
            of, my experiences, any certificates or licenses I obtained, and
            finally contact information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
