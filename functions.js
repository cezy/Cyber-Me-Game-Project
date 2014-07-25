var selected_index = 0;
var tbClients = localStorage.getItem("tbClients");
tbClients = JSON.parse(tbClients);
if(tbClients == null) 
	tbClients = [];
		
function Add() {
	var client = JSON.stringify({
		ID: document.getElementById("txtID").value,
		Name  : document.getElementById("txtName").value,
		Phone : document.getElementById("txtPhone").value,
		Email : document.getElementById("txtEmail").value
	});
	
	tbClients.push(client);
	localStorage.setItem("tbClients", JSON.stringify(tbClients));
	alert("The data was saved.");

	return true;
} 

function Edit() {
	tbClients[selected_index] = JSON.stringify({
			ID: document.getElementById("txtID").value,
			Name  : document.getElementById("txtName").value,
			Phone : document.getElementById("txtPhone").value,
			Email : document.getElementById("txtEmail").value
		});
		
	localStorage.setItem("tbClients", JSON.stringify(tbClients));
	alert("The data was edited.");
	
	return true;
} 

function Delete() {
	tbClients.splice(selected_index, 1);
	localStorage.setItem("tbClients", JSON.stringify(tbClients));
	alert("Client deleted.");
} 

function List() {		
	
	document.getElementById("tblList").innerHTML =
		"<thead>"+
		"	<tr>"+
		"	<th></th>"+
		"	<th>ID</th>"+
		"	<th>Name</th>"+
		"	<th>Phone</th>"+
		"	<th>Email</th>"+
		"	</tr>"+
		"</thead>"+
		"<tbody>"+
		"</tbody>";
		
	var rows = "";
	
	for(var i in tbClients){
		var cli = JSON.parse(tbClients[i]);
	  	rows += "<tr onclick='clickRowIndex(this);'>"+
	  			"	<td>"+cli.ID+"</td>" + 
				 "	<td>"+cli.Name+"</td>" + 
					 "	<td>"+cli.Phone+"</td>" + 
					 "	<td>"+cli.Email+"</td>" + 
					 						 "</tr>";
	}
	
	document.getElementById("tblList").innerHTML =
	    "<thead>"+
		"	<tr>"+
		"	<th></th>"+
		"	<th>ID</th>"+
		"	<th>Name</th>"+
		"	<th>Phone</th>"+
		"	<th>Email</th>"+
		"	</tr>"+
		"</thead>"+
		"<tbody>"+
		rows +
		"</tbody>";
} 

function clickRowIndex(elem) {
        selected_index  = elem.rowIndex; 
        alert("Row Index: "+ selected_index );
    }
    

