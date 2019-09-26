var topbtn = document.getElementsByClassName('topbtn');

window.onscroll = function() {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		topbtn.display = 'block';
	} else {
		topbtn.display = 'none';
	}
}
