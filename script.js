

// прокрутка сайта вверх
const scrollButton = document.getElementById("scroll_button");
scrollButton.style.display = 'none'
var scroll_button_visibling = 200
window.addEventListener('scroll', () => {
  if (window.pageYOffset > scroll_button_visibling) {
    scrollButton.style.transition = '.4s'
    scrollButton.style.display = 'flex'


  }
  else {
    scrollButton.style.transition = '.4s'
    scrollButton.style.display = 'none'

  }
})



// появление мужчины
var home_icon = document.getElementById('home');
home_icon.style.borderBottom = '1px solid white';
var man_banner_image = document.getElementById('man-image');
man_banner_image.addEventListener('animationend', () => {
  man_banner_image.style.animation = 'man_visibling_scroll 12s linear forwards';
});
var header_scroll = 60;
var header = document.getElementById('header');
header.style.position = 'absolute';
var logo = document.getElementById('logo');


// анимация header

window.addEventListener('scroll', () => {
  if (window.innerWidth > 768) {
    if (window.pageYOffset > header_scroll) {
      header.style.position = 'fixed';
      header.style.animation = 'header_transforming 500ms ease-in-out forwards';
      header.style.backgroundColor = 'rgba(41,41,41,1)';
      // logo.style.display = 'none';
      header.style.transition = '.4s';
    } else if (window.pageYOffset <= header_scroll) {
      header.style.animation = '';
      header.style.position = 'absolute';
      header.style.top = '0';
      // logo.style.display = 'block';
      header.style.backgroundColor = 'transparent';
    }
  }
});


// база данных


var working_grafik = [
  {
    title: 'WORKING HOURS',
    about: `Alienum phaedrum torquatos nec eu, vis detraxit periculis exnihil expetendis in mei.
     Mei an peric ula euripidis, hinc partem ei est. Eos ei nisl graecis. vix aperiri.`,
    monday: 'Monday - Friday:',
    saturday: 'Saturday:',
    sunday: 'Sunday:',
    monday_hour: '9am - 5pm',
    saturday_hour: '9am - 1pm',
    sunday_hour: 'Closed',
  }

]
var gallery_contact = [
  {
    phone_icon: './assets/icon/home-custom-icon-1.png',
    phone_number: '0022 658 77 985',
    phone_info: 'Book An Appointment',
  }
]

var Gallery_Content = [
  {
    title: 'Only The Best Materials',
    title2: 'AMAZING QUALITY'
  },
]

