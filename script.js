const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const progress = document.getElementById("progress");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

window.addEventListener("scroll", () => {
  const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
  const percentage = pageHeight > 0 ? (window.scrollY / pageHeight) * 100 : 0;
  progress.style.width = `${percentage}%`;
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

function editLink(event, name) {
  event.preventDefault();
  alert(`Replace this placeholder with your real ${name} URL in index.html.`);
}
