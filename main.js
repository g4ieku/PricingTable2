let month = document.querySelector(".price_toggler .month");
let year = document.querySelector(".price_toggler .year");
let monthAmounts = document.querySelectorAll(".box_container .box .month");
let yearAmounts = document.querySelectorAll(".box_container .box .year");

year.addEventListener("click", () => {
   year.classList.add("active");
   month.classList.remove("active");

   monthAmounts.forEach((month) => {
      month.style.display = "none";
   });

   yearAmounts.forEach((year) => {
      year.style.display = "block";
   });
});

month.addEventListener("click", () => {
   month.classList.add("active");
   year.classList.remove("active");

   monthAmounts.forEach((month) => {
      month.style.display = "block";
   });

   yearAmounts.forEach((year) => {
      year.style.display = "none";
   });
});
