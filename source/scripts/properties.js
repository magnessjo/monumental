// // Variables

// const container = document.querySelector('#properties');
// const carousel = container.querySelector('.list');
// const wrapper = carousel.querySelector('.wrapper');
// const entries = Array.from(wrapper.querySelectorAll('div[style]'));
// const sizes = [
//   {
//     min: 0,
//     max: 649,
//     numberToShow: 1,
//   },
//   {
//     min: 650,
//     max: 1199,
//     numberToShow: 2,
//   },
//   {
//     min: 1200,
//     max: 3000,
//     numberToShow: 3,
//   },
// ];

// const getEntriesValue = windowWidth =>
//   sizes.filter(
//     size =>
//       parseInt(windowWidth) <= size.max && parseInt(windowWidth) > size.min,
//   )[0];

// export default function() {
//   const windowWidth = window.innerWidth;
//   const numberOfEntries = getEntriesValue(windowWidth);
//   const entrySize = windowWidth / numberOfEntries.numberToShow || windowWidth;

//   wrapper.style.width = `${entrySize * entries.length}px`;
//   entries.forEach(entry => (entry.style.width = `${entrySize}px`));

//   // Load
// }
