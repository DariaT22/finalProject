alert ('js runs');

const slider = document.querySelector('.slider'); 
const slide = document.querySelectorAll('.slide'); 
const prevBtn = document.querySelector('.prev'); 
const nextBtn = document.querySelector('.next'); 
let currentSlide = 0; 
 

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




const openPopupBtn = document.getElementById('openPopupBtn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');
const popupForm = document.getElementById('popupForm');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');

// Функция для установки cookies
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/`;
}

// Функция для чтения cookies
function getCookie(name) {
  const cookieArr = document.cookie.split(';');
  for (let i = 0; i < cookieArr.length; i++) {
    const cookiePair = cookieArr[i].split('=');
    if (decodeURIComponent(cookiePair[0].trim()) === name) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  return null;
}

// // Открытие popup при загрузке страницы, если cookies уже содержат данные
// window.addEventListener('load', () => {
//   const storedName = getCookie('name');
//   const storedPhone = getCookie('phone');
  
//   if (storedName && storedPhone) {
//     nameInput.value = storedName;
//     phoneInput.value = storedPhone;
//     popup.style.display = 'block';
//   }
// });

// Закрытие popup при клике на крестик
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Закрытие popup при клике вне окна
window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});

// Обработчик отправки формы
popupForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const phone = phoneInput.value;
  
  // Сохраняем данные в cookies на 7 дней
  setCookie('name', name, 7);
  setCookie('phone', phone, 7);
  
  // Дополнительные действия при отправке формы
  // Например, отправка данных на сервер или обновление страницы
});

console.log(name);