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