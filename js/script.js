//navigation open search bar
const searchSection = document.querySelector(".search__section-navigation");
const btnSearchBar = document.querySelector(".loop");

// btnSearchBar.onclick = function () {
//   searchSection.classList.toggle("nav-open");
// };

//navigation appear aside

const headerSection = document.querySelector(".header");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    treshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(headerSection);

//close open nav by click on a body
const inputEl = document.querySelector(".input");
const btnEl = document.getElementById("btn");

document.onclick = function (e) {
  if (!inputEl.contains(e.target) && !btnEl.contains(e.target)) {
    document.classList.remove("nav-open");
  }
  searchSection.classList.toggle("nav-open");
};
