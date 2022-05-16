import experiencePC1Img from "./assets/experience-pc-1.jpeg";
import experiencePC2Img from "./assets/experience-pc-2.jpeg";
import experiencePC3Img from "./assets/experience-pc-3.jpeg";
import experienceTrailRunnersImg from "./assets/experience-trail-runners.png";

const Experience = () => {
  return (
    <div className="fadeInBottomSm">
      <section className="pt-24">
        <h2 className="text-5xl font-bold">Experience</h2>

        <div className="">
          <p
            className="my-5"
            style="    font-size: 18px; line-height: 37px; margin-bottom: 30px;"
          >
            I am a Business Administration and Marketing major currently at
            California State University Fullerton. I am expected to graduate
            Spring 2023 with my Bachelor’s. While I have not held any jobs that
            pertained to marketing, I have had to privilege to help the
            marketing team at my workplace, Gigabyte Technology; where I have
            been working since 2017. At first I started off as a warehouse
            employee but then I transferred in early 2019 as a technical support
            representative. Because I have been in the tech industry since I was
            17, I mainly want to stay in the realm of PC hardware, however; I am
            interested in the motorsport industry as well. But for now, my forte
            lies in PC hardware. I hope you find things here on the site,
            informative and interesting.
          </p>
          <div className="grid md:grid-cols-[1fr,1fr,1fr] my-[150px] gap-8 md:gap-3 md:h-[500px] lg:w-fit-parent-200px xl:w-fit-parent-500px xl:gap-5  grid-cols-1">
            <Img
              className="h-[inherit] rounded-lg"
              src={experiencePC1Img}
            ></Img>
            <Img
              className="h-[inherit] rounded-lg"
              src={experiencePC2Img}
            ></Img>
            <Img
              className="h-[inherit] rounded-lg"
              src={experiencePC3Img}
            ></Img>
          </div>
        </div>
        <div className="">
          <p style="    font-size: 18px; line-height: 37px; margin-bottom: 60px;">
            I also have done a marketing project for school. The project is
            about a shoe company called Allbirds and to create a tangible
            output, in my case a report, on their Trail Runner SWT model and how
            to market it towards the Gen Z population in the San Diego area. I
            did research on the age demographic that is Gen Z, the population of
            that demographic in the San Diego area, checked which gender the
            Trail Runner SWT is popular amongst, and decided the best course of
            action in regards to marketing.
          </p>
          <img
            className="object-cover h-[inherit] rounded-lg"
            src={experienceTrailRunnersImg}
          />
        </div>
      </section>
    </div>
  );
};

const Img = ({ className, src }) => {
  return (
    <div className={className + " relative"}>
      <img
        className="object-cover h-full w-full md:w-auto rounded-lg relative z-1"
        src={src}
      />
      <img
        className="absolute top-0 left-0 right-0 bottom-0 object-cover h-full rounded-lg"
        style={`filter: blur(14px);
        transform: translate(5px, 5px);`}
        src={src}
      />
    </div>
  );
};

export default Experience;
