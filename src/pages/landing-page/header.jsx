import { FaChevronDown } from "react-icons/fa6";

import GeneralPadding from "../../components/general-padding";
import Logo from "../../components/logo";
import { navData } from "./data.js"

export default function Header() {
  return (
    <header className="w-full py-3 bg-base-200">
      <GeneralPadding>
        <div className="flex items-center justify-between gap-5 sm:gap-6">
          <div className="flex gap-[inherit] items-center">
            {/* logo  */}
            <Logo />
            {/* courses  */}
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-primary m-1">Courses <FaChevronDown /></div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li><a>Course 1</a></li>
              </ul>
            </div>
          </div>

          {/* full screen nav items  */}
          <div className="lg:flex gap-[inherit] items-center hidden">
            <nav className="px-0 gap-[inherit]">
              <ul className="flex list-none gap-[inherit] ">
                {navData.map((item, index) => (
                  <li key={index} className="border border-b-transparent hover:border-b-primary"><a href={item.link}>{item.title}</a></li>
                ))}
              </ul>
            </nav>
            <div className="flex gap-[inherit] items-center">
              <button className="btn btn-ghost">Login</button>
              <button className="btn btn-primary">Try for free</button>
            </div>
          </div>

          {/* small screen nav items  */}
          <div className="flex-none lg:hidden block">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn m-1 btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-5 w-5 stroke-current">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                </svg>
              </div>
              <aside tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <ul >
                  {navData.map((item, index) => (
                    <li key={index} className="border border-b-transparent hover:border-b-primary"><a href={item.link}>{item.title}</a></li>
                  ))}
                </ul>
                <button className="btn btn-ghost">Login</button>
                <button className="btn btn-primary mt-2">Try for free</button>
              </aside>
            </div>

          </div>
        </div>
      </GeneralPadding>
    </header>
  )
}
