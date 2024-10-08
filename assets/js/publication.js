const publicationArticle = document.querySelector(".publicationArticle");
console.log(publicationArticle, document.querySelector(".publicationArticle"));
publicationArticle.classList.add("active");
Fancybox.bind('[data-fancybox="gallery"]', {
  transitionEffect:"slide",
});

document.querySelectorAll(".copy-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const code = button.nextElementSibling.querySelector("code").innerText;
    navigator.clipboard
      .writeText(code)
      .then(() => {
        button.innerHTML = `<i class="fa-solid fa-check"></i>`;
        setTimeout(
          () => (button.innerHTML = `<i class="fa-regular fa-copy"></i>`),
          2000
        );
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  });
});

document.addEventListener("click", function (event) {
  const activeArticle = document.querySelector("section.active");

  // If there's no active article, just return or do nothing
  if (!activeArticle) return;

  // If the click is outside the active article, perform your actions
  if (!activeArticle.contains(event.target)) {
    window.location.href = "/";
  }
});
