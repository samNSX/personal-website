import "./index.css";
import profileImg from "./assets/profile-picture.webp";
import profileColorfullImg from "./assets/sam_profile.png";
import profileNoBGImg from "./assets/profile-nobg.webp";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="grid h-full">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full backdrop-blur-lg z-50 bg-white/50">
        <div className="flex justify-between items-center h-[100px] max-w-[1000px] mx-auto px-5">
          <div>
            <span className="text-xl font-semibold">Sam Lu</span> /{" "}
            <span className="text-lg text-gray-500">
              GigaByte Technical Support
              <span className="hidden lg:inline"> Representative</span>
            </span>
          </div>
          {/* <nav class="">
            <ul className="flex gap-5">
              <li class="p-2">
                <a href="#about">About</a>
              </li>
              <li class="p-2">
                <a href="#resume">Resume</a>
              </li>
              <li class="p-2">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav> */}
        </div>
      </header>
      <main className="mt-[200px] max-w-[1000px] mx-auto">
        {/* Hero */}
        <section className="lg:grid gap-5 grid-cols-[1fr,1fr]">
          <div className="px-5">
            <h1 className="font-bold text-6xl mb-5 lg:whitespace-nowrap">
              Hello, I'm Sam <span className="drop-shadow-xl">🤩</span>
            </h1>
            <div className="flex flex-col items-center justify-center">
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex justify-center pb-16">
              <div className="relative">
                <img className="w-[300px]" src={profileColorfullImg} alt="" />
                <Contact />
              </div>
            </div>
          </div>
        </section>
        <section></section>
      </main>
      <footer className="mt-auto p-5">
        <p>© 2023 by Samuel Lu.</p>
      </footer>
    </div>
  );
}

export default App;
