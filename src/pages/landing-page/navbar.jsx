import PropTypes from "prop-types"

export default function Navbar({ sectionData, currentSection, setCurrentSection }) {
  const handleCurrentSection = (item) => {
    setCurrentSection(item.title)
  }
  return (
    <nav className="bg-primary-content/50 rounded-full py-2 md:w-1/2 w-full mx-auto">
      <ul className="flex items-center w-full list-none">
        {sectionData.map(item => (
          <li key={item.id} className="flex-1 text-center">
            <a href={`#${item.link}`}
              onClick={() => handleCurrentSection(item)}
              className={`relative ${item.title === currentSection ? "text-primary" : ""}`}
            >
              <span>{item.title}</span>

              {item.title === currentSection
                ? <span className="absolute w-1 h-1 rounded-full inline-block top-full bg-primary left-1/2 -translate-x-1/2"></span>
                : null}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

Navbar.propTypes = {
  sectionData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentSection: PropTypes.string.isRequired,
  setCurrentSection: PropTypes.func.isRequired,
}