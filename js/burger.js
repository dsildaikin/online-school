{
   const hamb = document.querySelector(".hamb");
   const hambField = document.querySelector(".hamb__field");
   const topMenu = document.querySelector(".top_menu");
   const menu1Row = document.querySelector(".menu_1_row")

   function hambHandler() {
      hamb.classList.toggle("active");
      hambField.classList.toggle("active");
      topMenu.classList.toggle("drop_menu");
      menu1Row.classList.toggle("drop_menu");
   }

   hamb.addEventListener("click", hambHandler);
}