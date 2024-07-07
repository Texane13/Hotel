// ============================
//    Navbar Animation
// ============================

// selecting navbar elements
let header = document.querySelector("header");
let sectionContent = document.querySelector(".section-content");

// actions while scroll up or down
window.onscroll = () => {
  let scrollTop = document.documentElement.scrollTop;

  if (scrollTop > header.offsetHeight) {
    header.classList.add("active");
    sectionContent.style.marginTop = header.offsetHeight + "px";
  } else {
    header.classList.remove("active");
    sectionContent.style.marginTop = 0 + "px";
  }
};

// selecting navbar elements
let navItems = document.querySelectorAll(".menu-items li");

// selecting elements for menu toggle
let toggleBar = document.querySelector("#toggle-bar");
let navigationArea = document.querySelector(".menu-items");

// slelecting elements for search bar
let searchBtn = document.querySelector("#search-btn");
let searchBox = document.querySelector(".search-box");

// actions while toggle button click
toggleBar.addEventListener("click", function () {
  toggleBar.classList.toggle("active-toggler");
  navigationArea.classList.toggle("active-navbar");
  searchBox.classList.remove("active-search-box");
});

for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", function () {
    toggleBar.classList.remove("active-toggler");
    navigationArea.classList.remove("active-navbar");
  });
}

// bouton recheche
searchBtn.addEventListener("click", function () {
  searchBox.classList.toggle("active-search-box");
  toggleBar.classList.remove("active-toggler");
  navigationArea.classList.remove("active-navbar");
});
// ==========================
//    Navbar Animation
// ==========================

// =====================================
//    Product Cart Control Area Start
// =====================================

