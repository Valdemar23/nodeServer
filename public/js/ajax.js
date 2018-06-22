let button = document.querySelector('.load');
let size = document.querySelector('.size');
let color = document.querySelector('.color');
let text=document.querySelector('.text');
let json=new Object();
//файл ua.json не бачить
json.t=[{"name":"vlad","graduate":77},{"name":"bob","graduate":66},{"name":"petro","graduate":100}];
console.log(button);
json.t=JSON.stringify(json.t);
button.addEventListener('click',function(){
	document.body.style.color = color.value;
	document.body.style.fontSize = size.value + 'px';
	text.innerHTML=json.t;
})