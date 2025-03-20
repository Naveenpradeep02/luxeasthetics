// =================================== scroll number count============================

const counters = document.querySelectorAll(".counter span");
const container = document.querySelector(".counters");
let active = false;

window.addEventListener("scroll", () => {
  if (
    window.pageYOffset > container.offsetTop - container.offsetHeight - 500 &&
    !active
  ) {
    counters.forEach((counter) => {
      counter.innerHTML = 0;
      let count = 0;

      const updateCount = () => {
        const target = parseInt(counter.dataset.count);
        if (count < target) {
          count++;
          counter.innerHTML = count;
          setTimeout(updateCount, 15);
        } else {
          counter.innerHTML = target;
        }
      };

      updateCount();
    });

    active = true;
  } else if (
    window.pageYOffset < container.offsetTop - container.offsetHeight - 500 &&
    active
  ) {
    counters.forEach((counter) => {
      counter.innerHTML = 0;
    });
    active = false;
  }
});

const arrow = document.getElementById("scrollArrow");
const firstSection = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > firstSection.offsetHeight) {
    arrow.style.display = "block";
  } else {
    arrow.style.display = "none";
  }
});

// =============================SLIDER
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("slider");

  // Duplicate images for seamless infinite scroll
  function duplicateSlides() {
    const slides = [...slider.children]; // Get all slides
    slides.forEach((slide) => {
      const clone = slide.cloneNode(true); // Clone each image
      clone.classList.add("clone"); // Mark as clone
      slider.appendChild(clone); // Append clone
    });
  }

  duplicateSlides();

  function autoScroll() {
    slider.scrollLeft += 1;
    if (slider.scrollLeft >= slider.scrollWidth / 2) {
      slider.scrollLeft = 0;
    }
  }

  setInterval(autoScroll, 100);
});
