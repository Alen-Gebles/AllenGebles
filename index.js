const mobileNav = document.getElementById("mobileNavigationMenu");
const bodyElement = document.body;
const btmbtn = document.querySelectorAll(".btmbtn")
const bottomNav = document.getElementById("bottomNav")
const linktwo = document.getElementById("linktwo")
const contactMainContainer = document.getElementById("contactMainContainer")
const mainContainer = document.getElementById("mainContainer")
const mobileMenuBtn = document.querySelectorAll(".mobileMenuBtn")
///////////////////////////////////////

mobileMenuBtn.forEach((menuBtn) => {
  menuBtn.addEventListener("click", () => {
  if (mobileNav.style.transform === "translateX(-100%)") {
    mobileNav.style.transform = "translateX(0%)";
    bodyElement.style.overflow = "hidden";
  } else {
    closeNav();
  }
})
})


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

document.getElementById("projectsMenu").addEventListener("click", () => scrollToSection("projectsContainer"));
document.getElementById("homeMenu").addEventListener("click", closeNavAndScrollToTop);
console.log(mobileMenuBtn)

/////////////////////////////////////

window.addEventListener('scroll', function() {
  let scrollPosition = window.pageYOffset;
  let windowWidth = window.innerWidth;

  let parallaxSpeed = windowWidth > 1000 ? 0.35 : 0.2;

  document.getElementById("introductionContainer").style.transform = 'translateY(' + scrollPosition * parallaxSpeed + 'px)';
});

/////////////////////////////////////

function toggleContactForm() {
  if (contactMainContainer.style.display !== "block") {
    contactMainContainer.style.display = "block";
    linktwo.innerText = "Home";
    setTimeout(() => {
      contactMainContainer.style.transform = "translateY(0vh)";
      mainContainer.style.transform = `translateY(105vh)`;
    }, 1);
    setTimeout(() => {
      bodyElement.style.overflowY = "hidden";
    }, 500);
  } else {
    contactMainContainer.style.transform = "translateY(-105vh)";
    bodyElement.style.overflowY = "auto";
    mainContainer.style.transform = `translateY(-0vh)`;
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

/////////////////////////////////////
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
});
/////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
  var btnPosnawr = document.querySelectorAll('.btn-posnawr');

  btnPosnawr.forEach(function(btn) {
    btn.addEventListener('mouseenter', function(e) {
      var parentOffset = this.getBoundingClientRect(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
      this.querySelector('span').style.top = relY + 'px';
      this.querySelector('span').style.left = relX + 'px';
    });

    btn.addEventListener('mouseout', function(e) {
      var parentOffset = this.getBoundingClientRect(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
      this.querySelector('span').style.top = relY + 'px';
      this.querySelector('span').style.left = relX + 'px';
    });
  });

  var hrefElements = document.querySelectorAll('[href="#"]');
  hrefElements.forEach(function(elem) {
    elem.addEventListener('click', function(event) {
      event.preventDefault();
    });
  });
});


//////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
  let scrollToBottomButton = document.getElementById('scrollToBottomButton');

  scrollToBottomButton.addEventListener('click', function() {
    let documentHeight = document.documentElement.scrollHeight; // Height of the entire document
    let viewportHeight = window.innerHeight; // Viewport height
    let targetPosition = documentHeight + (0.7 * viewportHeight); // Bottom of the page + 70vh

      window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
      });
  });
});

//////////insights btn////////////////
/////////////////////////////////////////