function navigateTo(page) {
  const content = Templates[page];
  if (content) {
    document.getElementById("main-content").innerHTML = content;
    if (page === "cadastro") attachFormValidation();
  }
}

window.addEventListener("DOMContentLoaded", () => {
  navigateTo("home");

  document.getElementById("toggle-contrast").addEventListener("click", () => {
    document.body.classList.toggle("high-contrast");
  });
});
