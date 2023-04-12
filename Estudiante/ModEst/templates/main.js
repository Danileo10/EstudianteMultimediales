const menuEmail = document.querySelector(".navbar-user");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector(".product-detail-one");
const productDetailCloseIcon = document.querySelector(".product-detail-close");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  aside.classList.add("inactive");
  productDetailContainer.classList.add("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  desktopMenu.classList.add("inactive");
  aside.classList.add("inactive");
  productDetailContainer.classList.add("inactive");
}

function toggleCarritoAside() {
  aside.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  productDetailContainer.classList.add("inactive");
}

function openProductDetailAside() {
  productDetailContainer.classList.remove("inactive");
  aside.classList.add("inactive");
}

function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive");
  aside.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
}

function renmderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.imagen);
    productImg.addEventListener("click", openProductDetailAside);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.precio;
    const productName = document.createElement("p");
    productName.innerText = product.nombre;

    productInfoDiv.append(productPrice, productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.append(productImgCart);

    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(productImg, productInfo);

    cardsContainer.append(productCard);
  }
}
