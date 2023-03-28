/*
import $ from "jquery"

if (typeof document !== 'undefined') {
  $(document).ready(function() {
    let button_mobile_menu = $('.menu-btn')
    let mobile_menu = $('.menu-window')
    let body = $('body')

    button_mobile_menu.click(() => {
      const time = 600
      if (mobile_menu.hasClass('menu-window_active')) {
        mobile_menu.slideUp(time)
      } else {
        mobile_menu.slideDown(time)
      }
      button_mobile_menu.toggleClass('menu-btn_active')
      mobile_menu.toggleClass('menu-window_active')
      body.toggleClass('no-scroll')
      return false
    })
    function replace_dots () {
      let block1 = $('.main_1 .container')
      let block2 = $('.slider-block')
      let slick_dots = $('.slick-dots')
      if (block1) {
        block1.append(slick_dots)
      }
      if (block2) {
        block2.append(slick_dots)
      }
    }

    function find_arrows () {
      return ($('.main_1 .slider .slick-prev') !== null)
    }

    function update_news_slider () {
      if (!find_arrows()) {
        $('.main_1 .slider').css('justify-content', 'center')
        $('.main_1 .slider__item').css('margin', '0 10px')
      }
    }

    $(document).ready(function () {
      $('.main_1 .slider').slick({
        dots: true,
        arrows: true,
        adaptiveHeight: true,
        slidesToShow: 3,

    autoplay: true,
    autoplaySpeed: 3000,

        infinite: true,
        responsive: [
          {
            breakpoint: 2113,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 1450,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      })
      $('.slider-block .slider').slick({
        infinite: true,
        arrows: true,
        dots: true,
        adaptiveHeight: true
      })
      replace_dots()
    })

    $(window).resize(() => replace_dots())

    let items = $('.form_item_multi')
    let arrows = $('.arrow_mark')
    let multies = $('.item_multi')

    for (let i = 0; i < items.length; ++i) {
      console.log(items[i])
      items[i].addEventListener('click', () => {
        let num = items[i].getAttribute('filter_num')
        console.log('click')
        for (let j = 0; j < arrows.length; ++j) {
          console.log(1)
          if (arrows[j].getAttribute('arrow_num') === num) {
            if (arrows[j].getAttribute('src') === '/autovolt.shop/img/arrow_top.png') {
              arrows[j].setAttribute('src', '/autovolt.shop/img/arrow_bottom.png')
            } else {
              arrows[j].setAttribute('src', '/autovolt.shop/img/arrow_top.png')
            }
          }
        }
        for (let j = 0; j < multies.length; ++j) {
          console.log(2)
          if (multies[j].getAttribute('multi_num') === num) {
            if (multies[j].style.display === 'none') {
              multies[j].style.display = 'block'
            } else {
              multies[j].style.display = 'none'
            }
          }
        }
      })
    }

    let block1 = $('input[type="range"]')
    let block2 = $('.btn_clear')

    if (block1) {
      block1.change(function () {
        $('.form_item .cur-value').text(this.value)
      })
      block2.click(function () {
        $('.form_item .cur-value').text((block1.min + block1.max) / 2)
      })
    }
  })
}
*/