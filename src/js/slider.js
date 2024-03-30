export default function Slider() {
   const carouselSlides = document.querySelectorAll(".item");
   const btnPrev = document.querySelector(".back");
   const btnNext = document.querySelector(".next");
   const dots = document.querySelectorAll(".dot");

   if (carouselSlides && btnPrev && btnNext && dots) {
      let currentSlide = 0;

      const activeDot = slide => {
         dots.forEach(dot => dot.classList.remove("active"));
         document
            .querySelector(`.dot[data-slide="${slide}"]`)
            .classList.add("active");
      };
      activeDot(currentSlide);

      const changeSlide = function (slides) {
         carouselSlides.forEach(
            (slide, index) =>
               (slide.style.transform = `translateX(${
                  100 * (index - slides)
               }%)`)
         );
      };
      changeSlide(currentSlide);

      btnNext.addEventListener("click", function () {
         currentSlide++;
         if (carouselSlides.length - 1 < currentSlide) {
            currentSlide = 0;
         }
         changeSlide(currentSlide);
         activeDot(currentSlide);
      });
      btnPrev.addEventListener("click", function () {
         currentSlide--;
         if (0 >= currentSlide) {
            currentSlide = 0;
         }
         changeSlide(currentSlide);
         activeDot(currentSlide);
      });

      dots.forEach(e => {
         e.addEventListener("click", function (e) {
            if (e.target.classList.contains("dot")) {
               const slide = e.target.dataset.slide;
               changeSlide(slide);
               activeDot(slide);
            }
         });
      });
   }
}
