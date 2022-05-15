const IntroProfile = () => {
  return (
    <div className="relative">
      <div
        className="sam_profile w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] relative z-1"
        style={`background-size: contain;
        background-position: center;
        background-repeat: no-repeat;`}
      ></div>
      <div
        className="absolute top-0 left-0 sam_profile w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] blur-[23px] translate-x-[12px] translate-y-[24px]"
        style={`background-size: contain;
        background-position: center;
        background-repeat: no-repeat;`}
      ></div>
    </div>
  );
};

export default IntroProfile;
