const nav = document.querySelector(".nav-items");

const backToTop = document.createElement("button");
backToTop.id = "back-to-top";
backToTop.innerHTML = '<i class="bx bx-up-arrow-alt"></i>';
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
  // Navbar shadow toggle
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }

  if (window.scrollY > window.innerHeight * 0.8) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
const searchInput = document.querySelector(".search input");
const posts = document.querySelectorAll(".post");

// Create "no results" message dynamically
const noResults = document.createElement("div");
noResults.textContent = "Load more to find related posts";
noResults.style.display = "none";
noResults.style.textAlign = "center";
noResults.style.padding = "20px";
noResults.style.fontWeight = "bold";
document.querySelector(".search").insertAdjacentElement("afterend", noResults);

searchInput.addEventListener("input", function () {
  const keyword = this.value.toLowerCase().trim();
  let matchCount = 0;

  posts.forEach((post) => {
    const introText = post.querySelector(".intro").textContent.toLowerCase();

    if (keyword === "" || introText.includes(keyword)) {
      post.style.display = "";
      matchCount++;
    } else {
      post.style.display = "none";
    }
  });

  // Show "no results" only if nothing matches
  noResults.style.display =
    matchCount === 0 && keyword !== "" ? "block" : "none";
});
const hamburger = document.querySelector(".hamburger");
const navStuff = document.querySelector(".navstuff");
const menu = document.querySelector(".bx");
const enter = document.querySelector(".enter");
const links = document.querySelectorAll(".mynav");
hamburger.addEventListener("click", () => {
  navStuff.classList.toggle("active");
  enter.classList.toggle("active");
  if (navStuff.classList.contains("active")) {
    menu.classList.replace("bx-menu", "bx-x");
  } else {
    menu.classList.replace("bx-x", "bx-menu");
  }
});
links.forEach((link) => {
  link.addEventListener("click", () => {
    navStuff.classList.remove("active");
    enter.classList.remove("active");
    menu.classList.replace("bx-x", "bx-menu");
  });
});
document.addEventListener("click", (e) => {
  if (!navStuff.contains(e.target) && !hamburger.contains(e.target)) {
    navStuff.classList.remove("active");
    enter.classList.remove("active");
    menu.classList.replace("bx-x", "bx-menu");
  }
});

const modeBtn = document.querySelector(".mode");
const modeIcon = modeBtn.querySelector("i");

// Set initial mode & icon based on system preference on page load
function setInitialMode() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches
  ) {
    document.body.classList.add("light-mode"); // add dark-mode class on body
    modeIcon.className = "bx bxs-moon"; // moon icon for dark mode
  } else {
    document.body.classList.remove("light-mode"); // remove dark-mode class for light
    modeIcon.className = "bx bxs-sun"; // sun icon for light mode
  }
}

// Toggle dark/light mode & icon
function toggleMode() {
  document.body.classList.toggle("light-mode"); // toggle dark-mode class

  if (document.body.classList.contains("light-mode")) {
    modeIcon.className = "bx bxs-moon"; // moon icon
  } else {
    modeIcon.className = "bx bxs-sun"; // sun icon
  }
}

// Run on page load
setInitialMode();

// Listen for toggle button click
modeBtn.addEventListener("click", toggleMode);
