"use client";

import { useEffect } from "react";

const Counters = () => {
  const animateCounter = (element: HTMLElement, target: string | null) => {
    if (!target) return;

    let start = 0;
    const end = parseInt(target);
    const duration = 2000; 
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      element.innerText = start.toString();
      if (start === end) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  const isInViewport = (element: HTMLElement): boolean => {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  useEffect(() => {
    const handleScroll = () => {
      const counters = document.querySelectorAll<HTMLElement>(".counter");
      counters.forEach((counter) => {
        if (isInViewport(counter) && counter.innerText === "0") {
          animateCounter(counter, counter.getAttribute("data-target"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#2c7bbd] flex items-center justify-center p-5 mt-4">
      <div className="md:flex gap-32 lg:gap-40 counter-container p-6">
        <div className="counter-item text-center mb-4 md:mb-0 relative">
          <h2 className="flex items-center justify-center text-white text-6xl font-bold">
            <span className="counter" data-target="10">
              0
            </span>
            +
          </h2>
          <p className="text-white text-lg font-medium mt-4">Years of Experience</p>
          <div className="hidden md:block absolute right-[-4rem] top-1/2 transform -translate-y-1/2 h-16 w-px bg-white/100"></div>
        </div>

        <div className="counter-item text-center mb-4 md:mb-0 relative">
          <h2 className="flex items-center justify-center text-white text-6xl font-bold">
            <span className="counter" data-target="20">
              0
            </span>
            +
          </h2>
          <p className="text-white text-lg font-medium mt-4">Successful Program</p>
          <div className="hidden md:block absolute right-[-4rem] top-1/2 transform -translate-y-1/2 h-16 w-px bg-white/100"></div>
        </div>

        <div className="counter-item text-center mb-4 md:mb-0 relative">
          <h2 className="flex items-center justify-center text-white text-6xl font-bold">
            <span className="counter" data-target="50">
              0
            </span>
            +
          </h2>
          <p className="text-white text-lg font-medium mt-4">Trained professionals</p>
          <div className="hidden md:block absolute right-[-4rem] top-1/2 transform -translate-y-1/2 h-16 w-px bg-white/100"></div>
        </div>

        <div className="counter-item text-center">
          <h2 className="flex items-center justify-center text-white text-6xl font-bold">
            <span className="counter" data-target="87">
              0
            </span>
            +
          </h2>
          <p className="text-white text-lg font-medium mt-4">Special People</p>
        </div>
      </div>
    </div>
  );

};

export default Counters;
