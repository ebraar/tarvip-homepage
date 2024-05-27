"use client"
import Process from "/components/process";
import HomeSection from "/components/homepage";
import MobileProcessSteps from "/components/processMobil";
import Head from 'next/head';
import React, { useState, useEffect } from "react";
import ProductSlider from "/components/slidableServices";
import ProcessSteps from "/components/processSteps";
import Testimonials from "@/components/testimonials";

export default function Home() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    <Head>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
    <div>
      <HomeSection/>
      <div>
      {isMobile ? <MobileProcessSteps /> : <Process />}
      </div>

      <div className="w-full max-w-7xl min-w-full p-10 bg-blue-200">
      <ProductSlider/>
      </div>
      <div className="w-full max-w-7xl min-w-full p-4 bg-blue-100">
        <ProcessSteps/>
      </div>
      <div className="w-full max-w-7xl min-w-full p-4 bg-blue-950">
        <Testimonials/>
      </div>
    </div>
    </>
  );
}
