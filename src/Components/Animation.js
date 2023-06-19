import React, { useEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Animation = (props) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const heroText = new SplitType(".hero-text");
    const heroTextItalic = new SplitType(".hero-text-italic");
    const sectionHeading = new SplitType(".section-heading");
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.to(
      ".theme-background",
      {
        opacity: 1,
        y: 0,
        duration: 0.2,
      }
    )
      .to(
        ".logo-container",
        {
          opacity: 1,
          y: 0,
          duration: 0.2,
        }
      )
      .to(".lt", { opacity: 1, y: 0, duration: 0.3 })

      tl.to(".text-container .word", {
        y: 0,
        stagger: 0.1,
        duration: 0.2,
      })
        .to(".play-btn", { opacity: 1, duration: 1 })
        .to(
          [".slider-text-container", ".card"],
          { opacity: 1, y: 0 },
          "-=1"
        )
    .to(
      ".social",
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.1,
        delay:"-1"
      }
    )

    gsap.to(
      ".service-container",
      {
        scrollTrigger: {
          trigger: ".section-heading",
          start: " 20% 80%",
        },
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
      }
    );

    gsap.to("#services .word", {
      scrollTrigger: {
        trigger: "#services",
        start: " 70% 30%",
      },
      y: 0,
      stagger: 0.1,
      delay: 0.1,
      duration: 0.1,
    });

    tl.to("#clients .word", {
      scrollTrigger: {
        trigger: "#clients",
        start: " 70% 30%",
      },
      y: 0,
      stagger: 0.1,
      delay: 0.1,
      duration: 0.1,
    }).fromTo(
      ".clients-slider-img-container",
      { opacity: 0, y: 100 },
      {
        scrollTrigger: {
          trigger: "#clients h2",
          start: " 70% 30%",
        },
        opacity: 1,
        y: 0,
        stagger: 0.2,
      }
    );

    gsap.fromTo(
      "#faqs .reel-container",
      { opacity: 0, x: -20 },
      {
        scrollTrigger: {
          trigger: "#faqs",
          start: " 70% 30%",
        },
        opacity: 1,
        x: 0,
        duration: 1,
      }
    );

    gsap.fromTo(
      ".accordion .item",
      { opacity: 0, x: 10 },
      {
        scrollTrigger: {
          trigger: ".faqs",
          start: " 50% 80%",
        },
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.2,
      }
    );

    gsap.fromTo(
      "#contact .reel-container",
      { opacity: 0, x: 20 },
      {
        scrollTrigger: {
          trigger: "#contact",
        },
        opacity: 1,
        x: 0,
        duration: 1,
      }
    );

    tl.to(".contact-info h5", {
      scrollTrigger: {
        trigger: "#contact",
        start: " 80% 30%",
      },
      y: 0,
      opacity: 1,
      delay: 0.1,
      duration: 0.1,
    }).to(".contact-info h6", {
      scrollTrigger: {
        trigger: "#contact",
        start: " 80% 30%",
      },
      y: 0,
      opacity: 1,
      delay: 0.1,
      duration: 0.1,
    });
  }, []);

  return <> {props.children} </>;
};

export default Animation;
