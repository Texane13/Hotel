const list = document.querySelector(".featured-product-section");
list.addEventListener("click", function (e) {
  if (e.target.className == "effacer") {
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

const searchBar = document.querySelector("#search input");
searchBar.addEventListener("keyup", function (e) {
  const term = e.target.value.toLowerCase();
  const menus = list.querySelectorAll(".featured-product-wrap");
  //   const menus = list.querySelectorAll(".product-wrap");
  Array.from(menus).forEach(function (menu) {
    // const title = menu.children[2].children[0].textContent;
    const title = menu.children[0].children[0].textContent;
    if (title.toLowerCase().indexOf(term) != -1) {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  });
});
