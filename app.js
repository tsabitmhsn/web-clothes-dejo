const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Raven",
    price: 120,
    colors: [
      {
        code: "black",
        img: "./img/A-Black.png",
      },
      {
        code: "white",
        img: "./img/A-White.png",
      },
    ],
  },
  {
    id: 2,
    title: "Phantom",
    price: 150,
    colors: [
      {
        code: "black",
        img: "./img/B-Black.png",
      },
      {
        code: "white",
        img: "./img/B-White.png",
      },
    ],
  },
  {
    id: 3,
    title: "Abraham",
    price: 120,
    colors: [
      {
        code: "black",
        img: "./img/C-Black.png",
      },
      {
        code: "white",
        img: "./img/C-White.png",
      },
    ],
  },
  {
    id: 4,
    title: "Magnus",
    price: 120,
    colors: [
      {
        code: "black",
        img: "./img/D-Black.png",
      },
      {
        code: "white",
        img: "./img/D-White.png",
      },
    ],
  },
  {
    id: 5,
    title: "Cruise",
    price: 200,
    colors: [
      {
        code: "black",
        img: "./img/E-Black.png",
      },
      {
        code: "white",
        img: "./img/E-White.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "Rp " + choosenProduct.price + ".000";
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
