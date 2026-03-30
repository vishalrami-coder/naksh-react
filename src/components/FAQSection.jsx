import React from "react";
import SectionTitle from "./SectionTitle";
import '../assets/css/FAQSection.css'
import DOMPurify from "dompurify";

const FAQSection = ({ smallTitle, mainTitle, faqData = [] }) => {
    const cleanHTML = (html) => {
        if (!html) return "";

        // Step 1: sanitize
        const clean = DOMPurify.sanitize(html, {
            FORBID_ATTR: ["style", "class"],
        });

        // Step 2: remove unnecessary spans
        const parser = new DOMParser();
        const doc = parser.parseFromString(clean, "text/html");

        // unwrap span inside td/th
        doc.querySelectorAll("td span, td p, th span").forEach((span) => {
            const parent = span.parentNode;

            // move text up and remove span
            parent.replaceChild(document.createTextNode(span.textContent), span);
        });

        return doc.body.innerHTML;
    };

    return (
        <div className="ProDeailsSec FaqSec CustomPeding newProductDetails" id="MainFaqSec">
            <div className="container">

                <SectionTitle
                    smallTitle={smallTitle}
                    mainTitle={mainTitle}
                />

                <div className="FaqGrid">
                    <div className="accordion" id="accordionExample">

                        {faqData.length > 0 ? (
                            faqData.map((faq, index) => (
                                <div className="accordion-item" key={index}>

                                    <h2 className="accordion-header" id={`heading${index}`}>
                                        <button
                                            className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#collapse${index}`}
                                            aria-expanded={index === 0 ? "true" : "false"}
                                            aria-controls={`collapse${index}`}
                                        >
                                            {faq?.question}
                                        </button>
                                    </h2>

                                    <div
                                        id={`collapse${index}`}
                                        className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                                        aria-labelledby={`heading${index}`}
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body" dangerouslySetInnerHTML={{
                                            __html: cleanHTML(faq?.answer),
                                        }}>
                                        </div>
                                    </div>

                                </div>
                            ))
                        ) : (
                            <p>No FAQs available</p>
                        )}

                    </div>
                </div>

            </div>
        </div>
    );
};

export default FAQSection;