import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  let timeline = gsap.timeline({});

  gsap.from(".main-block__image", {
    opacity: 0,
    rotateY: "45deg",
    duration: 1,
  });
  let animateText = document.querySelectorAll("[data-animate-text]");
  if (animateText.length) {
    animateText.forEach((el) => {
      let headings = el.querySelectorAll("[data-animate-text-item]"),
        animateEl = [];
      if (headings.length) {
        headings.forEach((el) => {
          gsap.set(el, {
            overflow: "hidden",
            display: "block",
          });

          const domEl = document.createElement("span");
          domEl.innerHTML = el.innerHTML;
          el.innerHTML = "";
          el.appendChild(domEl);

          gsap.set(el.querySelector("span"), {
            yPercent: 100,
            opacity: 0,
            display: "block",
          });
          animateEl.push(el.querySelector("span"));
        });
      }

      ScrollTrigger.batch(animateEl, {
        interval: 0.1,
        start: "top 85%",
        end: "bottom top",

        trigger: el,
        onEnter: (batch) =>
          gsap.to(batch, {
            yPercent: 0,
            ease: "power1.out",
            opacity: 1,
            duration: 0.8,
            stagger: 0.3,
          }),
      });
    });
  }
});
