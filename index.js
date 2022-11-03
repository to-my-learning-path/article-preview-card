var shareButton = document.querySelector(".profile__button");
shareButton.addEventListener("click", (event) => {
  var shareModel = document.querySelector(".profile__share");
  var currentShareModelVisibility = shareModel.style.visibility;
  if (shareModel.classList.contains("toggle-visibility")) {
    shareModel.classList.remove("toggle-visibility");
  } else {
    shareModel.classList.add("toggle-visibility");
  }
});
