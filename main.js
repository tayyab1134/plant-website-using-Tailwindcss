
/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link"); // Added the dot for class selection
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-0"); // Correct Tailwind class for setting left to 0
    navMenu.classList.toggle("left-[-100%]"); // Toggle back to hidden state
    hamburger.classList.toggle("ri-close-large-line");
  // Toggle between menu and close icons
  if (hamburger.classList.contains("ri-menu-4-line")) {
    hamburger.classList.remove("ri-menu-4-line");
    hamburger.classList.add("ri-close-line");
} else {
    hamburger.classList.remove("ri-close-line");
    hamburger.classList.add("ri-menu-4-line");
}
});

navLinks.forEach(link => { 
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left-0"); // Toggle menu visibility
        navMenu.classList.toggle("left-[-100%]"); // Ensure proper hiding
        hamburger.classList.toggle("ri-close-line"); // Toggle close icon
        hamburger.classList.toggle("ri-menu-4-line"); // Toggle menu icon
    });
});

// Optional: Close the menu when a link is clicked
/*navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.add("left-[-100%]"); // Hide menu after clicking a link
    });
});

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
const scrollup = () => {
    const scrollup = document.getElementById("scroll-up")

    if(this.scrollY >=250){
        scrollUpBtn.classList.remove("-bottom-1/2")
        scrollUpBtn.classList.add("bottom-4")
 
    } else {
        scrollUpBtn.classList.add("-bottom-1/2")
        scrollUpBtn.classList.remove("bottom-4")
    }
}
window.addEventListener("scroll",scrollup)


/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/

const scrollHeader = () => {
    const header = document.getElementById("navbar")

    if(this.scrollY >=250){
        header.classList.add("border-b" , "border-yellow-500")
 
    } else {
        header.classList.remove("border-b" , "border-yellow-500")
    }
}
window.addEventListener("scroll",scrollHeader)


/*~~~~~~~~~~~~~~~ SWIPER ~~~~~~~~~~~~~~~*/
const swiper = new Swiper('.swiper', {
    // Optional parameters
   speed:400,
   spaceBetween:30,
   autoplay:{
    delay:3000,
    disableOnInteraction:false
   },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true
    },
    grabCursor:true,
    breakpoints:{
        640: {
            slidesPreView:1
        },
        768: {
            slidesPreView:2
        },
        1024: {
            slidesPreView:3
        },
    }
  });


/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/
const activeLink = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    let current = "home";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 60 ) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(item => {
        item.classList.remove("active");
        if (item.href.includes(current)) {
            item.classList.add("active");
        }
    });
};

window.addEventListener("scroll", activeLink);


/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/

const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 300,
    reset: true

})
 sr.reveal('.home__data, .about__top, .popular__top, .review__top, .review__swiper, .footer__icon, .footer__content, .copy__right')
 sr.reveal('.home__image',{delay: 500, scale:0.5})

 sr.reveal('.service__card, .popular__card', {interval: 100})

 sr.reveal('.about__leaf', {delay:1000, origin: "right"})
 sr.reveal('.about__item__1-content, .about__item__2-img', { origin: "right"})
 sr.reveal('.about__item__2-content, .about__item__1-img', { origin: "left"})
 sr.reveal('.review__leaf, .footer__floral', {delay:1000, origin: "left"})


