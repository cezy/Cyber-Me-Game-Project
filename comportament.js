var x = document.createElement('script');
x.src = 'calin.js';
document.getElementsByTagName("head")[0].appendChild(x);

var score = 0;
var scoreLS = localStorage.getItem("scoreLS");
localStorage.setItem('scoreLS', score);

var selected_index = 0;
var option = "A"; //A for add E for eddit;
var tbHabbits = localStorage.getItem("tbHabbits");
tbHabbits = JSON.parse(tbHabbits);
if(tbHabbits == null) 
	tbHabbits = [];

function Add() {
	var habbit = JSON.stringify({
		Name: document.getElementById("formName").value,
		Time  : document.getElementById("formTime").value,
		Repeat : document.getElementById("formRepeat").value,
		ImgPicture: pictureChoice,
	});
	
	tbHabbits.push(habbit);
	localStorage.setItem("tbHabbits", JSON.stringify(tbHabbits));
	//alert("The data was saved.");
		
	return true;
} 

function Edit() {
	tbHabbits[selected_index] = JSON.stringify({
			Name: document.getElementById("formName").value,
			Time  : document.getElementById("formTime").value,
			Repeat : document.getElementById("formRepeat").value,
			ImgPicture:  pictureChoice
		});
	
	localStorage.setItem("tbHabbits", JSON.stringify(tbHabbits));
	alert("The data was edited.");
	return true;
} 

function Delete() {
	tbHabbits.splice(selected_index, 1);
	localStorage.setItem("tbHabbits", JSON.stringify(tbHabbits));
	//alert("Client deleted.");
	List();
} 

function List() {		
	document.getElementById("changeWrapper").style.display ="none";
	document.getElementById("changeWrapper").style.visibility ="hidden";
	var rows = "";
	
	for(var rowsCounter in tbHabbits){
		var rowsIndex = JSON.parse(tbHabbits[rowsCounter]);
	  	rows += "<tr onclick='clickRowIndex(this);'>"+
				"	<td id='tableItem'>"+rowsIndex.Name+"</td>" + 
				"	<td id='tablePic'>"+"<img src="+rowsIndex.ImgPicture+">"+"</td>" + 
				"</tr>";
}
	
	document.getElementById("tbList").innerHTML =
		"<tbody>"+
		rows +
		"</tbody>";
			
		document.getElementById("scoreDisplay").innerHTML = localStorage.getItem(scoreLS);
} 

function sendInfo(){
	if (option == "A"){
		Add();
	}
	
	if (option == "E"){
		Edit();
	}
	
	hideInputs();
	takeTime();
	List();
}

function clickRowIndex(elem) {
        selected_index  = elem.rowIndex; 
       // alert("Row Index: "+ selected_index );
    }
    
function hideTable() {
	document.getElementById("tableWrapper").style.visibility ='hidden';
	document.getElementById("tableWrapper").style.display ='none';
	document.getElementById("changeWrapper").style.display ="block";
	document.getElementById("changeWrapper").style.visibility ="visible";
}

function hideInputs(){
	document.getElementById("tableWrapper").style.visibility ='visible';
	document.getElementById("tableWrapper").style.display ='block';
	
}

function clearContent(element){
	element.value="";
}

function update(){
	hideTable();
		option = "E";
		var selectedRow = JSON.parse(tbHabbits[selected_index]);
		document.getElementById("formName").value = selectedRow.Name;
		document.getElementById("formTime").value = selectedRow.Time;
		document.getElementById("formRepeat").value = selectedRow.Repeat;
}

function newHabbit(){
	option = "A";
	hideTable();
	document.getElementById("formName").value = "Name";
	document.getElementById("formTime").value = "Time";
	document.getElementById("formRepeat").value = "Number of Repeats";
}


function change(){

	
	if (confirm("Did you finished habbit"+""+"?") === true){
		score = score + 5;
		localStorage.setItem(scoreLS, score);
		List();
		pictureChoice = arr[1].src;
		Edit();
		pictureChoice = arr[0].src;
		List();
	}
	else {
		pictureChoice = arr[2].src;
		score = score - 2;
		localStorage.setItem(scoreLS, score);
		Edit();
		pictureChoice = arr[0].src;
		List();
	}
