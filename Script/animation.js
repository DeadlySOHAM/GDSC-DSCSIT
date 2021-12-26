const cards = document.querySelectorAll('.animate');

const Options = {
   threshold:0.2,
} ;

const observer = new IntersectionObserver( entries => {
   entries.forEach( 
      (entry) => {
         entry.target.classList.toggle("fadeIn",entry.isIntersecting) ;
      }
   );
},Options);

cards.forEach( card =>{
   observer.observe(card)
});