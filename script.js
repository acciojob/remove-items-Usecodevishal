//your JS code here. If required.

// alert(form.length);
const input = document.querySelector("input");
input.addEventListener("click",function(){
	let select = document.getElementById("colorSelect");
	select.remove(select.selectedIndex);
})
