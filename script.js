
document.querySelectorAll(".year").forEach(function (yearElement) {
  yearElement.textContent = new Date().getFullYear();
});

// Highlight the navigation link that matches the current page.
const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".navbar a").forEach(function (link) {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});
