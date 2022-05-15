import "./index.css";
import profileImg from "./assets/profile-picture.webp";
import profileColorfullImg from "./assets/sam_profile.png";
import profileNoBGImg from "./assets/profile-nobg.webp";
import Contact from "./Contact";
import AboutMe from "./AboutMe";

import { createSignal } from "solid-js";
import Experience from "./Experience";
import Certifications from "./Certifications";
import Introduction from "./Introduction";

function App() {
  const links = [
    { link: "Introduction", component: Introduction }, // main
    { link: "About Me", component: AboutMe },
    { link: "Experience", component: Experience },
    { link: "Certifications", component: Certifications },
    { link: "Contact", component: Contact },
  ];

  const [activeLink, setActiveLink] = createSignal(links[0]);

  const onClick = (item) => {
    setActiveLink(links.find((_item) => _item.link === item));
  };

  return (
    <div className="">
      {/* Header */}
      <header
        className="fixed top-0 left-0 w-full backdrop-blur-lg z-50 bg-[#e7f3ff]/60"
        style="box-shadow: 0 0 13px 0px #0b48775e"
      >
        {/* <div className="flex justify-between items-center h-[100px] max-w-[1000px] mx-auto px-5">
          <div>
            <span className="text-xl font-semibold">Sam Lu</span> /{" "}
            <span className="text-lg text-gray-500">
              GigaByte Technical Support
              <span className="hidden lg:inline"> Representative</span>
            </span>
          </div>
        </div> */}
        <div className="flex gap-5 sm:justify-center overflow-auto px-5 items-center h-[50px]">
          <For each={links}>
            {(item) => {
              return (
                <button
                  className=" border-solid border-b-2 border-transparent flex-shrink-0 transition-all hover:border-blue-700 font-bold"
                  onClick={() => onClick(item.link)}
                >
                  {item.link}
                </button>
              );
            }}
          </For>
        </div>
      </header>

      <main className="px-6 max-w-[1000px] mx-auto text-xl">
        {activeLink().component}
        {/* <section className="">
          <div className="px-5">
            <h1 className="font-bold text-6xl mb-5 lg:whitespace-nowrap text-center">
              Hello, I'm Samuel Lu
              <div className="text-xl my-3 text-gray-500">
                GigaByte Technical Support Representative
              </div>
            </h1>
            <div className="flex flex-col items-center justify-center">
              <p className="text-xl">
                To the person reading this, my name is Samuel Lu and I would
                like thank you for taking time out of your day to arrive at my
                page. Here you can learn more about me, see what projects I have
                been a part of, my experiences, any certificates or licenses I
                obtained, and finally contact information.
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex justify-center pb-16">
              <div className="relative">
                <img className="w-[300px]" src={profileColorfullImg} alt="" />
              </div>
            </div>
          </div>
        </section> */}
      </main>
      {/* <footer className="mt-auto p-5">
        <p>© 2023 by Samuel Lu.</p>
      </footer> */}
    </div>
  );
}

export default App;
