var cart = {}; // cart

$.getJSON('goods.json', function(data){
	var goods = data; // all products in array
	// console.log(goods);
	checkCart();
	// console.log(cart);
	showCart(); // products input on page


	function showCart() {
		if ($.isEmptyObject(cart)) {
			// Empty cart
			var out = 'Cart Empty. Please, add products to cart <a href="/eshop.com/">Main Page</a>';
			$('#my-cart').html(out);
		} else {
			var out = '';
			for (var key in cart) {
				out += '<button class="delete" data-art="'+key+'">x</button>';
				out += '<img src="'+goods[key].image+'" width="48">';
				out += goods[key].name;
				out += '<button class="minus" data-art="'+key+'">-</button>';
				out += cart[key];
				out += '<button class="plus" data-art="'+key+'">+</button>';
				out += cart[key]*goods[key].cost;
				out += '<br>';
			}
			$('#my-cart').html(out);
			$('.plus').on('click', plusGoods);
			$('.minus').on('click', minusGoods);
			$('.delete').on('click', deleteGoods);
		}
	}

	function plusGoods() {
		var articul = $(this).attr('data-art');
		cart[articul]++;
		saveCartToLS(); // save cart in Local Storage
		showCart();
	}

	function minusGoods() {
		var articul = $(this).attr('data-art');
		if (cart[articul]>1) { 
			cart[articul]--;
		} 
		else {
			delete cart[articul];
		}
		saveCartToLS(); // save cart in Local Storage
		showCart();
	}

	function deleteGoods() {
		var articul = $(this).attr('data-art');
		delete cart[articul];
		saveCartToLS(); // save cart in Local Storage
		showCart();
	}
});

function checkCart() {
	// Chek cart in localStorage
	if ( localStorage.getItem('cart') != null) {
		cart = JSON.parse (localStorage.getItem('cart'));
	}
}

function saveCartToLS(){
	localStorage.setItem('cart', JSON.stringify(cart));
}