const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const banner = document.querySelector("#banner");
const bannerImage = document.querySelector(".banner-img");
const bannerTagLine = document.querySelector(".banner-tagline");
let slideIndex = 0;


const arrowRight = document.querySelector(".arrow_right");

arrowRight.addEventListener("click",function(){
	updateDots();
	bannerImage.src="./assets/images/slideshow/"+slides[slideIndex].image;
	bannerTagLine.innerHTML =slides[slideIndex].tagLine;
	slideIndex++;
	if(slideIndex>=slides.length){
		slideIndex = 0;
	}
	console.log("fléche droite cliqué");
});


const arrowLeft = document.querySelector(".arrow_left");

arrowLeft.addEventListener("click",function(){
	updateDots();
	bannerImage.src="./assets/images/slideshow/"+slides[slideIndex].image;
	bannerTagLine.innerHTML = slides[slideIndex].tagLine;
	slideIndex--;
	if(slideIndex<0){
		slideIndex = slides.length-1;
	}
	console.log("fléche gauche cliqué");
});

slides.forEach((slide, index) => {
	const div = document.createElement("div")
	div.className = "dot"
	if (index == 0) {
		div.classList.add("dot_selected")
	}
	document.querySelector(".dots").appendChild(div);
});



let dot = document.querySelectorAll('.dot');
dot[0].classList.add('dot_selected');

function updateDots() {
	for (let i = 0; i < dot.length; i++) {
		if (i === slideIndex) {
			dot[i].classList.add('dot_selected');
		} else {
			dot[i].classList.remove('dot_selected');
		}
	}
}