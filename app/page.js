"use client"

import CardGroup from "./components/CardGroup";
import Header from "./components/Header";
import MenuBtn from "./components/Menubtn";
import PageTransition from "./transition";

const Home = () => {
  return (
    <PageTransition>
    <div className="block md:hidden">
      <Header />
      <div className="h-16 w-full" />
    </div>
    <main className="flex md:flex-row flex-col justify-center items-center p-6">
      <div className="md:absolute max-w-[90vw] md:max-w-[700px] top-8 left-6 z-20">        
        <h2>"The future belongs to those who believe in the <span className="text-accent italic hover:tracking-wider transition-all green_cursor">beauty of their dreams</span>."</h2>
        <p>— Eleanor Roosevelt</p>
      </div>
      <div className="w-[700px]">
      </div>
      <div>
        <CardGroup />
      </div>
      <MenuBtn />
    </main>
    </PageTransition>
  );
}

export default Home