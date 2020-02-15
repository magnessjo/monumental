const scrollTo = (element, spread = 30) => {
  const documentBody =
    document.documentElement.scrollTop || document.body.scrollTop;
  const elm = document.body;
  let from = 0;
  const to = element.getBoundingClientRect();
  const toPosition =
    documentBody == 0 ? to.top - from - spread : to.top - spread;
  const currentPosition = window.pageYOffset;
  let frames = 30;
  const jump = (toPosition - from) / frames;
  from = currentPosition;

  function scroll() {
    if (frames > 0) {
      const position = from + jump;

      from = position;
      elm.scrollTop = from;
      document.documentElement.scrollTop = from;

      frames--;
      window.requestAnimationFrame(scroll);
    }
  }

  window.requestAnimationFrame(scroll);
};

export const Header = () => {
  const container = document.querySelector('Header');

  if (container) {
    const buttons = Array.from(container.querySelectorAll('button'));

    buttons.forEach(button =>
      button.addEventListener('click', () => {
        const id = button.getAttribute(`data-id`);
        const element = document.querySelector(`#${id}`);

        scrollTo(element);
      }),
    );
  }
};
