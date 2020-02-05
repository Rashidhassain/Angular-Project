const items = document.queryselectorAll('.item'),
  controls = document.querySelectorAll('.controls'),
  headerItems = document.querySelectorAll('.item-header'),
  descriptionItems = document.querySelectorAll('.item-description '),
  activeDelay = .76,
  interval = 5000;

let current = 0;

const slider = {
  init: () => {

    controls.forEach(control => control.addEventListener('click', e => { slider.clickedControl(e); }));
    controls[current].classList.add('active');
    items[current].classList.add('active');
  },

  nextSlide: () => {

    slider.reset();
    if (current === items.length - 1) current = -1;
    current++;
    controls[current].classList.add('active');
    items[current].classList.add('active');
    slider.transitionDelay(headerItems);
    slider.transitionDelay(descriptionItems);
  },
  clickedControl: e => {
    slider.reset();
    clearInterval(intervalF);

    const control = e.target,
      dataInddex = Number(control.dataset.index);
    control.classList.add('active');
    items.forEach((item, index) => {

      if (index === dataIndex) {
        item.classList.add('active');


      }
    });
    current = dataIndex;
    slider.transitionDelay(headerItems);
    slider.transitionDelay(descriptionItems);
    intervalF = setInterval(slider.nextSlide, interval);
  },
  reset: () => {

    items.forEach(item => item.classList.remove('active'));
    controls.forEach(control => control.classList.remove('active'));
  },
  transitionDelay: items => {
    let seconds;

    items.forEach(item => {

      const children = item.childNodes;
      let count = 1,
        delay;

      item.classList.value === 'item-header' ? seconds = 0.15 : seconds = .007;
      children.forEach(child => {

        if (child.classList) {

          item.parentNode.classList.contains('active') ? delay = count * + activeDelay : delay = count * seconds;
          child.firstElementChild.style.transitionDelay = '${delay}s';
          count++;  
        }
      });
    });
  }
}

let intervalF = setInterval(slider.nextSlide);
slider.init();

