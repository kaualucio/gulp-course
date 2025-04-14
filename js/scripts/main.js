var slide_thumbnail = new Swiper(".slide-thumbnail", {
  slidesPerView: 5,
  direction: 'vertical',
  spaceBetween: 20,
  watchSlideProgress: true,
  breakpoints: {
    320: {
      direction: 'horizontal'
    },
    1050: {
      direction: 'vertical'
    }
  } 
});

const progressSlide = document.querySelector('.js-progress')
var slide_hero = new Swiper(".slide-principal", {
  effect: 'fade',
  thumbs: {
    swiper: slide_thumbnail,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  }, 
  on: {
    init: function() {
      progressSlide.classList.remove('animate')
      progressSlide.classList.remove('active')
      progressSlide.classList.add('animate')
      progressSlide.classList.add('active')
    },
    slideChangeTransitionStart: function() {
      progressSlide.classList.remove('animate')
      progressSlide.classList.remove('active')
      progressSlide.classList.add('active')
    },
    slideChangeTransitionEnd: function() {
      progressSlide.classList.add('animate')
    }
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

const btnOpenModal = document.querySelector('.js-open-modal')
const btnCloseModal = document.querySelector('.close')
console.log(btnOpenModal, btnCloseModal)
btnOpenModal.addEventListener('click', (e) => {
  e.preventDefault()
  document.documentElement.classList.add('show-modal')
})

btnCloseModal.addEventListener('click', (e) => {
  e.preventDefault()
  document.documentElement.classList.remove('show-modal')
})


const btnMenu = document.querySelectorAll('.js-btn-menu')
const menuSite = document.querySelectorAll('.js-menu')
btnMenu.forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault()

    menuSite.forEach(menu => {
      menu.classList.remove('active')
      menu.addEventListener('mouseleave', () => {
        menu.classList.remove('active')
        btnMenu.forEach(btnItem => {
          btnItem.classList.remove('active')
        })
      })
    })

    btnMenu.forEach(btnItem => {
      btnItem.classList.remove('active')
    })

    btn.classList.add('active')
    menuSite[index].classList.add('active')
  })
})