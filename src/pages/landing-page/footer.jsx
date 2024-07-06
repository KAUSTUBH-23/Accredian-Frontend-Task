import { FaMinus, FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { useState } from "react";
import PropTypes from "prop-types";

import GeneralPadding from "../../components/general-padding";
import Logo from "../../components/logo";

import { programTypes2, footerNavData } from "./data";

const socialIcons = [
  {
    id: 1,
    title: "Facebook",
    link: "#",
    icon: FaFacebook,
  },
  {
    id: 2,
    title: "LinkedIn",
    link: "#",
    icon: FaLinkedin,
  },
  {
    id: 3,
    title: "Twitter",
    link: "#",
    icon: FaTwitter,
  },
  {
    id: 4,
    title: "Instagram",
    link: "#",
    icon: FaInstagram,
  },
  {
    id: 5,
    title: "YouTube",
    link: "#",
    icon: FaYoutube,
  },
];

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content py-5">
      <GeneralPadding>
        <div className="flex justify-between">
          <Logo theme="light" />
          <div className="flex flex-col">
            <button className="btn btn-primary">
              Schedule 1-on-1 Call Now
            </button>
            <small className="text-xs ms-3"> Speak with our Learning Advisor</small>
          </div>
        </div>

        <div className="w-full h-0 border-t-2 border-neutral-content/50 my-10"></div>

        <div className="flex lg:grid lg:grid-cols-12 flex-wrap md:flex-row flex-col md:gap-16 sm:gap-10 gap-6">
          <div className="col-span-3">
            <h3 className="text-lg">Programs</h3>
            {programTypes2.map(program => (
              <AccordionItem key={program} text={program} />
            ))}
          </div>

          <div className="col-span-6">
            <h3 className="text-lg">Contact Us</h3>
            <p>Email us (For Data Science Queries): admissions@accredian.com</p>
            <p>Email us (For Product Management Queries): pm@accredian.com</p>
            <p>Data Science Admission Helpline: +91 9079653292 (9 AM - 7 PM)</p>
            <p>Product Management Admission Helpline: +91 9625811095</p>
            <p>Enrolled Student Helpline: +91 7969322507</p>
            <p>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</p>

            <p className="mt-2">Why Accredian</p>
            <p className="font-light text-lg">Follow Us</p>
            <ul className="flex gap-5 mt-1">
              {socialIcons.map((social, index) => (
                <li key={index} className="tooltip tooltip-bottom" data-tip={social.title}>
                  <a href={social.link}>
                    <social.icon className="w-6 h-6" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-3">
            <h3 className="text-lg">Accredian</h3>
            <ul className="flex flex-col gap-3">
              {footerNavData.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-10">
          &copy; {new Date().getFullYear()} Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </div>
      </GeneralPadding>
    </footer>
  );
}

export function AccordionItem({ text }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleAccordion = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="flex justify-between items-start mb-5">
      <p className="font-bold cursor-pointer" onClick={handleAccordion}>
        {text}
      </p>
      <div className="relative w-6 h-6 cursor-pointer" onClick={handleAccordion}>
        <FaMinus className={`absolute transition-transform duration-300 ease-linear ${isOpen ? "rotate-0" : "rotate-180"}`} />
        <FaMinus className={`transition-transform duration-300 ease-linear ${isOpen ? "rotate-90" : "rotate-180"}`} />
      </div>
    </div>
  );
}

AccordionItem.propTypes = {
  text: PropTypes.string.isRequired,
};
