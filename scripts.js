/*Responsive menu*/
let menuToggle = document.querySelector(".menu--toggle");
let menuToggleIcon = document.querySelector(".menu--toggle i");
let menu = document.getElementById("menu");

/*Lang menu*/
let langMenu = document.querySelector(".lang--arrow");
let langMenuIcon = document.querySelector(".lang--arrow i");
let langItem = document.querySelector(".lang--esp");

document.addEventListener("DOMContentLoaded", function (event) {
  /*Responsive menu*/
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");

    if (menu.classList.contains("show")) {
      menuToggleIcon.setAttribute("class", "fa fa-times");
    } else {
      menuToggleIcon.setAttribute("class", "fa fa-bars");
    }
  });
  /*Lang menu*/
  langMenu.addEventListener("click", () => {
    langItem.classList.toggle("lang-show");
  });
});

/* Cookies */
const buttonAcceptCookies = document.getElementById(
  "btn-accept-cookie"
);
const cookiesBanner = document.getElementById("cookies__banner");
const backgroundCookies = document.getElementById(
  "background__cookies"
);

/*if cookies has not accepted*/
if (!localStorage.getItem("cookies-accepted")) {
  cookiesBanner.classList.add("active");
  backgroundCookies.classList.add("active");
}

/*Click btn to ocult banner an background*/
buttonAcceptCookies.addEventListener("click", () => {
  cookiesBanner.classList.remove("active");
  backgroundCookies.classList.remove("active");

  localStorage.setItem("cookies-accepted", true);
});

/*Scroll to top */
const scrollTop = document.getElementById(
  "scroll-to-top__button"
);

const pxInit = () =>
  document.documentElement.scrollTop || document.body.scrollTop;

const toTop = () => {
  if (pxInit() > 0) {
    scrollTo(0, 0);
  }
};

const showToTop = () => {
  if (pxInit() > 100) {
    scrollTop.className = "show__scroll";
  } else {
    scrollTop.className = "ocult";
  }
};

scrollTop.addEventListener("click", toTop);
window.addEventListener("scroll", showToTop);

/*PRELOADER*/

window.addEventListener("load", () => {
  const loaderContainer = document.querySelector(
    ".loader-container"
  );
  loaderContainer.style.opacity = 0;
  loaderContainer.style.visibility = "hidden";
});

/*Send form*/

const submit = document.querySelector(".submit");
const inputs = document.querySelector("form");
const submited = document.querySelector(".submit-container");

submit.addEventListener("click", () => {
  Email.send({
    SecureToken: "8f6775fd-fd0e-4b8e-a948-1f995033cd57",
    To: "lblancod12345@gmail.com",
    From: inputs.elements["email"].value,
    Subject: "FWB Website form",
    Body: inputs.elements["name"].value,
  }).then((msg) => {
    submited.classList.add("submit-show");
    inputs.elements["name"].value = "";
    inputs.elements["email"].value = "";
    submited.addEventListener("click", () => {
      submited.classList.remove("submit-show");
    });
  });
});
