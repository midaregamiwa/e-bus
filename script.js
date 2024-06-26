// Function: opens and close the menu when clicking the respective icon
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

// for every ELEMENT inside the constant TOGGLE...
for (const element of toggle) {
  // ...when JS 'LISTENS' to a CLICK, it must execute this FUNCTION:
  element.addEventListener("click", function () {
    // function: alternate the NAV element class in the CLASSLIST to contain or not the class 'show'
    nav.classList.toggle("show");
  });
}

// Function: when clicking an item in the menu, hide the menu
const links = document.querySelectorAll("nav ul li a");

// for every LINK inside the constant LINKS...
for (const link of links) {
  // ...when JS 'LISTENS' to a CLICK, it must execute this FUNCTION:
  link.addEventListener("click", function () {
    //function: remove the SHOW class from the selector NAV
    nav.classList.remove("show");
  });
}

// Function: change header class when scrolling
// Function: show back-to-top button when scrolling
// Function: keep menu section active according to visible section
const header = document.querySelector("#header");
const navHeight = header.offsetHeight;
const backToTopButton = document.querySelector(".back-to-top");
const sections = document.querySelectorAll("main section[id]"); //all sections inside main with an id

function changeHeaderOnScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
}

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;
  // numbers 8 and 4 reached by test and error. This is a general checkpoint for the page

  // for every section of the constant sections above
  for (const section of sections) {
    const sectionTop = section.offsetTop; //gets coordinate of its top
    const sectionHeight = section.offsetHeight; //gets its total height
    const sectionId = section.getAttribute("id"); //gets its attribute (id)
    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    //if it's between the start and the end checkpoint...
    if (checkpointStart && checkpointEnd) {
      //...the document gets the 'anchor with the [href=#nameOfSectionId]' and adds a class '.active'
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  }
}

window.addEventListener("scroll", function () {
  changeHeaderOnScroll();
  backToTop();
  activateMenuAtCurrentSection();
});

// Function: Swiper for the testimonials
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true, // controls with
  keyboard: true, // controls with

  // it's possible to add breakpoints for responsiveness
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
  },
});

//Function: Scroll reveal smoothly scrolls and reveals the content in the page using the function below
const scrollReveal = ScrollReveal({
  origin: "top", //vai vir do topo
  distance: "30px", //de uma distância de 30px
  duration: 700, //por 700ms
  reset: true, //e reseta ao voltar a página
});

//constant, show the following `items` in an {interval of 100ms}:
scrollReveal.reveal(
  `
#home .image, #home .text,
#about .image, #about .text,
#benefits header, #benefits .card,
#impacts header, #impacts .impacts,
#conclusion .image,#conclusion .text,
footer .brand, footer .social
`,
  { interval: 100 }
);
