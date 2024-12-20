const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});

// document.addEventListener("DOMContentLoaded", function () {
//     const slider = document.querySelector(".slider");
//     const slides = slider.querySelectorAll("li");
//     let scrollAmount = 0;

//     // Calculate the total scroll width (sum of all slides' widths + gaps)
//     const slideWidth = slides[0].offsetWidth + parseInt(getComputedStyle(slider).gap);
//     const totalScrollWidth = slideWidth * slides.length;

//     // Function to start continuous scrolling
//     const startContinuousScroll = () => {
//         scrollAmount -= 1; // Adjust this value for speed (negative for leftward scrolling)
        
//         if (Math.abs(scrollAmount) >= totalScrollWidth) {
//             scrollAmount = 0; // Reset to the start when the end is reached
//         }
        
//         slider.style.transform = `translateX(${scrollAmount}px)`;
//         requestAnimationFrame(startContinuousScroll);
//     };

//     // Initialize the scroll animation
//     requestAnimationFrame(startContinuousScroll);
// });


// Slider - please start working
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = slider.querySelectorAll("li");
  const previousButton = document.getElementById("previousButton");
  const nextButton = document.getElementById("nextButton");
  let currentIndex = 0;

  // Function to update/check slider pos
  const updateSlider = () => {
      const slideWidth = slides[currentIndex].offsetWidth + parseInt(getComputedStyle(slider).gap);
      slider.scrollTo({
          left: currentIndex * slideWidth,
          behavior: "smooth",
      });
  };

  // next slide
  nextButton.addEventListener("click", () => {
      if (currentIndex < slides.length - 1) {
          currentIndex++;
      } else {
          currentIndex = 0; //loop to startt
      }
      updateSlider();
  });

  // previous slide
  previousButton.addEventListener("click", () => {
      if (currentIndex > 0) {
          currentIndex--;
      } else {
          currentIndex = slides.length - 1; // loop to end
      }
      updateSlider();
  });

  // is this needed - check and remove if lame
  // auto slider
  // setInterval(() => {
  //     nextButton.click();
  // }, 5000);
});
