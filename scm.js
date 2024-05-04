const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav =document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
          nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
          nav.classList.remove('active');
    })
}

const getDiscountBtn = document.querySelector(".get-discount-btn");
const couponContainer = document.querySelector(".coupon-container");
const crossBtn = document.querySelector(".coupon-container .cross");

getDiscountBtn.addEventListener("click", () => {
  couponContainer.classList.add("active");
});

crossBtn.addEventListener("click", () => {
  couponContainer.classList.remove("active");
});