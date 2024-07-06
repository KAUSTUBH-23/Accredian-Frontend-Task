import { FaAngleRight } from "react-icons/fa";
import contactCardBackground from "../../assets/contact-card-background.svg";

export default function BlueBox() {
  return (
    <article className="card bg-info text-info-content w-full shadow-xl relative overflow-hidden">
      {/* Positioned the SVG background to the right */}
      <div className="absolute right-0 top-0 bottom-0 opacity-50 w-1/2">
        <img src={contactCardBackground} alt="Contact Card Background" className="object-cover h-full w-full" />
      </div>

      <div className="card-body relative p-10 flex-row gap-10 flex-wrap">
        <span className="h-16 w-16 rounded-lg border-4 border-info/60 flex items-center justify-center bg-white order-1 z-10">
          <svg className="fill-info" viewBox="-51.2 -51.2 614.40 614.40" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" className="stroke-info" strokeWidth="25.6">
              <path d="M458.88,240.87h-3.49c-4.23-106.59-92.24-192-199.84-192s-195.61,85.41-199.84,192H53.12a18,18,0,0,0-18,18v108a18,18,0,0,0,18,18H77.33a72.12,72.12,0,0,0,71.57,64h56v6.25a8,8,0,0,0,8,8h42.67a8,8,0,0,0,8-8V426.6a8,8,0,0,0-8-8H212.88a8,8,0,0,0-8,8v6.28h-56a56.1,56.1,0,0,1-55.45-48h25a18,18,0,0,0,18-18v-108a18,18,0,0,0-18-18h-4c4.18-74.22,65.87-133.33,141.12-133.33s137,59.11,141.12,133.34h-3.12a18,18,0,0,0-18,18v108a18,18,0,0,0,18,18h65.33a18,18,0,0,0,18-18v-108A18,18,0,0,0,458.88,240.87Z"></path>
            </g>
            <g id="SVGRepo_iconCarrier">
              <path d="M458.88,240.87h-3.49c-4.23-106.59-92.24-192-199.84-192s-195.61,85.41-199.84,192H53.12a18,18,0,0,0-18,18v108a18,18,0,0,0,18,18H77.33a72.12,72.12,0,0,0,71.57,64h56v6.25a8,8,0,0,0,8,8h42.67a8,8,0,0,0,8-8V426.6a8,8,0,0,0-8-8H212.88a8,8,0,0,0-8,8v6.28h-56a56.1,56.1,0,0,1-55.45-48h25a18,18,0,0,0,18-18v-108a18,18,0,0,0-18-18h-4c4.18-74.22,65.87-133.33,141.12-133.33s137,59.11,141.12,133.34h-3.12a18,18,0,0,0-18,18v108a18,18,0,0,0,18,18h65.33a18,18,0,0,0,18-18v-108A18,18,0,0,0,458.88,240.87Z"></path>
            </g>
          </svg>
        </span>

        <div className="order-3 md:order-2 z-10">
          <h2 className="card-title">Want to delve deeper into the program?</h2>
          <p className="mt-3">Share your details to receive expert insights from our program team!</p>
        </div>

        <div className="card-actions ms-auto order-2 md:order-2 z-10">
          <button className="btn bg-info-content text-info font-bold">Get in touch <FaAngleRight /></button>
        </div>
      </div>
    </article>
  );
}
