"use client"
import ProcessSteps from "/components/process";
import HomeSection from "/components/homepage";
import MobileProcessSteps from "/components/processMobil";
import Head from 'next/head';
import React, { useState, useEffect } from "react";

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
      {isMobile ? <MobileProcessSteps /> : <ProcessSteps />}
      </div>
    </div>
    </>
  );
}
