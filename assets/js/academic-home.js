/* Synthetic schedules illustrate fragmentation, not estimated research results. */
(() => {
  const cards = [...document.querySelectorAll('[data-explore]')];
  function selectResearch(topic) {
    cards.forEach(card => {
      const selected = card.dataset.explore === topic;
      card.setAttribute('aria-pressed', String(selected));
      document.getElementById(card.getAttribute('aria-controls')).hidden = !selected;
    });
  }
  cards.forEach(card => {
    card.setAttribute('role', 'button');
    card.addEventListener('click', event => {
      event.preventDefault();
      selectResearch(card.dataset.explore);
    });
    card.addEventListener('keydown', event => {
      if (event.key === ' ') {
        event.preventDefault();
        selectResearch(card.dataset.explore);
      }
    });
  });
  selectResearch('time');
  // All intervals sum to eight hours on the same 24-hour axis.
  const schedules = {
    1: [[9, 17]],
    2: [[8, 12], [14, 18]],
    4: [[7, 9], [11, 13], [15, 17], [19, 21]]
  };
  const day = document.querySelector('#bs-day');
  const countButtons = [...document.querySelectorAll('[data-count]')];
  countButtons.forEach(button => button.addEventListener('click', () => {
    const count = Number(button.dataset.count);
    [...day.children].forEach((bar, index) => {
      const interval = schedules[count][index];
      bar.hidden = !interval;
      bar.style.display = '';
      if (interval) {
        bar.style.left = `${interval[0] / 24 * 100}%`;
        bar.style.width = `${(interval[1] - interval[0]) / 24 * 100}%`;
      }
    });
    countButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    const label = `8 hours · ${count} work episode${count === 1 ? '' : 's'}`;
    document.querySelector('#bs-total').textContent = label;
    day.setAttribute('aria-label', `Synthetic schedule: ${label}`);
  }));
})();
