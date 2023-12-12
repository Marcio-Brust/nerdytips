"use client";
import { useRef, useState } from "react";

export const TabTables = () => {
  //const divTabs = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(1);

  /*   const handleActive = ({ currentTarget }: React.MouseEvent) => {
    const tabs = divTabs.current?.querySelectorAll("a");
    if (!currentTarget.classList.contains("active"))
      tabs?.forEach((tab) => tab.classList.toggle("active"));
  }; */

  return (
    <section className=" flex w-full mt-20 mb-5">
      <div
        /* ref={divTabs} */
        className="tabs tabs-boxed border-violet-500 border  w-full "
      >
        <a
          className={`tab ${
            active === 1 ? "bg-violet-500" : "none"
          } rounded-none `}
          onClick={() => setActive(1)}
        >
          ALL MATCHES
        </a>
        <a
          className={`tab ${
            active === 2 ? "bg-violet-500" : "none"
          } rounded-none `}
          onClick={() => setActive(2)}
        >
          UPCOMING MATCHES
        </a>
      </div>
    </section>
  );
};
