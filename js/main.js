// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')


//  =============== HERO SECTION SLIDER ===============
new Swiper("#swiper-1", {
    effect: "fade",
    autoplay: {
        delay: 3500,
        disableOnInteraction: true,
    },
    pagination: {
        el: "#swiper-1 .swiper-pagination",
        clickable: true,
    },
    lazyLoading: true,
    loop: true
});

// ========================== home about swiper =====================
new Swiper("#swiper-2", {
    // effect: "fade",
    autoplay: {
        delay: 4500,
        disableOnInteraction: true,
    },
    pagination: {
        el: "#swiper-1 .swiper-pagination",
        clickable: true,
    },
    lazyLoading: true,
    loop: true
});


function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 5700)
}

loaderAnimation()