//Таймер обратного отсчета
//Создай плагин настраиваемого таймера, который ведет обратный отсчет
// до предварительно определенной даты. Такой плагин может 
//использоваться в блогах и интернет-магазинах, страницах 
//регистрации событий, во время технического обслуживания и т. д.

//Плагин ожидает следующую HTML-разметку и показывает 
//четыре цифры: дни, часы, минуты и секунды в формате XX:XX:XX:XX. 
//Количество дней может состоять из более чем двух цифр.

//Плагин это класс CountdownTimer, экземпляр которого создает 
//новый таймер с настройками.
// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2021'),
// });

const timer = {
  start() {
    const targetDate = new Date('Jul 17, 2021');
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = targetDate - currentTime;
      const transferTime = updateClock(deltaTime);
      updateClockFace(transferTime);
    }, 1000);
  },
};
timer.start();

// функция добавляет 0, если число меньше двухзначного;
function pad(value){
  return String(value).padStart(2, '0');
};

// функция с готовыми формулами для времени;
function updateClock(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs};
};

// функция обновляет время в разметке html
function updateClockFace({ days, hours, mins, secs}) {
  const daysRef = document.querySelector('[data-value="days"]');
  daysRef.textContent = `${days}`;
  const hoursRef = document.querySelector('[data-value="hours"]');
  hoursRef.textContent = `${hours}`;
  const minsRef = document.querySelector('[data-value="mins"]');
  minsRef.textContent = `${mins}`;
  const secsRef = document.querySelector('[data-value="secs"]');
  secsRef.textContent = `${secs}`;
};





