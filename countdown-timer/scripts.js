;(function() {
  window.onload = () => {
    const tomorrow = new Date(new Date().setDate((new Date().getDate()+2)));
    const seconds = document.querySelector('.timer-seconds__counter');
    const minutes = document.querySelector('.timer-minutes__counter');
    const hours = document.querySelector('.timer-hours__counter');
    const days = document.querySelector('.timer-days__counter');
    const timer = () => {
      let delta = Math.abs(
        tomorrow - new Date()
      ) / 1000;
      const result = {};
      const data = {
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
      };
      Object.keys(data).forEach(function(key){
        result[key] = Math.floor(delta / data[key]);
        delta -= result[key] * data[key];
      });
      seconds.textContent = result.second;
      minutes.textContent = result.minute;
      hours.textContent = result.hour;
      days.textContent = result.day;
    }
    const ticker = setInterval(() => timer(), 1000);
  };
})();

