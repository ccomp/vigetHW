window.onload = function()
{
	var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
	
	var height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;
	
	console.log(width);

	var diff = width / 1400;
	console.log(diff);

	// if (width < 1400) {
	// 	document.getElementById('pills--top-left').style.top += (-(diff*10) + '%');
	// } else if (width > 1400)
	// {
	// 	diff--;
	// 	document.getElementById('pills--top-left').style.top -= (diff + '%');
	// }
};