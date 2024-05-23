import ProcessSteps from "/components/process";
import HomeSection from "/components/homepage";
import Head from 'next/head';

export default function Home() {
  return (
    <>
    <Head>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
    <div>
      <HomeSection/>
      <ProcessSteps/>
    </div>
    </>
  );
}
