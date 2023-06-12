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

    tl.fromTo(
      ".theme-background",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.2,
        delay: 1,
      }
    )
      .fromTo(
        ".logo-container",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.2,
        }
      )
      .fromTo(".lt", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.3 })

      tl.to(".text-container .char", {
        y: 0,
        stagger: 0.02,
        duration: 0.2,
      })
        .fromTo(".play-btn", { opacity: 0 }, { opacity: 1, duration: 1 })
        .fromTo(
          [".slider-text-container", ".card"],
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0 },
          "-=1"
        )
    .fromTo(
      ".social",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.1,
        delay:"-1"
      }
    )

    gsap.fromTo(
      ".service-container",
      { opacity: 0, y: 120 },
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

    gsap.to("#services .char", {
      scrollTrigger: {
        trigger: "#services",
        start: " 70% 30%",
      },
      y: 0,
      stagger: 0.02,
      delay: 0.1,
      duration: 0.1,
    });

    tl.to("#clients .char", {
      scrollTrigger: {
        trigger: "#clients",
        start: " 70% 30%",
      },
      y: 0,
      stagger: 0.05,
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