document.addEventListener("DOMContentLoaded", function () {
  // selecting featured products and product cart elements
  let shoppingCartBtn = document.querySelector("#icon-shopping-cart");
  let cartIconProductCounter = document.querySelector("#item-counter");
  let productCartArea = document.querySelector("#product-cart-area");

  let favoriteIcon = document.querySelectorAll(".add-to-favorite > span");
  let cartWishlistArea = document.querySelector(".cart-wishlist-area");

  let itemDeleteConfirmationBox = document.querySelector(
    ".remove-confirmation-message"
  );
  let itemDeleteConfirmationBoxTitle = document.querySelector(
    ".remove-message-title p"
  );
  let popupShadow = document.querySelector(".popup-shadow");
  let removeCancelBtn = document.querySelector("#remove-cancel-btn");
  let removeConfirmBtn = document.querySelector("#remove-confirm-btn");

  let shoppingCart = document.querySelector(".shopping-cart-area");
  let cartContentMenu = document.querySelectorAll(".cart-menu-items h2");
  let cartCloseButton = document.querySelector(".cart-close-btn button");
  let shoppingCartContentsArea = document.querySelectorAll(
    ".shopping-cart-contents-area"
  );

  let featuredProducts = document.querySelectorAll(".product-wrap");
  let productImage = document.querySelectorAll(".product-img img");
  let productPrice = document.querySelectorAll(".f-product-price");
  let productName = document.querySelectorAll(".product-name");
  let productUnit = document.querySelectorAll(".f-product-unit");
  let addToCartBtn = document.querySelectorAll(".add-to-cart-btn p");
  let cartContentArea = document.querySelector(".cart-contents-area");
  let shoppingCartArea = document.querySelector(".shopping-cart-wrap");
  let buyingProductContent = document.querySelector(".buying-product-title");
  let buyingDetailsFooter = document.querySelector(".buying-details-footer");
  let totalBuyingItems = document.querySelector(
    ".calculate-total-items textarea"
  );
  let shoppingDetailsContent = document.querySelector(
    ".shopping-details-content"
  );
  let totalBuyingItemsQuantity = document.querySelector(
    ".calculate-total-quantity p"
  );
  let totalBuyingItemsAmount = document.querySelector(
    ".calculate-total-amount p span"
  );

  let totalSelectedProduct = document.querySelector("#total-selected");
  let totalFavoriteProduct = document.querySelector("#total-favorite");
  let totalSelectedCounter = document.querySelector("#total-selected span");
  let totalFavoriteCounter = document.querySelector("#total-favorite span");
  let totalAddToBuyCounter = document.querySelector(
    "#total-buying-item-counter"
  );

  let controllScrolling = document.querySelector("html");

  // item counter
  let countSelectedItem = 0;
  let countFavoriteItem = 0;
  let countAddToBuyItem = 0;
  let countBuyProductSl = 0;
  let countTotalWeight = 0;
  let countTotalPieces = 0;
  let countTotalAmount = 0;
  let countTotalDozen = 0;

  // store event data
  let addedToCart = [];
  let addedForBuy = [];
  let newCartContent = [];
  let addedToFavorite = [];
  let newfavoriteItem = [];
  let shoppingCartItem = [];
  let storeShopItemsIndex = [];

  let isSelectedItemActive = true;

  // show cart area
  shoppingCartBtn.onclick = () => {
    toggleBar.classList.remove("active-toggler");
    navigationArea.classList.remove("active-navbar");
    //searchBox.classList.remove("active-search-box");
    productCartArea.classList.add("active-cart");
    controllScrolling.style.overflowY = "hidden";
  };

  // remove cart area
  cartCloseButton.onclick = () => {
    productCartArea.classList.remove("active-cart");
    controllScrolling.style.overflowY = "auto";
  };

  // display cart buying header
  function displayBuyingHeader(countValue) {
    let totalShopItems = shoppingDetailsContent.children.length;
    if (countValue > 0 && isSelectedItemActive === true) {
      buyingProductContent.classList.add("acvie-buying-title");
    } else if (totalShopItems > 0 && isSelectedItemActive === true) {
      buyingProductContent.classList.add("acvie-buying-title");
    } else {
      buyingProductContent.classList.remove("acvie-buying-title");
    }
  }

  // cart header menu switch and show/hide total items counter
  (function () {
    for (let i = 0; i < cartContentMenu.length; i++) {
      cartContentMenu[i].addEventListener("click", function () {
        for (let j = 0; j < cartContentMenu.length; j++) {
          cartContentMenu[j].classList.remove("active-cart-menu");
          shoppingCartContentsArea[j].classList.remove("active-cart-content");
          totalSelectedProduct.classList.remove("active-product-counter");
          totalFavoriteProduct.classList.remove("active-product-counter");
        }
        cartContentMenu[i].classList.add("active-cart-menu");
        shoppingCartContentsArea[i].classList.add("active-cart-content");
        if (cartContentMenu[i].getAttribute("id") === "selected-products") {
          totalSelectedProduct.classList.add("active-product-counter");
          if (countSelectedItem > 0) {
            buyingProductContent.classList.add("acvie-buying-title");
            totalSelectedCounter.innerHTML = countSelectedItem;
          } else {
            totalSelectedCounter.innerHTML = "Aucun commade selectionné";
          }
          isSelectedItemActive = true;
        } else {
          totalFavoriteProduct.classList.add("active-product-counter");
          buyingProductContent.classList.remove("acvie-buying-title");
          if (countFavoriteItem > 0) {
            totalFavoriteCounter.innerHTML = countFavoriteItem;
          } else {
            totalFavoriteCounter.innerHTML = "No item found";
          }

          isSelectedItemActive = false;
        }

        displayBuyingHeader(countSelectedItem);
      });
    }
  })();

  // set event data false
  (function () {
    for (let i = 0; i < addToCartBtn.length; i++) {
      addedToCart[i] = false;
      addedForBuy[i] = false;
      addedToFavorite[i] = false;
    }
  })();

  // create elements for selected product content
  function createSelectedProductsContent(
    image,
    name,
    price,
    unit,
    preservative,
    time
  ) {
    let newCartContent = document.createElement("div");
    newCartContent.setAttribute("class", "cart-content");

    let newCartImageArea = document.createElement("div");
    newCartImageArea.setAttribute("class", "cart-image-area");

    let newCartDetails = document.createElement("div");
    newCartDetails.setAttribute("class", "cart-details");

    //children of newCartImageArea
    let newImage = document.createElement("img");
    newImage.src = image;

    newCartImageArea.appendChild(newImage);

    // childrens of newCartDetails
    let newHeading2 = document.createElement("h2");
    newHeading2.textContent = "";

    let newPara = [];
    let newStrong = [];
    for (let i = 0; i < 4; i++) {
      newPara[i] = document.createElement("p");
      newStrong[i] = document.createElement("strong");
    }

    newStrong[0].textContent = "Nom";
    newStrong[1].textContent = "Prix: ";
    newStrong[2].textContent = "Quantité: ";
    newStrong[3].textContent = "Date-heure: ";

    for (let i = 0; i < 4; i++) {
      newPara[i].appendChild(newStrong[i]);
    }

    let newInput = document.createElement("input");
    newInput.setAttribute("type", "number");
    newPara[2].appendChild(newInput);

    let newQuantitySpan = document.createElement("span");
    newQuantitySpan.innerHTML = `${unit}`;
    newQuantitySpan.style.paddingLeft = "0.4rem";
    newPara[2].appendChild(newQuantitySpan);

    let newSpan = [];
    for (let i = 0; i < 3; i++) {
      newSpan[i] = document.createElement("span");
    }

    newSpan[0].textContent = name;
    newSpan[1].textContent = price + ` Ar`;

    for (let i = 0; i < 3; i++) {
      newPara[i].appendChild(newSpan[i]);
    }

    let preservativeSpan = document.createElement("span");
    preservativeSpan.textContent = preservative;

    let timeSpan = document.createElement("span");
    timeSpan.textContent = time;

    newPara[3].appendChild(timeSpan);

    let newShoppingButton = [];

    for (let i = 0; i < 2; i++) {
      newShoppingButton[i] = document.createElement("button");
    }

    newShoppingButton[0].textContent = "Confirmer";
    newShoppingButton[1].textContent = "Supprimer";

    newShoppingButton[0].setAttribute("class", "add-to-buy-btn");
    newShoppingButton[1].setAttribute("class", "remove-item-btn");

    // adding children to parent element
    newCartDetails.appendChild(newHeading2);

    for (let i = 0; i < 4; i++) {
      newCartDetails.appendChild(newPara[i]);
    }

    for (let i = 0; i < 2; i++) {
      newCartDetails.appendChild(newShoppingButton[i]);
    }

    newCartContent.appendChild(newCartImageArea);
    newCartContent.appendChild(newCartDetails);

    return newCartContent;
  }

  // get product added time
  function getAddedTime() {
    let dt = new Date();

    let dd = dt.getDate();
    let mm = dt.getMonth() + 1;
    let yyyy = dt.getFullYear();

    let HH = dt.getHours();
    let MM = dt.getMinutes();
    let XM = null;

    HH >= 12 ? (XM = "PM") : (XM = "AM");

    if (HH > 12) {
      HH -= 12;
    }

    if (HH == 0) {
      HH = 12;
    }

    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }

    if (HH < 10) {
      HH = "0" + HH;
    }

    if (MM < 10) {
      MM = "0" + MM;
    }

    let format = `${dd}/${mm}/${yyyy}  ${HH}:${MM} ${XM}`;

    return format;
  }

  // add items to selected products
  function addItemsToSelectedProducts(productIndex) {
    addToCartBtn[productIndex].style.background = "black";
    addToCartBtn[productIndex].innerHTML =
      '<span class="icon-window-close"></span> Annuler';
    let productCartImage = productImage[productIndex].src;
    let productCartName = productName[productIndex].textContent;
    let productCartPrice = productPrice[productIndex].textContent;
    let productCartUnit = productUnit[productIndex].textContent;
    let preservativeName = "No";
    let addedTime = getAddedTime();
    newCartContent[productIndex] = createSelectedProductsContent(
      productCartImage,
      productCartName,
      productCartPrice,
      productCartUnit,
      preservativeName,
      addedTime
    );
    cartContentArea.insertBefore(
      newCartContent[productIndex],
      cartContentArea.firstChild
    );
  }

  // remove Items to selected products
  function removeItemsToSelectedProducts(productIndex) {
    addToCartBtn[productIndex].style.background = "maroon";
    addToCartBtn[productIndex].innerHTML =
      '<span class="icon-cart-plus"></span> Ajouter';
    cartContentArea.removeChild(newCartContent[productIndex]);
  }

  // active Ajouter button of favorite item
  function activeFavoriteItemAddToCartBtn(productIndex) {
    let favoriteItemAddToCartBtn =
      newfavoriteItem[productIndex].children[2].children[2].children[0];
    favoriteItemAddToCartBtn.style.background = "black";
    favoriteItemAddToCartBtn.innerHTML =
      '<span class="icon-window-close"></span> Annuler';
  }

  // deactive Ajouter button of favorite item
  function deactiveFavoriteItemAddToCartBtn(productIndex) {
    let favoriteItemAddToCartBtn =
      newfavoriteItem[productIndex].children[2].children[2].children[0];
    favoriteItemAddToCartBtn.style.background = "maroon";
    favoriteItemAddToCartBtn.innerHTML =
      '<span class="icon-cart-plus"></span> Ajouter';
  }

  // create favorite content wrapper
  function favoriteContentWrapper() {
    let newProductWrapper = document.createElement("div");
    newProductWrapper.setAttribute("class", "product-wrap");

    return newProductWrapper;
  }

  // add items to favorite products
  function addItemsToFavoriteProducts(productIndex) {
    favoriteIcon[productIndex].style.background = "#ddd";
    favoriteIcon[productIndex].style.color = "maroon";
    let clone = featuredProducts[productIndex].cloneNode(true);
    let favoriteContentWrap = favoriteContentWrapper();
    newfavoriteItem[productIndex] = favoriteContentWrap.appendChild(clone);
    cartWishlistArea.appendChild(newfavoriteItem[productIndex]);
  }

  // remove items to favorite products
  function removeItemsToFavoriteProducts(productIndex) {
    favoriteIcon[productIndex].style.background = "maroon";
    favoriteIcon[productIndex].style.color = "#fff";
    cartWishlistArea.removeChild(newfavoriteItem[productIndex]);
  }

  // show confirmation box
  function activeConfirmationBox(confirmMessage) {
    itemDeleteConfirmationBox.classList.add("active-confirmation-box");
    itemDeleteConfirmationBoxTitle.innerHTML = confirmMessage;
    popupShadow.classList.add("active-popup-shadow");
    shoppingCart.style.overflow = "hidden";
  }

  // remove confirmation box
  function removeConfirmationBox() {
    itemDeleteConfirmationBox.classList.remove("active-confirmation-box");
    popupShadow.classList.remove("active-popup-shadow");
    shoppingCart.style.overflow = "auto";
  }

  // display cart item counter
  function displayCartCounter(countValue) {
    if (countValue > 0) {
      cartIconProductCounter.classList.add("active-item-counter");
    } else {
      cartIconProductCounter.classList.remove("active-item-counter");
    }
  }

  // create shopping cart item
  function createShoppingCartItem(itemName, itemPrice, itemUnit, itemQuantity) {
    let newParentDiv = document.createElement("tr");
    newParentDiv.setAttribute("class", "shopping-details");

    let newChildDiv = [];

    for (let i = 0; i < 6; i++) {
      newChildDiv[i] = document.createElement("td");
    }

    newChildDiv[0].setAttribute("class", "product-sl");
    newChildDiv[1].setAttribute("class", "product-name");
    newChildDiv[2].setAttribute("class", "regular-price");
    newChildDiv[3].setAttribute("class", "product-quantity");
    newChildDiv[4].setAttribute("class", "total-amount");
    newChildDiv[5].setAttribute("class", "remove-item-btn");

    let newChildPara = [];

    for (let i = 0; i < 6; i++) {
      newChildPara[i] = document.createElement("p");
    }

    // calcul total prix
    let totalPrice = itemQuantity * itemPrice;
    totalPrice = totalPrice.toFixed(2);

    newChildPara[1].innerHTML = itemName;
    newChildPara[2].innerHTML = itemPrice + ` Ar`;

    newChildPara[3].innerHTML = itemQuantity + ` ${itemUnit}`;
    newChildPara[4].innerHTML = totalPrice + ` Ar`;

    for (let i = 0; i < 5; i++) {
      newChildDiv[i].appendChild(newChildPara[i]);
    }

    let removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Supprimer";
    removeBtn.setAttribute("class", "remove-shop-item");
    newChildDiv[5].appendChild(removeBtn);

    for (let i = 0; i < 6; i++) {
      newParentDiv.appendChild(newChildDiv[i]);
    }

    return newParentDiv;
  }

  // add items to shopping cart area
  function addItemsToShoppingCartArea(itemIndex, buyBtn, itemQuantity) {
    totalAddToBuyCounter.innerHTML = ++countAddToBuyItem;
    buyBtn.style.background = "crimson";
    buyBtn.innerHTML = "Annuler";

    let getQuantity = Number(itemQuantity.value);
    let getItemName = productName[itemIndex].textContent;
    let getItemPrice = productPrice[itemIndex].textContent;
    let getItemUnit = productUnit[itemIndex].textContent;

    shoppingCartItem[itemIndex] = createShoppingCartItem(
      getItemName,
      getItemPrice,
      getItemUnit,
      getQuantity
    );
    shoppingDetailsContent.appendChild(shoppingCartItem[itemIndex]);

    countTotalAmount += getItemPrice * getQuantity;
  }

  // remove items to shopping cart area
  function removeItemsToShoppingCartArea(itemIndex, buyBtn, itemQuantity) {
    totalAddToBuyCounter.innerHTML = --countAddToBuyItem;
    buyBtn.style.background = "#267247";
    buyBtn.innerHTML = "Confimer";

    let getQuantity = Number(itemQuantity.value);
    let getItemPrice = productPrice[itemIndex].textContent;

    shoppingDetailsContent.removeChild(shoppingCartItem[itemIndex]);

    countTotalAmount -= getItemPrice * getQuantity;
    itemQuantity.value = "";
  }

  // display buying details footer
  function displayBuyingDetailsFooter(countValue) {
    if (countValue > 0) {
      buyingDetailsFooter.classList.add("active-buying-details-footer");
    } else {
      buyingDetailsFooter.classList.remove("active-buying-details-footer");
    }

    totalBuyingItems.innerHTML = shoppingDetailsContent.children.length;

    let quantityResult = ``;

    let quantityList = [countTotalWeight, countTotalDozen, countTotalPieces];

    totalBuyingItemsQuantity.innerHTML = quantityResult;
    totalBuyingItemsAmount.innerHTML = countTotalAmount.toFixed(1);
  }

  // control product serial number
  function setProductSl() {
    let sl = 0;
    let shopItems = shoppingDetailsContent.children;
    for (let i = 0; i < shopItems.length; i++) {
      shopItems[i].children[0].children[0].innerHTML = ++sl;
    }
  }

  //control product name attriute
  function give_attribut() {
    for (let i = 0; i < countAddToBuyItem; i++) {
      let nom = shoppingDetailsContent.children[i].children[1].children[0];
      let j = i + 1;
      nom.setAttribute("name", "nom" + j);
    }
    for (let i = 0; i < countAddToBuyItem; i++) {
      let prix = shoppingDetailsContent.children[i].children[2].children[0];
      let j = i + 1;
      prix.setAttribute("name", "prix" + j);
    }
    for (let i = 0; i < countAddToBuyItem; i++) {
      let quantite = shoppingDetailsContent.children[i].children[3].children[0];
      let j = i + 1;
      quantite.setAttribute("name", "quantite" + j);
    }
    for (let i = 0; i < countAddToBuyItem; i++) {
      let soustotal =
        shoppingDetailsContent.children[i].children[4].children[0];
      let j = i + 1;
      soustotal.setAttribute("name", "soustotal" + j);
    }
  }

  // remove shop items index from array
  function removeShopItemsIndex(index) {
    for (let i = 0; i < storeShopItemsIndex.length; i++) {
      if (storeShopItemsIndex[i] === index) {
        for (let j = i; j < storeShopItemsIndex.length; j++) {
          storeShopItemsIndex[j] = storeShopItemsIndex[j + 1];
        }
      }
    }
    storeShopItemsIndex.length--;
  }

  // remove selected product item
  function removeSelectedProduct(productIndex) {
    removeItemsToSelectedProducts(productIndex);
    if (newfavoriteItem[productIndex] !== undefined) {
      deactiveFavoriteItemAddToCartBtn(productIndex);
    }
    --countSelectedItem;
    totalSelectedCounter.innerHTML = countSelectedItem;
    cartIconProductCounter.innerHTML = countSelectedItem;
    displayBuyingHeader(countSelectedItem);
    displayCartCounter(countSelectedItem);
    addedToCart[productIndex] = false;
  }

  // remove shopping cart product
  function removeShoppingCartProduct(productIndex) {
    let addToBuyBtn = newCartContent[productIndex].children[1].children[5];
    let itemQuantity =
      newCartContent[productIndex].children[1].children[3].children[1];
    removeItemsToShoppingCartArea(productIndex, addToBuyBtn, itemQuantity);
    displayBuyingDetailsFooter(countAddToBuyItem);
    displayBuyingHeader(countSelectedItem);
    itemQuantity.removeAttribute("disabled");
    removeShopItemsIndex(productIndex);
    setProductSl();
    give_attribut();
    addedForBuy[productIndex] = false;
  }

  // add product to shopping cart area
  function addProductToShoppingCart(productIndex) {
    let addToBuyBtn = newCartContent[productIndex].children[1].children[5];
    let itemQuantity =
      newCartContent[productIndex].children[1].children[3].children[1];
    addItemsToShoppingCartArea(productIndex, addToBuyBtn, itemQuantity);
    displayBuyingDetailsFooter(countAddToBuyItem);
    itemQuantity.setAttribute("disabled", "true");
    storeShopItemsIndex.push(productIndex);
    setProductSl();
    give_attribut();
  }

  // shopping items controll area
  function controlShoppingProductItems(itemIndex) {
    let itemQuantity =
      newCartContent[itemIndex].children[1].children[3].children[1];
    if (
      addedForBuy[itemIndex] === false &&
      itemQuantity.value !== "" &&
      itemQuantity.value > 0
    ) {
      addProductToShoppingCart(itemIndex);
      let shopItemRemoveBtn =
        shoppingCartItem[itemIndex].children[5].children[0];
      shopItemRemoveBtn.addEventListener("click", function () {
        removeShoppingCartProduct(itemIndex);
      });
      addedForBuy[itemIndex] = true;
    } else if (
      addedForBuy[itemIndex] === true &&
      itemQuantity.value !== "" &&
      itemQuantity.value > 0
    ) {
      removeShoppingCartProduct(itemIndex);
    } else {
      if (itemQuantity.value === "") {
        alert("Veuillez indiquer la quantité pour confirmer ");
      } else {
        alert("Quantité non validée!! Réessayez svp!!");
      }
    }
  }

  // control selected product items
  function controlSelectedProductItems(itemIndex) {
    if (addedToCart[itemIndex] === false) {
      addItemsToSelectedProducts(itemIndex);
      if (newfavoriteItem[itemIndex] !== undefined) {
        activeFavoriteItemAddToCartBtn(itemIndex);
      }

      let selectedProductRemoveBtn =
        newCartContent[itemIndex].children[1].children[6];

      selectedProductRemoveBtn.onclick = () => {
        removeSelectedProduct(itemIndex);

        // remove shopping cart item
        if (addedForBuy[itemIndex] === true) {
          removeShoppingCartProduct(itemIndex);
        }
      };
      ++countSelectedItem;
      totalSelectedCounter.innerHTML = countSelectedItem;
      cartIconProductCounter.innerHTML = countSelectedItem;
      addedToCart[itemIndex] = true;
    } else {
      removeSelectedProduct(itemIndex);

      // remove shopping cart item
      if (addedForBuy[itemIndex] === true) {
        removeShoppingCartProduct(itemIndex);
      }
    }

    let addToBuyBtn = newCartContent[itemIndex].children[1].children[5];

    addToBuyBtn.onclick = () => {
      controlShoppingProductItems(itemIndex);
    };

    displayBuyingHeader(countSelectedItem);
    displayCartCounter(countSelectedItem);
  }

  // control favorite product items
  function controlFavoriteProductItems(itemIndex) {
    if (addedToFavorite[itemIndex] === false) {
      addItemsToFavoriteProducts(itemIndex);
      totalFavoriteCounter.innerHTML = ++countFavoriteItem;
      addedToFavorite[itemIndex] = true;
    } else {
      removeItemsToFavoriteProducts(itemIndex);
      totalFavoriteCounter.innerHTML = --countFavoriteItem;
      addedToFavorite[itemIndex] = false;
    }

    let favoriteContent = newfavoriteItem[itemIndex].children[1].children[0];

    favoriteContent.addEventListener("click", function () {
      activeConfirmationBox("Remove item from wishlist?");
      removeConfirmBtn.onclick = () => {
        removeItemsToFavoriteProducts(itemIndex);
        totalFavoriteCounter.innerHTML = --countFavoriteItem;
        addedToFavorite[itemIndex] = false;
        removeConfirmationBox();
      };

      removeCancelBtn.onclick = () => {
        removeConfirmationBox();
      };
    });

    // select 'Ajouter' button of favorite item
    let favoriteItemAddToCartBtn =
      newfavoriteItem[itemIndex].children[2].children[2].children[0];

    // actions while click 'Ajouter' button of favorite item
    favoriteItemAddToCartBtn.addEventListener("click", function () {
      controlSelectedProductItems(itemIndex);
    });
  }

  // controll product items and product cart area
  (function () {
    for (let i = 0; i < addToCartBtn.length; i++) {
      // actions while click 'Ajouter' button
      addToCartBtn[i].addEventListener("click", function () {
        controlSelectedProductItems(i);
      });

      // actions while click favorite icon
      favoriteIcon[i].addEventListener("click", function () {
        controlFavoriteProductItems(i);
      });
    }
  })();

  // product cart 'Buy Items' button
  let buyNowBtn = document.querySelector("#buy-items");
  let buyingDetailsArea = document.querySelector(".buying-details-area");
  let closeBuyingDetailsArea = document.querySelector(".close-buy-area");

  // show shopping cart area
  buyNowBtn.onclick = () => {
    buyingDetailsArea.classList.add("active-buying-details");
  };

  // remove shopping cart area
  closeBuyingDetailsArea.onclick = () => {
    buyingDetailsArea.classList.remove("active-buying-details");
  };

  // select 'Remove all' button of shopping cart area
  let removeAllShopItems = document.querySelector("#remove-all-items");

  // remove all shopping cart items
  removeAllShopItems.onclick = () => {
    if (countAddToBuyItem > 0) {
      activeConfirmationBox("Voulez-vous supprimer tous??");
      removeConfirmBtn.onclick = () => {
        for (let i = 0; i < storeShopItemsIndex.length; i++) {
          let itemIndex = storeShopItemsIndex[i];
          let buyBtn = newCartContent[itemIndex].children[1].children[5];
          let itemQuantity =
            newCartContent[itemIndex].children[1].children[3].children[1];
          removeItemsToShoppingCartArea(itemIndex, buyBtn, itemQuantity);
          itemQuantity.removeAttribute("disabled");
          addedForBuy[itemIndex] = false;
        }
        storeShopItemsIndex = [];
        displayBuyingDetailsFooter(countAddToBuyItem);
        displayBuyingHeader(countSelectedItem);
        removeConfirmationBox();
      };
      removeCancelBtn.onclick = () => {
        removeConfirmationBox();
      };
    } else {
      alert("No items found in shopping cart");
    }
  };

  //while "valider la commmande" button click
  let numTable = document.querySelector(".table_number input");
  let confirmBtn = document.querySelector("#confirm-order-btn");
  confirmBtn.addEventListener("click", function () {
    if (numTable.value === "") {
      alert("Veuillez entrer votre numéro de table pour envoyer la commande");
    } else {
      confirmBtn.setAttribute("type", "submit");
    }
  });
});
// ===================================
//    Product Cart Control Area End
// ===================================
