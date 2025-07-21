import { startGame } from './startGame';
import { startTimer } from './startTimer';

const startPopup = document.getElementById('start-popup');
const finalPopup = document.getElementById('final-popup');

export const showStartPopup = () => {
  startPopup.classList.remove('hidden');

  startPopup.querySelector('#activate-btn')?.addEventListener('click', () => {
    startPopup.classList.add('hidden');
    startGame();
  });
};

export const showFinalPopup = () => {
  finalPopup.classList.remove('hidden');
  startTimer(15 * 60);
};
