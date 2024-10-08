var window = this;
var body = document.body;
window.addEventListener("load", function () {
  window.setTimeout(function () {
    const getArticleName = localStorage.getItem("articleName");
    console.log(getArticleName);
    if (getArticleName) {
      showArticle(getArticleName);
    }
    const articles = document.querySelectorAll("article");
    articles.forEach((article) => {
      article.classList.remove("active");
      article.style.display = "none";
    });
    body.classList.remove("is-preload");
  }, 0);
});
function showArticle(articleId) {
  var header = document.getElementById("header");
  var footer = document.getElementById("footer");
  var heroSec = document.querySelector(".hero-sec");

  const articles = document.querySelectorAll("article");
  articles.forEach((article) => {
    article.classList.remove("active");
    article.style.display = "none";
  });

  const article = document.getElementById(articleId);
  heroSec.classList.add("scale-down");

  // Displaying the article element after 300 milliseconds
  setTimeout(() => {
    heroSec.style.display = "none";
    window.scrollTo(0, 0);

    article.style.display = "block";
  }, 300);

  // Executing the setTimeout function after the article is displayed
  setTimeout(() => {
    body.classList.add("popup-active");
    article.classList.add("active");
    footer.style.display = "none";
  }, 350);
}
console.log("Initializing event listeners");
document.querySelectorAll("button[data-article]").forEach((button) => {
  // console.log(button);

  button.addEventListener("click", () => {
    const articleId = button.getAttribute("data-article");
    // console.log(articleId);
    localStorage.setItem("articleName", articleId);
    showArticle(articleId);
  });
});
document.addEventListener("click", function (event) {
  const activeArticle = document.querySelector("article.active");

  // If there's no active article, just return or do nothing
  if (!activeArticle) return;

  // If the click is outside the active article, perform your actions
  if (!activeArticle.contains(event.target)) {
    localStorage.removeItem("articleName");

    var heroSec = document.querySelector(".hero-sec");
    var footer = document.getElementById("footer");
    var body = document.body; // Assuming you need this reference

    // Remove popup-active class from body
    body.classList.remove("popup-active");

    // Remove active class and hide the active article
    activeArticle.classList.remove("active");
    setTimeout(() => {
      activeArticle.style.display = "none";
      heroSec.style.display = "block";
      footer.style.display = "block";
    }, 300);

    // Remove the scale-down class after a short delay
    setTimeout(() => {
      heroSec.classList.remove("scale-down");
    }, 320);
  }
});
function hideArticle(article) {
  var heroSec = document.querySelector(".hero-sec");
  var footer = document.getElementById("footer");
  body.classList.remove("popup-active");
  article.classList.remove("active");

  setTimeout(() => {
    article.style.display = "none";
    heroSec.style.display = "block";
    footer.style.display = "block";
  }, 300);
  setTimeout(() => {
    heroSec.classList.remove("scale-down");
  }, 320);
}
document.querySelectorAll(".close").forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    localStorage.removeItem("articleName");
    const article = closeBtn.closest("article");
    hideArticle(article);
  });
});
