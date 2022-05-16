import Samuel_Lu_Resume from "./assets/Samuel_Lu_Resume.pdf";
import gigabyteImg from "./assets/Gigabyte.png";

const AboutMe = () => {
  return (
    <div className="flex justify-center sm:items-center pt-24 sm:pt-0 sm:h-screen fadeInBottomSm">
      <section className="">
        <h2 className="text-5xl font-bold">About Me</h2>

        <p className="my-5 leading-[37px]">
          I am a Business Administration and Marketing major currently at
          California State University Fullerton. I am expected to graduate
          Spring 2023 with my Bachelor’s. While I have not held any jobs that
          pertained to marketing, I have had to privilege to help the marketing
          team at my workplace, Gigabyte Technology; where I have been working
          since 2017. At first I started off as a warehouse employee but then I
          transferred in early 2019 as a technical support representative.
          Because I have been in the tech industry since I was 17, I mainly want
          to stay in the realm of PC hardware, however; I am interested in the
          motorsport industry as well. But for now, my forte lies in PC
          hardware.
        </p>
        <div className="my-8 flex justify-center items-center">
          <img className="h-[100px] object-contain" src={gigabyteImg} alt="" />
        </div>
        <div className="my-8">
          <a
            className="border-2 border-black rounded-lg border-solid px-4 py-2 text-center block  transition-all hover:bg-black hover:text-white shadow-brutal-blue hover:drop-shadow-brutal-orange"
            href={Samuel_Lu_Resume}
            target="_blank"
          >
            Resume
          </a>
        </div>
        {/* Add image of Gigabyte logo */}
        {/* Add resume!!!! */}
      </section>
    </div>
  );
};

export default AboutMe;
