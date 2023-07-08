{
   const timer = document.querySelector('.timer');
   const deadline = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0o1);

   let timerId = null;

   function countdownTimer() {
      const diff = deadline - new Date();
      if (diff <= 0) {
         clearInterval(timerId);
      }
      const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

      const daysStr = days < 10 ? '0' + days : days;
      const hoursStr = hours < 10 ? '0' + hours : hours;
      const minutesStr = minutes < 10 ? '0' + minutes : minutes;
      const secondsStr = seconds < 10 ? '0' + seconds : seconds;

      timer.textContent = daysStr + ' : ' + hoursStr + ' : ' + minutesStr + ' : ' + secondsStr;
   }

   countdownTimer();
}