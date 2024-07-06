import PropTypes from "prop-types";

export default function GeneralPadding({ children }) {
  return (
    <div className="xl:px-32 md:px-28 px-8">
      {children}
    </div>
  )
}

GeneralPadding.propTypes = { children: PropTypes.any.isRequired }