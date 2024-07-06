import { useState } from "react";
import Header from "./header";
import GeneralPadding from "../../components/general-padding";
import PageNavbar from "./navbar";
import { sectionData } from "./data.js";
import backgroundImage from "../../assets/heroimg.png";
import ReferButton from "../../components/refer-button";
import ReferSection from "./refersection.jsx";
import BenefitSection from "./Tablesection.jsx";
import FAQsection from "./faq-section";
import BlueBox from "./bluebox.jsx";
import Footer from "./footer";

export default function LandingPage() {
  const [currentSection, setCurrentSection] = useState(sectionData[0].title);

  return (
    <main className="w-screen min-h-screen bg-base-100 text-base-content">
      <Header />

      <GeneralPadding>
        <div className="mt-10">
          <PageNavbar
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
            sectionData={sectionData}
          />

          <div className="hero-content flex-col items-stretch justify-start lg:flex-row-reverse p-0 w-full max-w-full relative">
            <div className="lg:w-[55%] w-full h-[450px] relative overflow-hidden flex justify-end items-start">
              <img
                src={backgroundImage}
                className="w-full shadow-2xl relative"
                style={{ transform: 'translateY(-80px)' }} // Increased upward movement
              />
            </div>
            <div className="p-4 px-10 flex-1 pb-10">
              <h1 className="text-6xl xl:text-7xl font-bold text-neutral mt-8">Let&apos;s Learn <br />& Earn</h1>
              <p className="py-6 text-3xl">
                Get a chance to win up-to <span className="text-primary font-bold">Rs. 15,000</span>
              </p>
              <ReferButton />
            </div>
          </div>
        </div>
      </GeneralPadding>

      <div className="mt-10 bg-primary-content/30">
        <ReferSection data={sectionData[0]} />
      </div>

      <GeneralPadding>
        <div className="mt-10">
          <BenefitSection data={sectionData[1]} />
        </div>

        <div className="mt-10">
          <FAQsection data={sectionData[2]} />
        </div>

        <div className="mt-10">
          <BlueBox />
        </div>
      </GeneralPadding>

      <div className="mt-10">
        <Footer />
      </div>
    </main>
  )
}
