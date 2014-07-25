document.addEventListener("DOMContentLoaded", function() { 
	init(); 
});

var active = false;
var option = "Walk";
var puncte = 0;
var limit = 1;

function init(){ 
	console.log("am intrat in init");
	inActiveC(); 
	document.getElementsByClassName('Apeareance')[0].style.visibility='hidden';
	document.getElementById("Walk").checked = true;
} 


function distanta2Pc(x1,y1,x2,y2){
	var x3 = (x1 - x2) * (x1 - x2);
	var y3 = (y1 - y2) * (y1 - y2);
	
	return Math.pow((x3 + y3), 1/2);
}

function addDistance(){
	return (Math.random(10) * 10 + 1);
}

function adaugaPuncte(distance){
	if (option == "Walk"){
		if (distance / 100 > limit){
			this.limit ++;
			this.puncte = puncte + 5;
		}
	}
	
	if (option == "Run"){
		if (distance / 1000 > limit){
			this.limit ++;
			this.puncte = puncte + 10;
		}
	}
	
	if (option == "Drive"){
		if (distance / 5000 > limit){
			this.limit ++;
			this.puncte = puncte + 3;
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
		var d2 = addDistance();
		distance = distance + d2; 
		aspeed = distance / time; 
		speed = d2/2;
		document.getElementById('Speed').value=("Speed: " + speed.toPrecision(2) + " m/s"); 
		document.getElementById('AverageSpeed').value=("AverageSpeed: " + aspeed.toPrecision(2) + " m/s"); 
		document.getElementById('Distance').value=("Distance: " + distance.toPrecision(2)+ " m");    
		adaugaPuncte(distance);    
		document.getElementById('Score').value=("Score: " + this.puncte);                          
    	if (active && opt == option) {            
      	 	start(distance,time,opt);             
  	  } else {
  	  	this.limit = 1;
  	  	start(0,0,option);
  	  	
  	  }                        
  }, 2000);
}

function activeC(){
	if (active == false){
		this.active = true;
		document.getElementsByClassName('Apeareance')[0].style.visibility='visible';
		document.getElementById('f').style=("background-color:#cccccc"); 
		document.getElementById('n').style=("background-color:#1f262c");
		this.limit = 0;
		start(0,0,option);  
	}
};

function inActiveC(){
	this.limit = 1;
	this.active = false;
	document.getElementById('n').style=("background-color:#cccccc"); 
	document.getElementById('f').style=("background-color:#1f262c");
	document.getElementsByClassName('Apeareance')[0].style.visibility='hidden';
	document.getElementById('Speed').value=("Speed: 0 km/h"); 
	document.getElementById('Distance').value=("Distance: 0 km"); 
	
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

