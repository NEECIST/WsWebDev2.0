/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SERVICES MODAL ===============*/


/*=============== MIXITUP FILTER PORTFOLIO ===============*/

const linkWork = document.querySelectorAll('.work__item')

let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    },
    callbacks: {
        onMixClick: function (state, originalEvent) {
            linkWork.forEach(l => l.classList.remove('active-work'))
            this.classList.add('active-work')
            console.log('The control "' + this.innerText + '" was clicked');
        }
    }
});

/* Link active work */
//
//function activeWork(){
//    linkWork.forEach(l => l.classList.remove('active-work'))
//    this.classList.add('active-work')
//}
//linkWork.forEach(l=> l.addEventListener('click', activeWork))


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// const sections = document.querySelectorAll('section[id]')

// function scrollActive() {
//     const scrollY = window.pageYOffset

//     sections.forEach(current => {
//         const sectionHeight = current.offsetHeight,
//             sectionTop = current.offsetTop - 58,
//             sectionId = current.getAttribute('id')

//         if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
//         } else {
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)

/*=============== LIGHT DARK THEME ===============*/
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//We obtain the current theme that the interface has by validating tha light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

//We validate if the user previously chose a topic
if (selectedTheme) {
    //If the validation is fulfilled, we ask what the issue was to know if we activated ou deactivated the light
    document.body.classList[selectedTheme == 'dark' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[selectedIcon == 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

//Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    //Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    //We save the theme and the current icon that the user choose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.home__data')


/*================ POPOUT CARDS ===================*/

function closePopout(element) {
    var card = element.parentElement.parentElement;
    var bgBox = card.parentElement;
    card.classList.add("hidden");
    bgBox.classList.add("hidden");
}

function openPopout(callingElement) {
    document.getElementById('card-' + callingElement.id).classList.remove('hidden');
    document.getElementById('card-' + callingElement.id).parentElement.classList.remove('hidden');
}


/*================ Carrousel ====================*/


function imgForward(element) {
    var carousel = element.parentElement;
    console.log(carousel);

    var imgs = carousel.getElementsByClassName('imgs');
    var imgsArr = Array.from(imgs);
    imgsArr.every((img, index) => {
        if (img.className.indexOf('hidden') == -1) {
            imgs[index].classList.add('hidden')
            if (index == imgsArr.length - 1) {
                imgs[0].classList.remove('hidden');
                return false;
            } else {
                imgs[index + 1].classList.remove('hidden');
                return false;
            }
        }
        return true;
    });
}

function imgBackward(element) {
    var carousel = element.parentElement;
    console.log(carousel);

    var imgs = carousel.getElementsByClassName('imgs');
    var imgsArr = Array.from(imgs);
    imgsArr.every((img, index) => {
        if (img.className.indexOf('hidden') == -1) {
            imgs[index].classList.add('hidden')
            if (index == 0) {
                imgs[imgsArr.length - 1].classList.remove('hidden');
                return false;
            } else {
                imgs[index - 1].classList.remove('hidden');
                return false;
            }
        }
        return true;
    });


}


/*================= Submit form ==============*/


function submitForm() {
    console.log("teste")




    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/976799723119865917/d7RoBMQsbb-y_b7hIJW9KH8_Do5wbXRTxyeofGMHxbkHybIUtQpaieN1MObNZ-O6doB6");

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
        username: "New webpage form submission",
        avatar_url: "",
        content: "The message to send @here",
        "embeds": [{
            "title": "Hello!",
            "description": "Hi! :grinning:"
        }]
    }

    request.send(JSON.stringify(params));

}
