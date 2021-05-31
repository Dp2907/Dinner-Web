function $(e) {
  return document.querySelector(e);
}

$("#myNavBtn").onclick = () => {
  $("#header__overlay").classList.add("header__overlay--active");
};

$("#navCloseBtn").onclick = () => {
  $("#header__overlay").classList.remove("header__overlay--active");
};
