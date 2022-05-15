import Gmail from "./components/Icons/Gmail";
import LinkedIn from "./components/Icons/LinkedIn";
import Phone from "./components/Icons/Phone";

import linkedinImg from "./assets/linkedin-original.svg";
import gmailImg from "./assets/gmail.svg";
import phoneImg from "./assets/phone.svg";
import {
  createEffect,
  createSignal,
  For,
  Match,
  onMount,
  splitProps,
  Switch,
} from "solid-js";

const Contact = () => {
  const items = [
    {
      name: "linkedin",
      href: "https://www.linkedin.com/in/samlu821/",
      text: "https://www.linkedin.com/in/samlu821/",
      img: linkedinImg,
      targetNewTab: true,
    },
    {
      name: "email",
      href: "mailto:lusamuel99@gmail.com",
      text: "lusamuel99@gmail.com",
      img: gmailImg,
    },
    {
      name: "phone_number",
      href: null,
      text: "909-896-8569",
      img: phoneImg,
    },
  ];
  const [activeItem, setActiveItem] = createSignal(null);

  const onMouseEnter = (item) => {
    setActiveItem(item);
  };

  const onMouseLeave = () => {
    setActiveItem(null);
  };
  return (
    <div className="flex justify-center items-center h-screen fadeInBottomSm">
      <div>
        <h2 className="text-5xl font-bold mb-[50px] text-center">Contact</h2>
        <ul className="flex flex-col gap-5">
          <For each={items}>
            {(props) => {
              const { name, href, targetNewTab, text } = props;
              const activeIcon = () => activeItem()?.name === name;
              return (
                <li>
                  <div
                    className="flex h-[80px] items-center gap-4 sm:gap-5 border-2 border-black rounded-lg border-solid px-4 py-2 text-center text-sm sm:text-[18px] shadow-brutal-blue transition-all hover:bg-black hover:text-white hover:drop-shadow-brutal-orange"
                    onMouseEnter={() => {
                      onMouseEnter(props);
                    }}
                    onMouseLeave={() => {
                      onMouseLeave(props);
                    }}
                  >
                    <a
                      className="cursor-pointer w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]"
                      href={href}
                      target={targetNewTab ? "_blank" : undefined}
                    >
                      <Switch>
                        <Match when={name === "linkedin"}>
                          <LinkedIn active={activeIcon()} />
                        </Match>
                        <Match when={name === "email"}>
                          <Gmail active={activeIcon()} />
                        </Match>
                        <Match when={name === "phone_number"}>
                          <Phone active={activeIcon()} />
                        </Match>
                      </Switch>
                    </a>
                    <span>{text}</span>
                  </div>
                </li>
              );
            }}
          </For>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