var gallery_photos = [
  './assets/galerry/home-gallery-img-1.jpg',
  './assets/galerry/home-gallery-img-2.jpg',
  './assets/galerry/home-gallery-img-3.jpg',
  './assets/galerry/home-gallery-img-4.jpg',
  './assets/galerry/home-gallery-img-5.jpg',
  './assets/galerry/home-gallery-img-6.jpg',
  './assets/galerry/home-gallery-img-7.jpg',
  './assets/galerry/home-gallery-img-8.jpg',
]
var quote = [

  {
    title: 'WHAT THEY SAY',
    info: `Pericu la es aperiri consequat aner iuser. lorem tincidunt vix at, vele pertinax sensibus
     id, errore epicurei mea et. Mea facilisis urbanies. Alienum phaedrum torquatos nec eu,
      vis detraxitssa periculiser ex, nihil expetendis in mei eis an.`,
    name: 'BY DAN PARKER'
  },

  {
    title: 'WHAT THEY SAY',
    info: `Alienum phaedrum torquatos nec eu, vis detraxitssa periculiser ex, nihil expetendis in 
      mei eis an pericu la es aperiri consequat aner iuser. lorem tincidunt vix at, vele pertinax 
      sensibus id, errore epicurei mea et. Mea facilisis urbanies`,
    name: 'BY JOSH HARRISON'

  }
]
var communication_info = [
  {
    title: 'TAKING MEASUREMENTS',
    title2: 'Our Marketing',
    info: `Alienum phaedrum torquatos nec eu, vis detraxitssa periculiser ex, nihil expetendis in 
    mei eis an pericu la es aperiri consequat aner iuser. lorem tincidunt vix at, vele
    `,
    mail_icon: '<i class="fa-regular fa-message" color="#bc7b6f"></i>',
    mail: 'info@yoursite.com',
    phone_icon: '<i class="fa-solid fa-mobile-screen" color="#bc7b6f"></i>',
    phone: '+(123) 456 -7890',
    resume_icon: '<i class="fa-regular fa-pen-to-square" color="#bc7b6f"></i>',
    resume: 'Download Resume',


  }
]
var about_container = document.getElementById('about-container')
// ИНФОРМАЦИЯ ПРО ЧАСОВ РАБОТЫ И КОНТАКТОВ МАГАЗИНА
function shop_info() {
  var shop_info_box = document.createElement('div')
  shop_info_box.classList.add('shop_working_info')
  about_container.append(shop_info_box)


  working_grafik.forEach((item) => {
    var work_hour_box = document.createElement('div')
    work_hour_box.classList.add('work_hour_box')
    shop_info_box.append(work_hour_box)
    var title_div = document.createElement('div')
    work_hour_box.append(title_div)
    var title = document.createElement('h1')
    title.innerText = item.title
    title.classList.add('work_title')
    title_div.append(title)
    var info_div = document.createElement('div')
    var info = document.createElement('p')
    info.innerText = item.about
    info.classList.add('work_info_txt')
    info_div.append(info)
    work_hour_box.append(info_div)
    // ЧАСЫ MONDAY FRIDAY


    var monday_box = document.createElement('div')
    monday_box.style.display = 'flex'
    monday_box.style.alignItems = 'bottom'
    monday_box.style.justifyContent = 'space-between'
    monday_box.style.width = '100%'
    work_hour_box.append(monday_box)
    var monday_friday_title_box = document.createElement('div')
    monday_box.append(monday_friday_title_box)
    var monday_friday_title = document.createElement('span')
    monday_friday_title.style.cssText = 'color:white;font-size:19px;line-height:27px;font-family:Playfair Display,sans-serif;font-style:italic'
    monday_friday_title.innerText = item.monday
    monday_friday_title_box.append(monday_friday_title)
    var monday_friday_border = document.createElement('div')
    monday_friday_border.classList.add('work_hour_border')
    monday_box.append(monday_friday_border)
    var monday_hour_title_box = document.createElement('div')
    monday_box.append(monday_hour_title_box)
    var monday_hour_title = document.createElement('span')
    monday_hour_title.style.cssText = 'color:white;font-size:19px;line-height:27px;font-family:Playfair Display,sans-serif;font-style:italic'
    monday_hour_title.innerText = item.monday_hour
    monday_hour_title_box.append(monday_hour_title)

    // ЧАСЫ SATURDAY

    var saturday_box = document.createElement('div')
    saturday_box.style.display = 'flex'
    saturday_box.style.alignItems = 'bottom'
    saturday_box.style.justifyContent = 'space-between'
    saturday_box.style.width = '100%'
    work_hour_box.append(saturday_box)
    var saturday_title_box = document.createElement('div')
    saturday_box.append(saturday_title_box)
    var saturday_title = document.createElement('span')
    saturday_title.style.cssText = 'color:white;font-size:19px;line-height:27px;font-family:Playfair Display,sans-serif;font-style:italic'
    saturday_title.innerText = item.saturday
    saturday_title_box.append(saturday_title)
    var saturday_border = document.createElement('div')
    saturday_border.classList.add('work_hour_border')
    saturday_box.append(saturday_border)
    var saturday_hour_title_box = document.createElement('div')
    saturday_box.append(saturday_hour_title_box)
    var saturday_hour_title = document.createElement('span')
    saturday_hour_title.style.cssText = 'color:white;font-size:19px;line-height:27px;font-family:Playfair Display,sans-serif;font-style:italic'
    saturday_hour_title.innerText = item.saturday_hour
    saturday_hour_title_box.append(saturday_hour_title)


    //  ЧАСЫ SUNDAY 

    var sunday_box = document.createElement('div')
    sunday_box.style.display = 'flex'
    sunday_box.style.alignItems = 'bottom'
    sunday_box.style.justifyContent = 'space-between'
    sunday_box.style.width = '100%'
    work_hour_box.append(sunday_box)
    var sunday_title_box = document.createElement('div')
    sunday_box.append(sunday_title_box)
    var sunday_title = document.createElement('span')
    sunday_title.style.cssText = 'color:white;font-size:19px;line-height:27px;font-family:Playfair Display,sans-serif;font-style:italic'
    sunday_title.innerText = item.sunday
    sunday_title_box.append(sunday_title)
    var sunday_border = document.createElement('div')
    sunday_border.classList.add('work_hour_border')
    sunday_box.append(sunday_border)
    var sunday_hour_title_box = document.createElement('div')
    sunday_box.append(sunday_hour_title_box)
    var sunday_hour_title = document.createElement('span')
    sunday_hour_title.style.cssText = 'color:white;font-size:19px;line-height:27px;font-family:Playfair Display,sans-serif;font-style:italic'
    sunday_hour_title.innerText = item.sunday_hour
    sunday_hour_title_box.append(sunday_hour_title)

  })

  // КОНТАКТЫ 
  var contact_container = document.createElement('div')
  contact_container.classList.add('contact_container')

  // Обход массива для рендера контактов

  gallery_contact.forEach((item) => {
    var phone_icon_box = document.createElement('div')
    var phone_icon_img = document.createElement('img')
    phone_icon_box.classList.add('phone_icon_box')
    phone_icon_img.src = item.phone_icon
    phone_icon_box.append(phone_icon_img)
    contact_container.append(phone_icon_box)
    var phone_number_box = document.createElement('div')
    var phone_number = document.createElement('span')
    phone_number.innerText = item.phone_number
    phone_number.classList.add('phone_number')
    phone_number_box.append(phone_number)
    contact_container.append(phone_number_box)


    var phone_info_box = document.createElement('div')
    var phone_info_title = document.createElement('span')
    phone_info_title.innerText = item.phone_info
    phone_info_title.classList.add('phone_info_title')
    phone_info_box.append(phone_info_title)
    contact_container.append(phone_info_box)
    shop_info_box.append(contact_container)
  })


}
shop_info()


