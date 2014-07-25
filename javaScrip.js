document.addEventListener("DOMContentLoaded", function() { 
	init(); 
});

var active = false;
var option = "Walk";
var Score = 0;
var limit = 1;
var refreshTime = 1;

//var p = GetLocation();

function init(){ 
	console.log("am intrat in init");
	inActiveC(); 
	document.getElementsByClassName('Apeareance')[0].style.visibility='hidden';
	document.getElementById("Walk").checked = true;
} 

function getActionType() { 
	if(document.getElementById('Run').checked) { 
		return "Run"; 
		}else if(document.getElementById('Walk').checked) { 
			return "Walk"; 
			}else return "Drive"; 
	}; 


function distanta2Pc(p1,p2){
	var x3 = (p1.x - p2.x) * (p1.x - p2.x);
	var y3 = (p2.y - p2.y) * (p1.y - p2.y);
	
	return Math.pow((x3 + y3), 1/2);
}

function addDistance(){
	return (Math.random(10) * 10 + 1);
}

function adaugaScore(distance){
	if (option == "Walk"){
		if (distance / 1000 > limit){
			this.limit ++;
			this.Score = Score + 10;
		}
	}
	
	if (option == "Run"){
		if (distance / 2000 > limit){
			this.limit ++;
			this.Score = Score + 10;
		}
	}
	
	if (option == "Drive"){
		if (distance / 5000 > limit){
			this.limit ++;
			this.Score = Score + 10;
		}
	}
}

function start (d,t,o) {           
   
	setTimeout(function () {
		var opt = o;    
  	 	var distance = d; 
		var time = t; 
		var speed;
		time = time + 1; 
		
		if (false){
			var p2 = GetLocation();		
			console.log(p.x + " " + p.y);
			distance = distance + distanta2Pc(p,p2);
			this.p = p2;
		}
		
		var d2 = addDistance();
		distance = distance + d2; 
		aspeed = distance / time; 
		speed = d2/refreshTime;
		document.getElementById('Speed').value=("Speed: " + speed.toFixed(2) + " m/s"); 
		document.getElementById('AverageSpeed').value=("AverageSpeed: " + aspeed.toFixed(2) + " m/s"); 
		document.getElementById('Distance').value=("Distance: " + distance.toFixed(2)+ " m");    
		adaugaScore(distance);    
		document.getElementById('Score').value=("Score: " + this.Score);                          
    	if (active && opt == option) {    
    		console.log("ciclul:" + time);      
      	 	start(distance,time,opt);             
  	 	} else {
  	 		if (!active){
  	 		} else {	
			document.getElementById('Speed').value=("Speed: 0 m/s"); 
			document.getElementById('AverageSpeed').value=("AverageSpeed: 0 m/s"); 
			document.getElementById('Distance').value=("Distance: 0 m");    
  	  			this.limit = 1;
  	  			start(0,0,option);
  	 		}           
  	 	}             
  }, refreshTime * 1000);
}

function activeC(){
	if (active == false){
	
		document.getElementById('off').style=("background-color:#cccccc");	
		document.getElementById('on').style=("background-color:#1f262c");
		this.active = true;
		document.getElementsByClassName('Apeareance')[0].style.visibility='visible';
		this.limit = 0;
		start(0,0,option);  
	}
};

function inActiveC(){
	this.limit = 1;
	this.active = false;
	
	document.getElementById('on').style=("background-color:#cccccc");
	document.getElementById('off').style=("background-color:#1f262c");
	document.getElementsByClassName('Apeareance')[0].style.visibility='hidden';
	document.getElementById('Speed').value=("Speed: 0 m/s"); 
	document.getElementById('AverageSpeed').value=("AverageSpeed: 0 m/s"); 
	document.getElementById('Distance').value=("Distance: 0 m");
	
}

function selectOption(){
	if (document.getElementById("Walk").checked == true){
		this.option = "Walk";
	}
	if (document.getElementById("Run").checked == true){
		this.option = "Run";
	}
	if (document.getElementById("Drive").checked == true){
		this.option = "Drive";
	}
}

navigator.geolocation.getCurrentPosition(GetLocation);
function GetLocation() {
	return new punct(location.coords.latitude,location.coords.longitude);
}

function punct(x,y){
	this.x = x;
	this.y = y;
}

