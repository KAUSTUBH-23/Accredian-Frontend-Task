import PropTypes from "prop-types"
import { useState } from "react";


import { faqQuestionType, faqData } from "./data";

export default function FAQSection({ data }) {
  const [selectedFAQType, setSelectedFAQType] = useState(faqQuestionType[0]);
  return (
    <section className="py-5 text-center" id={data.link}>
      <h2 className="text-2xl font-bold">Frequently Asked <span className="text-primary">Questions</span></h2>

      <div className={"my-5 flex flex-row gap-8 md:gap-10 lg:gap-16"}>
        <div className="menu w-64 p-0">
          {faqQuestionType.map((faqType, index) => (
            <button key={faqType}
              className={`btn shadow-lg ${index !== 0 ? "mt-5" : " "} ${selectedFAQType === faqType ? "bg-primary text-primary-content" : " "}`}
              onClick={() => setSelectedFAQType(() => faqType)}
            >
              <span>{faqType}</span>
            </button>
          ))}
        </div>

        <FAQQuestions selectedFAQ={selectedFAQType} />
      </div>
    </section>
  )
}


export function FAQQuestions({ selectedFAQ }) {
  const faqsToShow = faqData.filter(faqs => selectedFAQ === "all" || faqs.type === selectedFAQ);
  return (
    <div className="join join-vertical w-full h-84 overflow-y-auto">
      
      {faqsToShow.slice(0, 3).map((faq, index) => (
        <div key={index} className="collapse collapse-arrow join-item border-base-300 border !text-start">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-base font-medium">{faq.question}</div>
          <div className="collapse-content ps-10">
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

FAQSection.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
}

FAQQuestions.propTypes = {
  selectedFAQ: PropTypes.string.isRequired,
}