// Кантейнер фотографии

function Gallery_Container() {

  // gallery info
  var gallery_container = document.createElement('div')
  gallery_container.classList.add('gallery_container')
  var gallery_info_box = document.createElement('div')
  gallery_info_box.classList.add('gallery_info_box')
  gallery_container.append(gallery_info_box)


  // gallery photos 
  var gallery_box = document.createElement('div')
  gallery_box.classList.add('gallery_box')
  gallery_container.append(gallery_box)
  Gallery_Content.forEach((item) => {
    var gallery_title1_box = document.createElement('div')

    gallery_info_box.append(gallery_title1_box)
    var gallery_titile1_title = document.createElement('span')
    gallery_titile1_title.classList.add('gallery_title1')
    gallery_titile1_title.innerText = item.title
    gallery_title1_box.append(gallery_titile1_title)
    var gallery_title2_box = document.createElement('div')
    gallery_info_box.append(gallery_title2_box)
    var gallery_title2_title = document.createElement('h1')
    gallery_title2_title.classList.add('gallery_title2')
    gallery_title2_title.innerText = item.title2
    gallery_title2_box.append(gallery_title2_title)
    about_container.append(gallery_container)
  })
  gallery_photos.forEach((item) => {
    var photo_box = document.createElement('div')
    photo_box.classList.add('photo_box')
    gallery_box.append(photo_box)
    var photo_img = document.createElement('img')
    photo_img.src = item
    photo_box.append(photo_img)
    about_container.append(gallery_container)
  })
}
Gallery_Container()


