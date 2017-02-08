// your code, here
// coupon-code
let buttonElement = document.getElementById("click-here");
buttonElement.addEventListener('click', () => {
let CouponCodeDiv = document.getElementById('coupon-code');
CouponCodeDiv.innerHTML = "50OFF - YOWZA";
});
