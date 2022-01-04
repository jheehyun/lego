// search 아이콘 클릭 이벤트
const search_openBt = document.getElementById("main-search_open");
const search_closeBt = document.querySelector(".search-closeBt");
const main_search_modal = document.querySelector(".main-search__modal");

search_openBt.addEventListener("click", function () {
  main_search_modal.style.display = "block";
});
search_closeBt.addEventListener("click", function () {
  main_search_modal.style.display = "none";
});

// 마음에드는 상품 아이콘 클릭 이벤트
const main_like_modal = document.querySelector(".main-like__modal");

// 장바구니 아이콘 클릭 이벤트
const main_bag_modal = document.querySelector(".main-bag__modal");
