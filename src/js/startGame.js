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

const initialCombo = [
  ICONS.bass3,
  ICONS.ten,
  ICONS.bass2,
  ICONS.fisherman,
  ICONS.hook,
  ICONS.Q,
  ICONS.K,
  ICONS.bass2,
  ICONS.fridge,
];

const combos = [
  [
    ICONS.A,
    ICONS.bass4,
    ICONS.rod,
    ICONS.fridge,
    ICONS.fridge,
    ICONS.hook,
    ICONS.bass3,
    ICONS.fisherman,
    ICONS.J,
  ],

  [
    ICONS.bass1,
    ICONS.bass2,
    ICONS.ten,
    ICONS.goldenBass,
    ICONS.goldenBass,
    ICONS.boat,
    ICONS.rod,
    ICONS.fridge,
    ICONS.Q,
  ],

  [
    ICONS.boat,
    ICONS.rod,
    ICONS.J,
    ICONS.scatter,
    ICONS.scatter,
    ICONS.scatter,
    ICONS.hook,
    ICONS.goldenBass,
    ICONS.K,
  ],
];

const reelEl = document.getElementById('reel');
const spinBtn = document.getElementById('spinBtn');
const spinCount = document.getElementById('spinCount');
const gameWrapper = document.querySelector('.game-wrapper');

export const startGame = () => {
  gameWrapper.classList.remove('hidden');
  let spins = 3,
    step = 0;

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    const img = document.createElement('img');
    img.src = '/assets/icons/placeholder.png';
    cell.appendChild(img);
    reelEl.appendChild(cell);
  }

  const cells = reelEl.querySelectorAll('img');

  initialCombo.forEach((src, idx) => {
    if (cells[idx]) cells[idx].src = src;
  });

  spinCount.textContent = spins;

  spinBtn.addEventListener('click', () => {
    if (spins === 0) return;
    spinBtn.disabled = true;
    reelEl.classList.add('spinning');

    setTimeout(() => {
      reelEl.classList.remove('spinning');
      combos[step].forEach((src, idx) => {
        cells[idx].src = src;
      });
      spins--;
      step++;
      spinCount.textContent = spins;

      if (step < combos.length) {
        spinBtn.disabled = false;
      } else {
        cells.forEach(img => img.classList.add('win'));
        setTimeout(() => showFinalPopup(), 1500);
      }
    }, 700);
  });
};
