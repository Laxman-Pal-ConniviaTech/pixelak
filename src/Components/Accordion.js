import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

const Accordion = () => {
  const [active, setActive] = useState(null);

  const toggle = (i) => {
    const items = document.querySelectorAll(".item");
    const title = document.querySelectorAll(".title");
    const contents = document.querySelectorAll(".answer");

    if (active === i) {
      title[i].style.backgroundColor = "var(--accordion-bg-color)";
      title[i].style.color = "var(--accordion-color)";
      title[i].style.boxShadow = "var(--shadow)";
      contents[i].style.color = "var(--accordion-color)";
      contents[i].style.backgroundColor = "var(--accordion-bg-color)";
      setActive(null);
    } else {
      title[i].style.backgroundColor = "var(--accordion-bg-color)";
      title[i].style.color = "var(--accordion-color)";
      title[i].style.boxShadow = "var(--shadow)";
      contents[i].style.color = "var(--accordion-color)";
      contents[i].style.backgroundColor = "var(--accordion-bg-color)";
      if (active !== null) {
        title[active].style.backgroundColor = "var(--accordion-bg-color)";
        title[active].style.boxShadow = "var(--shadow)";
        title[active].style.color = "var(--accordion-color)";
        contents[active].style.color = "var(--accordion-color)";
      }

      contents[i].style.backgroundColor = "#f6be00";
      title[i].style.backgroundColor = "#f6be00";
      title[i].style.boxShadow = "none";
      title[i].style.color = "#2c2d30";
      contents[i].style.color = "#2c2d30";
      setActive(i);
    }
  };

  return (
    <div className="accordion">
      {data.map((item, i) => {
        return (
          <div className="item" key={i}>
            <div
              className="title"
              onClick={() => {
                toggle(i);
              }}
            >
              <span className="toggle-icon">
                {active !== i && <GoPlus />}
                {active === i && <FiMinus />}
              </span>
              <h2>{item.question}</h2>
            </div>
            <div className={active === i ? "content show" : "content"}>
              <p className="answer">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const data = [
  {
    question: "Why should I choose your team?",
    answer: `We’re storytellers & filmmakers who make easy-to-understand videos. We 
        believe working in partnership with our customers to create high quality content 
        that fits your requirements precisely. We develop entire video-making process in-house, from idea, scriptwriting, shooting to creating final video. We have made 
        more than 200+ videos for reputed clients from many industries.`,
  },
  {
    question: "How long does it take to deliver a video?",
    answer: `For a typical, company video project we would expect to deliver within 5-6 weeks.
        If it’s an animation project thing would be different a scope of work has to be 
        defined to justify completion time. However, this can depend on your notes and 
        approvals. Kindly get in touch with our team, to get a better idea of how long it 
        takes to produce your video`,
  },
  {
    question: "What type of video style suits my business?",
    answer: `This depends on your willingness and requirements to cover up certain aspects. 
        Our creative team will get the vital pointers from your needs and will give advice the 
        best suitable video for your business.`,
  },
  {
    question: "What are the payment terms?",
    answer: `Our standard terms are as follows: 60% upfront and 40% upon completion.
        For animation and events its different*`,
  },
  {
    question: "Why custom / animation videos are expensive?",
    answer: `We need to make a detail video which require expertise of talented artists on every 
        stages. There is no shortcut to create premium quality content, so cutting down 
        cost means affecting the quality.`,
  },
];

export default Accordion;
