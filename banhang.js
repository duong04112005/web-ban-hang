// Modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("cart");
var close = document.getElementsByClassName("close")[0];


var close_footer = document.getElementsByClassName("close-footer")[0];
var order = document.getElementsByClassName("order")[0];
btn.onclick = function () {
  modal.style.display = "block";
}
close.onclick = function () {
  modal.style.display = "none";
}
close_footer.onclick = function () {
  modal.style.display = "none";
}
order.onclick = function () {
  alert("Cảm ơn bạn đã thanh toán đơn hàng")
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var btn_menu = document.getElementById("btnmenu");
btn_menu.addEventListener("click", function () {
  var item_menu = document.getElementById("menutop");
  if (item_menu.style.display === "block") {
    item_menu.style.display = "none";
  } else {
    item_menu.style.display = "block";
  }
})
var remove_cart = document.getElementsByClassName("btn-danger");
for (var i = 0; i < remove_cart.length; i++) {
  var button = remove_cart[i]
  button.addEventListener("click", function () {
    var button_remove = event.target
    button_remove.parentElement.parentElement.remove()
  })
}