// КОНТЕЙНЕР ЦИТАТ
function Quote_Container() {
  var quote_container = document.getElementById('quote-container')
  var info_box_container = document.createElement('div')
  info_box_container.classList.add('quote_info_container')
  var quote_btn_box = document.createElement('div')
  quote_btn_box.classList.add('quote_button_box')
  info_box_container.append(quote_btn_box)
  var left_arrow_box = document.createElement('button')
  left_arrow_box.innerHTML = '<i class="fa-solid fa-chevron-left"></i>'
  left_arrow_box.classList.add('left_arrow')
  quote_btn_box.append(left_arrow_box)
  var right_arrow_box = document.createElement('button')
  right_arrow_box.innerHTML = '<i class="fa-solid fa-chevron-right"></i>'
  right_arrow_box.classList.add('right_arrow')
  quote_btn_box.append(right_arrow_box)
  quote_container.append(info_box_container)
  var quote_info2_box = document.createElement('div')
  var quote_info1_box = document.createElement('div')
  var counter_quote = 0
  quote.forEach((item) => {
    counter_quote++
    if (counter_quote == 2) {
      quote_info2_box.style.animation = 'show2 5s ease-in-out infinite'
      quote_info2_box.classList.add('quote_info_box2')
      info_box_container.append(quote_info2_box)
      var title_box = document.createElement('div')
      quote_info2_box.append(title_box)
      var title = document.createElement('h1')
      title.classList.add('quote_title_text')
      title.innerText = item.title
      title_box.append(title)
      var info_box = document.createElement('div')
      quote_info2_box.append(info_box)
      var info_text = document.createElement('p')
      info_text.classList.add('quote_info_text')
      info_text.innerText = item.info
      info_box.append(info_text)
      var name_box = document.createElement('div')
      quote_info2_box.append(name_box)
      var name_text = document.createElement('span')
      name_text.classList.add('name_text')
      name_text.innerText = item.name
      name_box.append(name_text)
      info_box_container.append(quote_info2_box)
    }
    else {

      quote_info1_box.style.animation = 'show 5s ease-in-out infinite'
      quote_info1_box.classList.add('quote_info_box1')
      info_box_container.append(quote_info1_box)
      var title_box = document.createElement('div')
      quote_info1_box.append(title_box)
      var title = document.createElement('h1')
      title.classList.add('quote_title_text')
      title.innerText = item.title
      title_box.append(title)
      var info_box = document.createElement('div')
      quote_info1_box.append(info_box)
      var info_text = document.createElement('p')
      info_text.classList.add('quote_info_text')
      info_text.innerText = item.info
      info_box.append(info_text)
      var name_box = document.createElement('div')
      quote_info1_box.append(name_box)
      var name_text = document.createElement('span')
      name_text.classList.add('name_text')
      name_text.innerText = item.name
      name_box.append(name_text)
      info_box_container.append(quote_info1_box)
    }


    var quote_info_box_counter = 0

    right_arrow_box.onclick = () => {
      quote_info_box_counter += 1
      quote_info2_box.style.animation = ''
      quote_info1_box.style.animation = ''
      if (quote_info_box_counter % 2 !== 0) {
        quote_info1_box.style.opacity = '0'
        quote_info2_box.style.opacity = '1'
      }
      else {
        quote_info1_box.style.opacity = '1'
        quote_info2_box.style.opacity = '0'
      }

    }
    left_arrow_box.onclick = () => {
      quote_info_box_counter += 1
      quote_info1_box.style.animation = ''
      quote_info2_box.style.animation = ''
      if (quote_info_box_counter % 2 !== 0) {
        quote_info1_box.style.opacity = '1'
        quote_info2_box.style.opacity = '0'
      }
      else {
        quote_info1_box.style.opacity = '0'
        quote_info2_box.style.opacity = '1'
      }
    }



  })



}
Quote_Container()


// бокс комуникация 

