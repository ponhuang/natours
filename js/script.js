// const allLinks = document.querySelectorAll("a:link");
// allLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = link.getAttribute("href");

//     // Scroll back to top
//     if (href === "#")
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });

//     // Scroll to other link
//     if (href !== "#" && href.startsWith("#")) {
//       const sectionEl = document.querySelector(href);
//       sectionEl.scrollIntoView({ behavior: "smooth" });
//     }

//     // Close mobile navigation
//     if (link.classList.contains("navigation__link"))
//       navigationEl.classList.toggle("nav-open");
//   });
// });

const btnNavEl = document.querySelector(".btn-nav");
const navEl = document.querySelector(".navigation__container");
btnNavEl.addEventListener("click", function () {
  navEl.classList.toggle("nav-open");
});
