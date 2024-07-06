import PropTypes from "prop-types";

export default function Logo({ theme = "dark" }) {
  return (
    <div className="flex flex-col items-center gap-0">
      <span className={`font-bold text-3xl ${theme === "dark" ? "text-primary" : "text-white"}`}>accredian</span>
      <small className={`text-xs -mt-1 font-light ${theme === "dark" ? "text-neutral" : "text-white/90"}`}>credentials that matter</small>
    </div>
  )
}


Logo.propTypes = {
  theme: PropTypes.string,
}