function communication_container() {
  // контейнер который в html
  var communication_container = document.getElementById('communication-container')


  //  фотография контейнер

  var image_container = document.createElement('div')
  image_container.classList.add('image_container')
  communication_container.append(image_container)

  // фотография

  var image_box = document.createElement('img')
  image_box.src = './assets/man/home-video-box-img.jpg'
  image_box.classList.add('image_box')
  image_container.append(image_box)


  // регистрационный контейнер
  var communication_registration_container = document.createElement('div')
  communication_registration_container.classList.add('communication_registration_container')
  communication_container.append(communication_registration_container)

  // регистрационный бокс
  var communication_registration_box = document.createElement('div')
  communication_registration_box.classList.add('communication_registration_box')
  communication_registration_container.append(communication_registration_box)

  // информационный бокс 

  var communication_info_box = document.createElement('div')
  communication_info_box.classList.add('communication_info_box')
  communication_registration_container.append(communication_info_box)



  var name_input_box = document.createElement('div')
  name_input_box.classList.add('name_input_box')
  communication_registration_box.append(name_input_box)
  var name_input = document.createElement('input')
  name_input.placeholder = 'Name'
  name_input.type = 'text'
  name_input_box.append(name_input)
  var name_error_box = document.createElement('div')

  name_error_box.classList.add('name_error')
  communication_registration_box.append(name_error_box)
  var name_error = document.createElement('span')
  name_error.innerText = 'The field is required.'
  name_error.style.display = 'none'

  name_error_box.append(name_error)
  var email_input_box = document.createElement('div')
  email_input_box.classList.add('email_input_box')
  communication_registration_box.append(email_input_box)
  var email_input = document.createElement('input')
  email_input.type = 'email'
  email_input.placeholder = 'Email'
  email_input_box.append(email_input)

  var email_error_box = document.createElement('div')
  email_error_box.classList.add('email_error')
  communication_registration_box.append(email_error_box)
  var email_error = document.createElement('span')
  email_error_box.append(email_error)

  var text_box = document.createElement('div')
  text_box.classList.add('text_box')
  communication_registration_box.append(text_box)
  var text = document.createElement('textarea')
  text.placeholder = 'Message'
  text_box.append(text)
  var button_box = document.createElement('div')
  button_box.classList.add('button_box')
  communication_registration_box.append(button_box)
  var button = document.createElement('button')
  button.innerText = 'SEND US A MESSAGE'
  button_box.append(button)
  var validation_box_error = document.createElement('div')
  validation_box_error.innerHTML = '<div><i class="fa-solid fa-exclamation"></i></div><div><p>ONE OR MORE FIELDS HAVE AN ERROR. PLEASE CHECK AND TRY AGAIN.</p></div>'
  validation_box_error.classList.add('validation_box_error')
  communication_registration_box.append(validation_box_error)


  var validation_box_true = document.createElement('div')
  validation_box_true.innerHTML = '<div><i class="fa-regular fa-thumbs-up"></i></div><div><p>THANK YOU FOR YOUR MESSAGE. IT HAS BEEN SENT.</p></div>'
  validation_box_true.classList.add('validation_box_true')
  communication_registration_box.append(validation_box_true)


  button.onclick = () => {
    var name_input_value = name_input.value
    var mail_input_value = email_input.value
    var name_valid = false
    var mail_valid = false
    if (!name_input_value) {
      name_error.style.display = 'block'
      validation_box_error.style.display = 'block'
      validation_box_error.style.display = 'flex'
      validation_box_true.style.alignItems = 'start'
      validation_box_error.style.justifyContent = 'center'
    }
    else if (!/^[a-zA-Z]+$/.test(name_input_value)) {
      name_error.style.display = 'block'
      validation_box_error.style.display = 'flex'
      validation_box_true.style.alignItems = 'start'
      validation_box_error.style.justifyContent = 'center'
    }
    else {
      name_error.style.display = 'none'
      name_valid = true
    }
    if (!mail_input_value) {
      email_error.innerText = 'The field is required.'
      validation_box_error.style.display = 'block'
      validation_box_error.style.display = 'flex'
      validation_box_true.style.alignItems = 'start'
      validation_box_error.style.justifyContent = 'center'
    }
    else if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail_input_value)) {
      email_error.innerText = 'The field is required.'
      validation_box_error.style.display = 'block'
      validation_box_error.style.display = 'flex'
      validation_box_true.style.alignItems = 'start'
      validation_box_error.style.justifyContent = 'center'
    }
    else {
      email_error.innerText = ''
      mail_valid = true
    }

    if (name_valid == true && mail_valid == true) {
      validation_box_error.style.display = 'none'
      validation_box_true.style.display = 'block'
      validation_box_true.style.display = 'flex'
      validation_box_true.style.alignItems = 'start'
      validation_box_true.style.justifyContent = 'center'
    }
  }
  communication_info.forEach((item) => {
    var title_box = document.createElement('div')
    title_box.classList.add('title_box')
    communication_info_box.append(title_box)
    var title = document.createElement('h1')
    title.innerText = item.title
    title_box.append(title)
    info_box = document.createElement('div')
    info_box.classList.add('info_box')
    communication_info_box.append(info_box)
    var info = document.createElement('p')
    info.innerText = item.info
    info_box.append(info)
    var mail_box = document.createElement('div')
    mail_box.classList.add('mail_box')
    communication_info_box.append(mail_box)
    var mail_icon_box = document.createElement('div')
    mail_icon_box.innerHTML = item.mail_icon
    mail_box.append(mail_icon_box)
    var mail = document.createElement('div')
    mail.classList.add('mail')
    mail.innerHTML = `<span>${item.mail}</span>`
    mail_box.append(mail)
    var phone_box = document.createElement('div')
    phone_box.classList.add('phone_box')
    communication_info_box.append(phone_box)
    var phone_icon_box = document.createElement('div')
    phone_icon_box.innerHTML = item.phone_icon
    phone_box.append(phone_icon_box)
    var phone = document.createElement('div')
    phone.innerHTML = `<span>${item.phone}</span>`
    phone_box.append(phone)
    var resume_box = document.createElement('div')
    resume_box.classList.add('resume_box')
    communication_info_box.append(resume_box)
    var resume_icon_box = document.createElement('div')
    resume_icon_box.innerHTML = item.resume_icon
    resume_box.append(resume_icon_box)
    var resume = document.createElement('div')
    resume.innerHTML = `<span>${item.resume}</span>`
    resume_box.append(resume)
  })


}
communication_container()

