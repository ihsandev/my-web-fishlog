"use client";
import { useEffect, useState } from "react";
import Companion from "./partials/Companion";
import Hero from "./partials/Hero";
import Impact from "./partials/Impact";
import MiddleSection from "./partials/MiddleSection";
import { IHomeData } from "@/types/home";

export default function Home() {
  const [homeData, setHomeData] = useState<IHomeData>();
  useEffect(() => {
    async function getHome() {
      const res = await fetch("/api/home");
      const home = await res.json();
      setHomeData(home.data);
    }
    getHome();
  }, []);

  return (
    <div>
      <Hero heros={homeData?.heros} />
      <MiddleSection summary={homeData?.summary} />
      <Impact data={homeData?.impact} />
      <Companion data={homeData?.companion} />
    </div>
  );
}
