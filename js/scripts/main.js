var slide_thumbnail = new Swiper(".slide-thumbnail", {
  slidesPerView: 5,
  direction: 'vertical',
  spaceBetween: 20,
  watchSlideProgress: true
});

var slide_hero = new Swiper(".slide-principal", {
  effect: 'fade',
  thumbs: {
    swiper: slide_thumbnail,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  }
});

const filters = document.querySelectorAll('.js-nav-games li a')
const tabPane = document.querySelectorAll('.tab-pane-games')


filters.forEach((element, index) => {
  element.addEventListener('click', (e) => {
    e.preventDefault()
    filters.forEach(item => {
      item.classList.remove('active')
    })

    tabPane.forEach(tab => {
      tab.classList.remove('active')
    })
    tabPane[index].classList.add('active')
    element.classList.add('active')
  })
})