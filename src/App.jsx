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
  let headerEl;

  const [activeLink, setActiveLink] = createSignal(links[0]);

  const onClick = (item) => {
    setActiveLink(links.find((_item) => _item.link === item));
  };

  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY >= 100) {
        headerEl.style.boxShadow = " 0 0 13px 0px #0b48775e";
      } else {
        headerEl.style.boxShadow = " 0 0 13px 0px #0b487700";
      }
    },
    { passive: true }
  );

  return (
    <div className="">
      <header
        className="fixed top-0 left-0 w-full  has-backdrop-filter:backdrop-blur-lg z-50 has-backdrop-filter:bg-[#e7f3ff]/60 bg-[#e7f3ff]/95"
        style="box-shadow: 0 0 13px 0px #0b487700; transition: box-shadow 300ms;"
        ref={headerEl}
      >
        <div
          className="absolute top-0 right-0 bottom-0 w-8 pointer-events-none"
          style="background: linear-gradient(to left, #e6f3ff 5px, transparent)"
        ></div>
        <div
          className="absolute top-0 left-0 bottom-0 w-5 pointer-events-none"
          style="background: linear-gradient(to right, #e6f3ff 5px, transparent)"
        ></div>
        <div className="flex gap-5 sm:justify-center overflow-auto px-5 pr-8 items-center h-[50px] no-scrollbar">
          <For each={links}>
            {(item) => {
              return (
                <button
                  className=" border-solid border-b-2 border-transparent flex-shrink-0 transition-all hover:border-blue-700 font-bold"
                  classList={{
                    "border-blue-700": item.link === activeLink().link,
                  }}
                  onClick={() => onClick(item.link)}
                >
                  {item.link}
                </button>
              );
            }}
          </For>
        </div>
      </header>

      <main className="px-6 max-w-[800px] mx-auto text-xl">
        {activeLink().component}
      </main>
      {/* <footer className="mt-auto p-5">
        <p>© 2023 by Samuel Lu.</p>
      </footer> */}
    </div>
  );
}

export default App;
