import { startGame } from './startGame';

export const showStartPopup = () => {
  const popup = document.getElementById('start-popup');
  popup.classList.remove('hidden');

  popup.querySelector('#activate-btn')?.addEventListener('click', () => {
    popup.classList.add('hidden');
    startGame();
  });
};
