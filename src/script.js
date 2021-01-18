let points = 0;
let PointsNeeded = 25;
let seconds = 30;

document.getElementById("time").textContent = seconds;

const addingPoints = ()=>{
	if (points >= PointsNeeded) {
		alert("You Won!! You got the points needed.");
		points = 0;
		seconds = 30;
    }
	else points ++;
	document.getElementById("points").textContent = points
}

const moveCharacter = ()=>{
	const circle = document.querySelector(".circle");
	randomX = Math.random()*500;
	randomY = Math.random()*500;
	circle.style.top = `${randomY}px`;
	circle.style.left = `${randomX}px`;
}

document.querySelector(".circle").addEventListener("mouseenter",()=>{
	addingPoints();
	moveCharacter();
});


setInterval(()=>{
	seconds--;
	document.getElementById("time").textContent = seconds;
	if (seconds == 0) {
		alert("You Lost!! Time is over.");
		points = 0;
	    document.getElementById("points").textContent = points;
		seconds = 30;
	}
	
} ,1000)
