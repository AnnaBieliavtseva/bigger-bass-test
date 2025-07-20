export const startTimer = durationInSeconds => {
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  let remaining = durationInSeconds;

  const intervalId = setInterval(() => {
    if (remaining <= 0) {
      clearInterval(intervalId);
      return;
    }

    remaining--;

    const mins = Math.floor(remaining / 60);
    const secs = remaining % 60;

    minutesEl.textContent = String(mins).padStart(2, '0');
    secondsEl.textContent = String(secs).padStart(2, '0');
  }, 1000);
};
