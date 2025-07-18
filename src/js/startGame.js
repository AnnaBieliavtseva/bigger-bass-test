const ICONS = {
  bass1: '/assets/icons/bass1.png',
  bass2: '/assets/icons/bass2.png',
  bass3: '/assets/icons/bass3.png',
  bass4: '/assets/icons/bass4.png',
  boat: '/assets/icons/boat.png',
  fisherman: '/assets/icons/fisherman.png',
  fridge: '/assets/icons/fridge.png',
  goldenBass: '/assets/icons/goldenBass.png',
  scatter: '/assets/icons/scatter.png',
  hook: '/assets/icons/hook.png',
  rod: '/assets/icons/rod.png',
  ten: '/assets/icons/symbol10.png',
  Q: '/assets/icons/symbolQ.png',
  J: '/assets/icons/symbolJ.png',
  K: '/assets/icons/symbolK.png',
  A: '/assets/icons/symbolA.png',
};

const gameContainer = document.getElementById('game');
export const startGame = () => {
  gameContainer.classList.remove('hidden');
};
