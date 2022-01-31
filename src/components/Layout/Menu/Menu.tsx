import React from "react";
import clsx from "clsx";
import Fade from "react-reveal/Fade";
import { useRouter } from "next/router";
import { IoCloseOutline } from "react-icons/io5";

const ITEMS = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Projects",
    link: "/projects",
  },
  {
    label: "Experience",
    link: "/experience",
  },
  {
    label: "Blogs",
    link: "/blogs",
  },
  {
    label: "Workshops",
    link: "/workshops",
  },
  {
    label: "Meet",
    link: "/meet",
  },
];

const Menu: React.FC = () => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <div id="menu-btn" onClick={() => setOpen(true)}>
        <div className="top"></div>
        <div className="middle"></div>
        <div className="bottom"></div>
      </div>
      <div
        id="menu-overlay"
        className={clsx({ open })}
        onClick={() => setOpen(false)}
      />
      <div id="menu" className={clsx({ open })}>
        <div className="menu-container">
          <div className="menu-action">
            {open && (
              <Fade right duration={500} distance="10%" delay={100}>
                <button className="btn-close" onClick={() => setOpen(false)}>
                  <IoCloseOutline />
                </button>
              </Fade>
            )}
          </div>
          <ul className="menu-items">
            {ITEMS.map((item, key) => {
              return (
                <li
                  className="menu-item"
                  onClick={() => router.push(item.link)}
                  key={key}
                >
                  <Fade
                    right
                    duration={500}
                    distance="10%"
                    delay={100 * (key + 1)}
                    when={open}
                  >
                    {item.label}
                  </Fade>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Menu;
