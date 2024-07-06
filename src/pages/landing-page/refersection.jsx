import PropTypes from "prop-types";
import ReferButton from "../../components/refer-button";
import { FaUserPlus, FaClipboardList, FaBriefcase } from "react-icons/fa6";
import backgroundImage from "../../assets/image.png"; // Ensure this is the correct path

const referStepData = [
  { id: 1, text: "Submit referrals easily via our website’s referral section.", icon: FaUserPlus },
  { id: 2, text: "Earn rewards once your referral joins an Accredian program.", icon: FaClipboardList, },
  { id: 3, text: "Both parties receive a bonus 30 days after program enrollment.", icon: FaBriefcase, },
];

export default function ReferSection({ data }) {
  return (
    <section className="py-3 text-center relative" id={data.link} style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'auto 50%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
      <h2 className="text-2xl font-bold">How do I <span className="text-primary">Refer?</span></h2>
      <div className="my-16 relative w-full h-0 pb-[calc(625/1800*100%)]"> {/* Adjust ratio based on your new image */}
        {referStepData.map((item, index) => {
          return <ReferStepCircle key={index} icon={item.icon} text={item.text} step={index + 1} />
        })}
      </div>
      <div className="mt-6">
        <ReferButton />
      </div>
    </section>
  )
}

export function ReferStepCircle({ icon, text, step }) {
  const Icon = icon;
  const positions = [
    { left: '22.5%', top: '30%' }, // Adjust these positions according to your new image layout
    { left: '42.5%', top: '30%' },
    { left: '62.5%', top: '30%' }
  ];

  return (
    <div style={{ ...positions[step - 1], position: 'absolute' }} className="lg:w-56 lg:h-56 md:w-48 md:h-48 w-36 h-36 rounded-full shadow-xl flex flex-col gap-3 lg:gap-5 items-center p-5 bg-white">
      <span className="lg:mt-8 mt-4 inline-block"><Icon className="lg:w-16 lg:h-16 md:w-12 md:h-12 w-10 h-10 fill-primary" /></span>
      <p className="text-center text-sm">{text}</p>
    </div>
  )
}

ReferSection.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
}

ReferStepCircle.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.any,
  step: PropTypes.number.isRequired,
}
