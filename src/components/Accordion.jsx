import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

export default function Accordion({ data }) {
  const [openIndex, setOpenIndex] = useState(null);


  // Function to toggle the visibility of the answer
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faqContainer grid sm:gap-[24px] gap-[16px]">
      {data && JSON.parse(data).map((faq, index) => (
        <div
          data-aos="fade-up"
          key={index}
          className="bg-faq bg-sky-950 bg-opacity-30 backdrop-filter backdrop-blur-lg sm:rounded-[16px] sm:gap-[0] gap-[8px] rounded-[10px] p-[10px] grid text-start"
        >
          <div
            className="flex items-center justify-between cursor-pointer sm:p-[20px] p-[10px] "
            onClick={() => toggleAnswer(index)}
          >
            <span className="sm:text-[24px] text-[18px] pr-[10px]">{faq.question}</span>
            {openIndex === index ? (
              <MinusIcon className="max-w-5 max-h-5 min-w-5 min-h-5 text-gray-300" />
            ) : (
              <PlusIcon className="max-w-5 max-h-5 min-w-5 min-h-5 text-gray-300" />
            )}
          </div>
          {openIndex === index && (
            <div className="sm:p-[20px] p-[10px] !pt-0 sm:text-[16px] text-[14px]">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
