const mobileNav = document.getElementById("mobileNavigationMenu");
const bodyElement = document.body;
const btmbtn = document.querySelectorAll(".btmbtn");
const bottomNav = document.getElementById("bottomNav");
const linktwo = document.getElementById("linktwo");
const contactMainContainer = document.getElementById("contactMainContainer");
const mainContainer = document.getElementById("mainContainer");
const mobileMenuBtn = document.querySelectorAll(".mobileMenuBtn");

//////////////////////////////////////

document.addEventListener('scroll', function () {
  const scrollPosition = window.scrollY;
  const scaleFactor = 1 + scrollPosition / 2500; 
  const image = document.querySelector('.projectPhoto');
  image.style.transform = `scale(${scaleFactor})`;

  const maxScroll = 1200;
  const opacity = Math.max(0, 1 - scrollPosition / maxScroll); 
  image.style.opacity = opacity;
});

///////////////////////////////////////
function pad(number) {
  return (number < 10 ? "0" : "") + number;
}

function updateTime() {
  const now = new Date();
  const serbiaTime = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Belgrade" }));
  const hours = serbiaTime.getHours() % 12 || 12;
  const meridian = serbiaTime.getHours() >= 12 ? "pm" : "am";

  const timeString = `${pad(hours)}:${pad(serbiaTime.getMinutes())}:${pad(serbiaTime.getSeconds())}${meridian}`;
  document.getElementById("time").textContent = timeString;
}

setInterval(updateTime, 1000);
updateTime();
///////////////////////////////////////

const $cards = document.querySelectorAll(".projectBox");

function rotateToMouse(e, $card, bounds) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2,
  };
  const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

  $card.style.transform = `
    rotate3d(
      ${center.y / 120},
      ${-center.x / 120},
      0,
      ${-Math.log(distance) * 2}deg
    )
  `;
}

$cards.forEach(($card) => {
  let bounds;

  $card.addEventListener("mouseenter", () => {
    bounds = $card.getBoundingClientRect();
    const mouseMoveHandler = (e) => rotateToMouse(e, $card, bounds);
    document.addEventListener("mousemove", mouseMoveHandler);

    $card.addEventListener(
      "mouseleave",
      () => {
        document.removeEventListener("mousemove", mouseMoveHandler);
        $card.style.transform = "";
      },
      { once: true }
    );
  });
});

///////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  var btnPosnawr = document.querySelectorAll(".btn-posnawr");

  btnPosnawr.forEach(function (btn) {
    btn.addEventListener("mouseenter", function (e) {
      var parentOffset = this.getBoundingClientRect(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      this.querySelector("span").style.top = relY + "px";
      this.querySelector("span").style.left = relX + "px";
    });

    btn.addEventListener("mouseout", function (e) {
      var parentOffset = this.getBoundingClientRect(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      this.querySelector("span").style.top = relY + "px";
      this.querySelector("span").style.left = relX + "px";
    });
  });

  var hrefElements = document.querySelectorAll('[href="#"]');
  hrefElements.forEach(function (elem) {
    elem.addEventListener("click", function (event) {
      event.preventDefault();
    });
  });
});

///////////////////////////////////////

mobileMenuBtn.forEach((menuBtn) => {
  menuBtn.addEventListener("click", () => {
    if (mobileNav.style.transform === "translateX(-100%)") {
      mobileNav.style.transform = "translateX(0%)";
      bodyElement.style.overflow = "hidden";
    } else {
      closeNav();
    }
  });
});

function closeNav() {
  mobileNav.style.transform = "translateX(-100%)";
  bodyElement.style.overflow = "";
}

const closeNavAndScrollToTop = () => {
  closeNav();
  window.scrollTo(0, 0);
};

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    closeNav();
    section.scrollIntoView();
  }
}

document
  .getElementById("projectsMenu")
  .addEventListener("click", () => scrollToSection("projectsContainer"));
document
  .getElementById("homeMenu")
  .addEventListener("click", closeNavAndScrollToTop);

/////////////////////////////////////

window.addEventListener("scroll", function () {
  let scrollPosition = window.pageYOffset;
  let windowWidth = window.innerWidth;

  let parallaxSpeed = windowWidth > 1000 ? 0.35 : 0.2;

  document.getElementById("introductionContainer").style.transform =
    "translateY(" + scrollPosition * parallaxSpeed + "px)";
});

/////////////////////////////////////

function toggleContactForm() {
  if (contactMainContainer.style.display !== "block") {
    contactMainContainer.style.display = "block";
    linktwo.innerText = "Home";
    setTimeout(() => {
      contactMainContainer.style.transform = "translateY(0vh)";
    }, 1);
    setTimeout(() => {
      bodyElement.style.overflowY = "hidden";
    }, 500);
  } else {
    contactMainContainer.style.transform = "translateY(-105vh)";
    bodyElement.style.overflowY = "auto";
    linktwo.innerText = "Contact";
    setTimeout(() => {
      contactMainContainer.style.display = "none";
    }, 505);
  }
}

function toggleContactFormAndCloseNav() {
  toggleContactForm();
  closeNav();
}

linktwo.addEventListener("click", toggleContactForm);
document.getElementById("mobileContact").addEventListener("click", toggleContactFormAndCloseNav);
/////////////////////////////////////s
/*
const circle = $(".circle");
const text = $(".text");

$('.menu').on('mousemove', function (e) {
    const s = e.pageX - circle.offset().left;
    const o = e.pageY - circle.offset().top;

    gsap.to(circle, {
        duration: 0.3,
        x: (s - circle.width() / 2) / circle.width() * 50,
        y: (o - circle.height() / 2) / circle.height() * 50,
        scale: 1.2,
        ease: "power2.out"
    });

    gsap.to(text, {
        duration: 0.3,
        x: (s - circle.width() / 2) / circle.width() * 80,
        y: (o - circle.height() / 2) / circle.height() * 80,
        ease: "power2.out"
    });
});

$('.menu').on('mouseleave', function () {
    gsap.to(circle, {
        duration: 0.3,
        x: 0,
        y: 0,
        scale: 1,
        ease: "power2.out"
    });

    gsap.to(text, {
        duration: 0.3,
        x: 0,
        y: 0,
        ease: "power2.out"
    });
});*/
/////////////////////////////////////

//////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  let scrollToBottomButton = document.getElementById("scrollToBottomButton");

  scrollToBottomButton.addEventListener("click", function () {
    let documentHeight = document.documentElement.scrollHeight; // Height of the entire document
    let viewportHeight = window.innerHeight; // Viewport height
    let targetPosition = documentHeight + 0.7 * viewportHeight; // Bottom of the page + 70vh

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});

//////////insights btn////////////////
/////////////////////////////////////////
