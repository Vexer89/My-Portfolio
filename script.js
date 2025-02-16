function ScrollToElement(elementId, instance = 0) {
  const elements = document.querySelectorAll(elementId);
  if (elements.length > instance) {
    elements[instance].scrollIntoView({ behavior: "smooth" });
  }
}

const link0 = document.getElementById("link0");
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");

link0.addEventListener("click", function () {
  ScrollToElement(".header-container");
});

link1.addEventListener("click", function () {
  ScrollToElement(".Projects");
});

link2.addEventListener("click", function () {
  ScrollToElement(".Contact");
});

document.addEventListener("DOMContentLoaded", function () {
  const year = new Date().getFullYear();
  document.getElementById("year").textContent = year;
});
