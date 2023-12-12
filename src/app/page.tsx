"use client";

import { Accordion } from "@/components/Accordion";
import { InputSearch } from "@/components/InputSearch";
import { TabTables } from "@/components/Tabs";
import { Loading } from "@/components/Loading";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <main
      data-theme="dark"
      className="flex flex-col items-center min-h-screen  justify-center max-lg:px-5"
    >
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col">
          <TabTables />
          <div className="flex gap-8 max-lg:flex-col max-lg:justify-center justify-between">
            <InputSearch />
            <Accordion />
          </div>
        </div>
      )}
    </main>
  );
}
