"use client";
import { useRef } from "react";
import { AccordionTable } from "./AccordionTable";

export const TabTables = () => {
  const divTabs = useRef<HTMLDivElement>(null);

  const handleActive = ({ currentTarget }: React.MouseEvent) => {
    const tabs = divTabs.current?.querySelectorAll("a");
    if (!currentTarget.classList.contains("tab-active"))
      tabs?.forEach((tab) => tab.classList.toggle("tab-active"));
  };

  return (
    <section className="mt-10">
      <div ref={divTabs} className="tabs tabs-boxed border-primary border">
        <a className="tab tab-active rounded-none " onClick={handleActive}>
          ALL MATCHES
        </a>
        <a className="tab" onClick={handleActive}>
          UPCOMING MATCHES
        </a>
      </div>
      <AccordionTable />
    </section>
  );
};
