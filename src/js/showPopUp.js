import { startGame } from './startGame';
import { startTimer } from './startTimer';

export const showStartPopup = () => {
  const popup = document.getElementById('start-popup');
  popup.classList.remove('hidden');

  popup.querySelector('#activate-btn')?.addEventListener('click', () => {
    popup.classList.add('hidden');
    startGame();
  });
};

export const showFinalPopup = () => {
  const popup = document.getElementById('final-popup');
  popup.classList.remove('hidden');
  startTimer(15 * 60);
};
