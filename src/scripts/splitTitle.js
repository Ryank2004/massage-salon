// src/scripts/splitTitleAnimation.js
import gsap from "gsap";

export function animateSplitTitle(selector) {
  if (!window.SplitType) {
    console.warn("SplitType niet geladen");
    return;
  }

  const myTitle = new SplitType(selector, { types: "lines", lineClass: "line" });

  myTitle.lines.forEach((line) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("line-wrapper-title");
    line.parentNode.insertBefore(wrapper, line);
    wrapper.appendChild(line);
  });

  gsap.fromTo(
    `${selector} .line`,
    { y: 115 },
    {
      y: 0,
      stagger: 0.1,
      delay: 0.1,
      duration: 0.6,
      ease: "power3.out",
    }
  );
}
