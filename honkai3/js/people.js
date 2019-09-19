// function checkpage() {
// 	var one = document.getElementById('checkone');
// 	one.addEventListener("click",clickpoint);
// 	var two = document.getElementById('checktwo');
// 	two.addEventListener("click",clickpoint);
//     var three = document.getElementById('checkthree');
// 	three.addEventListener("click",clickpoint);
// }


function clickpoint(n) {
	var a = document.getElementById('bigbox1');
	var b = document.getElementById('bigbox2');
	var c = document.getElementById('bigbox3');
	var one = document.getElementById('checkone');
	var two = document.getElementById('checktwo');
	var three = document.getElementById('checkthree');
	switch(n){
		case 1:a.style.display = "block";b.style.display = "none";c.style.display = "none";
		       one.style.opacity = 1;
		       two.style.opacity = 0.1;
		       three.style.opacity = 0.1;
		break;
		case 2:a.style.display = "none";b.style.display = "block";c.style.display = "none";
		       one.style.opacity = 0.1;
		       two.style.opacity = 1;
		       three.style.opacity = 0.1;
		       
		break;
		case 3:a.style.display = "none";b.style.display = "none";c.style.display = "block";
		      one.style.opacity = 0.1;
		       two.style.opacity = 0.1;
		       three.style.opacity = 1;
		break;
	}
}



