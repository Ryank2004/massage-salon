// src/scripts/opacityOnScroll.js
import gsap from "gsap";

export function animateOnScroll({
  selector,
  fromVars = { opacity: 0, y: 100 },
  toVars = { opacity: 1, y: 0 },
  triggerOptions = { start: "top 80%", end: "top 30%", scrub: true, markers: true },
}) {
  const elements = document.querySelectorAll(selector);

  if (!elements.length) {
    console.warn(`Geen elementen gevonden voor selector: ${selector}`);
    return;
  }

  elements.forEach((el) => {
    gsap.fromTo(
      el,
      fromVars,
      {
        ...toVars,
        scrollTrigger: {
          trigger: el,
          ...triggerOptions,
        },
      }
    );
  });
}
