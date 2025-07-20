import { showStartPopup } from './showPopUp';
import { startGame } from './startGame';

const backdrop = document.querySelector('.backdrop');
const loader = document.querySelector('.loader');

backdrop.classList.remove('hidden');
loader.classList.remove('hidden');

window.addEventListener('load', () => {
  setTimeout(() => {
    loader.classList.add('hidden');
    backdrop.classList.add('hidden');
    showStartPopup();
  }, 1500);
});
