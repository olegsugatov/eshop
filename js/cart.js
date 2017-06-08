var cart = {}; // cart

$.getJSON('goods.json', function(data){
	var goods = data; // all products in array
	// console.log(goods);
	checkCart();
	// console.log(cart);
	showCart(); // products input on page

	function showCart(){
		var out = '';
		for (var key in cart) {
			out += '<button class="delete">x</button>';
			out += '<img src="'+goods[key].image+'" width="48">';
			out += goods[key].name;
			out += '<button class="minus">-</button>';
			out += cart[key];
			out += '<button class="plus">+</button>';
			out += cart[key]*goods[key].cost;
			out += '<br>';
		}
		$('#my-cart').html(out);
	}
});

function checkCart() {
	// Chek cart in localStorage
	if ( localStorage.getItem('cart') != null) {
		cart = JSON.parse (localStorage.getItem('cart'));
	}
}