var menu_box = document.querySelector('.menu-box')
menu_box.style.height = 'auto'

window.addEventListener('resize', () => {


  var header = document.getElementById('header')
  if (window.innerWidth <= 768) {

    header.style.backgroundColor = 'rgba(41,41,41,1)'
    menu_box.style.height = '0'
    function header_menu_btn() {
      var header_menu_button = document.getElementById('menu_btn')
      header_menu_button.innerHTML = '<i class="fa-solid fa-bars"></i>'
      var menu_button_counter = 0
      header_menu_button.onclick = () => {
        menu_button_counter++
        if (menu_button_counter % 2 == 0) {
          header_menu_button.innerHTML = '<i class="fa-solid fa-bars"></i>'
          menu_box.style.height = '0'
        }
        else {
          header_menu_button.innerHTML = '<i class="fa-solid fa-xmark"></i>'
          menu_box.style.height = '400px'
        }
      }
    }
    header_menu_btn()
  } else {
    menu_box.style.height = 'auto'
    header.style.background = 'transparent'
  }
})

if (window.innerWidth <= 768) {
  menu_box.style.height = '0'

  function header_menu_btn() {
    var header = document.getElementById('header')
    header.style.transition = '.4s'
    var header_menu_button = document.getElementById('menu_btn')
    header_menu_button.innerHTML = '<i class="fa-solid fa-bars"></i>'
    var menu_button_counter = 0
    header_menu_button.onclick = () => {
      menu_button_counter++
      if (menu_button_counter % 2 == 0) {
        header_menu_button.innerHTML = '<i class="fa-solid fa-bars"></i>'
        menu_box.style.height = '0'
        header.style.backgroundColor = 'rgba(41,41,41,1)'
      }
      else {
        header_menu_button.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        menu_box.style.height = '400px'
        header.style.backgroundColor = 'rgba(41,41,41,1)'
      }
    }
  }
  header_menu_btn()
}
else {
  menu_box.style.height = 'auto'
}


window.addEventListener('scroll', () => {
  if (window.innerWidth <= 768) {
    if (window.pageYOffset > header_scroll) {
      header.style.position = 'fixed';
      header.style.backgroundColor = 'rgba(41,41,41,1)';
      // logo.style.display = 'none';
      header.style.transition = '.4s';
    } else if (window.pageYOffset <= header_scroll) {
      header.style.animation = '';
      header.style.position = 'fixed';
      header.style.top = '0';
      // logo.style.display = 'block';
      header.style.backgroundColor = 'rgba(41,41,41,1)';
    }
  }
})





/* <i class="fa-solid fa-bars"></i>
<i class="fa-solid fa-xmark"></i> */