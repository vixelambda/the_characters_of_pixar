var content = [ 
{question: 'Кем изначально был Альфредо Лингвини?', options: ['Доставщиком', 'Уборщиком', 'Программистом', 'Врачом'], right: 1, picture:'img/test/1.jpg'}, 
{question: 'Кем раньше был Карл Фредриксен?', options: ['Продавцом воздушных шариков', 'Смотрителем зоопарка', 'Строителем', 'Экскурсоводом в музее'], right: 0, picture:'img/test/2.jpg'}, 
{question: 'Какая способность была у Рэндалла?', options: ['Перемещаться во времени', 'Читать мысли', 'Менять цвет', 'Менять свой размер'], right: 2, picture:'img/test/3.jpg'}, 
{question: 'Какое прозвище было у МакКуина?', options: ['Солнце', 'Ураган', 'Гром', 'Молния'], right: 3, picture:'img/test/4.jpg'}, 
{question: 'Что умел делать пёс Даг?', options: ['Летать', 'Готовить','Говорить', 'Мяукать'], right: 2, picture:'img/test/5.jpg'}, 
{question: 'Сколько глаз у Майка Вазовски?', options: ['0', '1', '2', '4'], right: 1, picture:'img/test/6.jpg'},
{question: 'Как звали жену Карла Фредриксена?', options: ['Элли', 'Эмилия', 'Эстер', 'Элиза'], right: 0, picture:'img/test/7.jpg'},
{question: 'Какой кузов был у Мэтра?', options: ['Разрисованный', 'Полированный', 'Восстановленный', 'Ржавый'], right: 3, picture:'img/test/8.jpg'},
{question: 'Кем был Рассел?', options: ['Спортсменом', 'Бойскаутом', 'Бездомным', 'Доставщиком пиццы'], right: 1, picture:'img/test/9.jpg'},
{question: 'Что было на голове у Джеймса Салливана?', options: ['Щупальца', 'Очки', 'Рога', 'Плавники'], right: 2, picture:'img/test/10.jpg'}];
var fon = [ 
"rgba(254,217,1,0.6)", 
"rgba(215,183,198,0.6)", 
"rgba(134,104,150,0.6)",  
"rgba(231,54,64,0.6)",  
"rgba(254,217,1,0.6)", 
"rgba(155,195,72,0.6)", 
"rgba(122,9,77,0.6)", 
"rgba(254,217,1,0.6)", 
"rgba(220,97,42,0.6)", 
"rgba(162,254,212,0.6)"];
function ready(fn) { 
	if (document.readyState == 'loading') { 
		document.addEventListener('DOMContentLoaded', fn); 
	} 
}
ready(options);
var x = 0;
var score = 0;
function next() {  
	x++;  
	options(); 
}
function coloring() { 
	for (let i=1; i<=4; i++) document.getElementById("button"+i).style.backgroundColor="red";
	document.getElementById("button"+(content[x]['right']+1)).style.backgroundColor="green";
	document.getElementById("next").style.backgroundColor="green"; 
	document.getElementById("next").disabled = false;
}
function counting(id) {
	perem=id[id.length-1];
	let color = document.getElementById(id).style.backgroundColor;
	if((content[x]['right']==perem-1)&&(color=="white")) score++;
	coloring();
}
function options() { 
	if (content[x] != undefined) {
		document.getElementById("num").textContent = 'Вопрос №' + (x+1); 
		document.getElementById("question").textContent = content[x]['question']; 
		document.getElementById("test").style.background=fon[x]; 
		document.getElementById("picture").src = content[x]['picture']; 
		for (let i=1; i<=4; i++) document.getElementById("button"+i).style.backgroundColor = "white";
		document.getElementById("next").style.backgroundColor="red"; 
		document.getElementById("next").disabled = true;
		for (let i=1; i<=4; i++) document.getElementById("button"+i).innerText=content[x]['options'][i-1];
	}
	else { 
		for (let i=1; i<=4; i++) document.getElementById("button"+i).style.display = "none";
		document.getElementById("next").style.display = "none"; 
		document.getElementById("question").style.display = "none";
		document.getElementById("num").textContent = "Подведём итоги";
		document.getElementById("test").style.background="rgba(246,92,92,0.6)"; 
		if (score < 3){ 
			document.getElementById("picture").src= "img/test/11.jpg";
			document.getElementById("score").textContent = 'Это фиаско! ' + score + ' из 10 баллов.'; 
		} 
		if (score >= 3 && score <= 5){
			document.getElementById("picture").src= "img/test/12.jpg";
			document.getElementById("score").textContent = 'Нужно заново повторить материал! У тебя ' + score + ' из 10 баллов.'; 
		} 
		if (score > 5 && score < 8){
			document.getElementById("picture").src= "img/test/13.jpg";
			document.getElementById("score").textContent = 'Знаешь ли, это не плохо. ' + score + ' из 10 баллов.'; 
		}
		if(score >= 8){ 
			document.getElementById("picture").src= "img/test/14.jpg";
			document.getElementById("score").textContent ='Лучший! Браво! ' + score + ' из 10 баллов.'; 
		} 
	} 
}