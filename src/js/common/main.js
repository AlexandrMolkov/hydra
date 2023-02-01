

const swiper = new Swiper('.why__swiper', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 4,
  spaceBetween: 20,
  speed: 600,
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev'
  },
  
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1160: {
      slidesPerView: 4,
      spaceBetween: 40
    },
  },
})

const swiperhero = new Swiper('.hero__swiper', {
direction: 'horizontal',
loop: true,
slidesPerView: 1,
spaceBetween: 20,
speed: 600,
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev'
},
})

const swipertech = new Swiper('.tech__swiper', {
direction: 'horizontal',
loop: false,
slidesPerView: 1,
spaceBetween: 20,
speed: 600,
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev'
},
breakpoints: {
  320: {
    slidesPerView: 1,
    spaceBetween: 20
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20
  },
  1200: {
    slidesPerView: 4,
    spaceBetween: 20
  },
},
})

const swiperhow = new Swiper('.how__swiper', {
direction: 'horizontal',
loop: false,
slidesPerView: 1,
spaceBetween: 20,
speed: 600,
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev'
},
breakpoints: {
  320: {
    slidesPerView: 1,
    spaceBetween: 40
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 40
  },
  1200: {
    slidesPerView: 4,
    spaceBetween: 40
  },
},
})



const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substring(1)
    console.log(blockID)
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}



window.addEventListener('resize', () =>  {
  if(window.innerWidth > 1024) {
    document.body.classList.remove(`lock`)
    document.querySelector(document.querySelector(`.burg`).dataset.target).classList.remove(`show`)
    document.querySelector(`.burg`).classList.remove(`open`)
  }
});