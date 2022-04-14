import linkedinImg from "../assets/linkedin-original.svg";
import gmailImg from "../assets/gmail.svg";
import phoneImg from "../assets/phone.svg";
import {
  createEffect,
  createSignal,
  For,
  Match,
  onMount,
  splitProps,
  Switch,
} from "solid-js";
import { createStore, produce } from "solid-js/store";
import LinkedIn from "./Icons/LinkedIn";
import Gmail from "./Icons/Gmail";
import Phone from "./Icons/Phone";

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
    <div className="px-4" onMouseLeave={onMouseLeave}>
      <ul className="flex justify-between items-center gap-5">
        <For each={items}>
          {(props) => {
            const { name, href, targetNewTab } = props;
            const activeIcon = () => activeItem()?.name === name;
            return (
              <li>
                <a
                  className="cursor-pointer block"
                  href={href}
                  target={targetNewTab ? "_blank" : undefined}
                  onMouseEnter={() => {
                    onMouseEnter(props);
                  }}
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
              </li>
            );
          }}
        </For>
      </ul>
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 text-center">
          {activeItem()?.text}
        </div>
      </div>
    </div>
  );
};

export default Contact;
