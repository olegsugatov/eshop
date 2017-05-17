var cart = {};

$('document').ready(function(){
	loadGoods();
	checkCart();
	showMiniCart();
});

function loadGoods() {
	// load goods on page
	$.getJSON('goods.json', function (data) {
		// console.log(data);
		var out = '';
		for (var key in data) {
			out += '<div class="single-goods">';
			out += '<h3>' + data[key]['name'] + '</h3>';
			out += '<p>Price: '+ data[key]['cost'] + '</p>';
			out += '<img src="' + data[key].image +'">';
		 	out += '<button class="add-to-cart" data-art="'+ key +'">Buy</button>';
			out += '</div>';
		}
		$('#goods').html(out);
		$('button.add-to-cart').on('click', addToCart);
	});
}

function addToCart() {
	// add goods in cart
	var articul = $(this).attr('data-art');
	if (cart[articul] != undefined) {
		cart[articul]++;
	} else {
		cart[articul] = 1;
	}
	// localStorage, Cookies
	localStorage.setItem('cart', JSON.stringify(cart));
	// console.log(cart);
	showMiniCart();
}

function checkCart() {
	// Chek cart in localStorage
	console.log(localStorage.getItem('d'));
	if ( localStorage.getItem('cart') != null) {
		cart = JSON.parse (localStorage.getItem('cart'));
	}
}

function showMiniCart() {
	// Show cart
	var out = '';
	for (var w in cart) {
		out += w + '___' + cart[w] + '<br>';
	}
	$('#mini-cart').html(out);
}