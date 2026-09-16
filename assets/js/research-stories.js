/* Synthetic work schedules explain measurement; they do not represent estimated effects. */
(() => {
  const schedules = {
    1: [[9, 17]],
    2: [[8, 12], [14, 18]],
    4: [[7, 9], [11, 13], [15, 17], [19, 21]]
  };
  document.querySelectorAll('[data-schedule]').forEach(figure => {
    const track = figure.querySelector('[data-active-track]');
    const buttons = [...figure.querySelectorAll('[data-episodes]')];
    buttons.forEach(button => button.addEventListener('click', () => {
      const count = Number(button.dataset.episodes);
      [...track.children].forEach((bar, index) => {
        const interval = schedules[count][index];
        bar.hidden = !interval;
        if (interval) {
          bar.style.left = `${interval[0] / 24 * 100}%`;
          bar.style.width = `${(interval[1] - interval[0]) / 24 * 100}%`;
        }
      });
      const label = `${count} work episode${count === 1 ? '' : 's'}`;
      figure.querySelector('[data-episode-label]').textContent = label;
      track.setAttribute('aria-label', `Synthetic schedule: eight work hours in ${label}`);
      buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    }));
    figure.querySelector('.rs-switches').hidden = false;
  });

  document.querySelectorAll('.rs-css-art').forEach(figure => {
    const buttons = [...figure.querySelectorAll('[data-method]')];
    const select = button => {
      buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      figure.querySelector('.rs-method-note').textContent = button.dataset.method === 'topics'
        ? 'Topics: identifying recurring themes in discussions of family formation.'
        : 'Sentiment: labeling attitudes expressed in comments with Qwen.';
    };
    buttons.forEach(button => {
      button.disabled = false;
      button.addEventListener('click', () => select(button));
    });
    select(buttons[0]);
  });

  document.querySelectorAll('[data-cite]').forEach(link => link.addEventListener('click', () => {
    document.getElementById(link.dataset.cite).open = true;
  }));
})();
