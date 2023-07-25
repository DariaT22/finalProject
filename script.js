
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




const openPopupBtn = document.getElementById('openPopupBtn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');
const popupForm = document.getElementById('popupForm');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const sendButton = document.getElementById('submit');

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
    if(name != null && phone != null){
    // Сохраняем данные в cookies на 7 дней
    setCookie('name', name, 7);
    setCookie('phone', phone, 7);
    popup.style.display = 'none';
  }
  else{
    alert("Заполните форму!");
  }
});

//RESTAPI
window.onload = function() {
  getApi();
 setTimeout(setText, 3000);
};
  
function getApi(){
  for (let i = 1; i < 10; i++) {
    var url = 'https://jsonplaceholder.typicode.com/todos/' + i;
    fetch(url)
      .then(response => response.json())
      .then(json => resultApi.push(json)
      )
 }
};

function setText(){
  resultApi.forEach(elem => {
    var id_comments = 'comments_' + elem.id;
    var parent = document.getElementById(id_comments);
    if( parent != null){
      let p = document.createElement('p');
      p.textContent = elem.title;
      parent.appendChild(p);
    }
 
});
}