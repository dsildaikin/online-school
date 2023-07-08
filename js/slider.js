{
   timerId = setInterval(countdownTimer, 1000);

   const slides = document.querySelectorAll('.feedbacks__slide');
   let slideIndex = 1;
   showSlides(slideIndex);

   function nextSlide() {
      showSlides(slideIndex += 1);
   }

   function prevSlide() {
      showSlides(slideIndex -= 1);
   }

   function currentSlide(n) {
      showSlides(slideIndex = n);
   }
   
   function showSlides(n) {
      if (n > slides.length) {
         slideIndex = 1
      }
      if (n < 1) {
         slideIndex = slides.length
      }

      for (let slide of slides) {
         slide.style.display = 'none';
      }
      slides[slideIndex - 1].style.display = 'block';
   }

   const btnNextSlide = document.querySelector('.feedbacks__btn-next-slide');
   const btnPrevSlide = document.querySelector('.feedbacks__btn-prev-slide');

   btnNextSlide.addEventListener('click', () => nextSlide());
   btnPrevSlide.addEventListener('click', () => prevSlide());
}