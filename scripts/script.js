


const slider = document.querySelector('.slider'); 
const slide = document.querySelectorAll('.slide'); 
const prevBtn = document.querySelector('.prev'); 
const nextBtn = document.querySelector('.next'); 
let currentSlide = 0; 
let resultApi = new Array();

 

for (let i = 1; i < slide.length; i++) { 
  slide[i].style.display = 'none'; 
} 
 
prevBtn.addEventListener('click', () => { 
   
  slide[currentSlide].style.display = 'none'; 
  currentSlide--; 
  if (currentSlide < 0) { 
    currentSlide = slide.length - 1; 
  } 
  slide[currentSlide].style.display = 'block'; 
}); 
 
nextBtn.addEventListener('click', () => { 
 
  slide[currentSlide].style.display = 'none'; 
  currentSlide++; 
  if (currentSlide >= slide.length) { 
    currentSlide = 0; 
  } 
  slide[currentSlide].style.display = 'block'; 
});






