// var Pets = [
// 	{
// 	"name":"Gholam",
// 	"species": "cat",
// 	"favFood": "tuna"
// 	},
// 	{
// 	"name":"Heshamt",
// 	"species": "Dog",
// 	"favFood": "macaronni"
// 	},
// ]

var clicked = 1;
var animalDiv = document.getElementById("animal-info");
var btn = document.getElementById('btn');


btn.addEventListener("click",function(){
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-'+ clicked +'.json');

	ourRequest.onload = function(){
	var ourData = JSON.parse(ourRequest.responseText);
	renderHTML(ourData);
	};

	ourRequest.send();
	clicked++;
	if(clicked>3){
		btn.setAttribute("class", "hide-me");
	}
});


function renderHTML(data){

	var htmlString = "";

	for(i = 0;i< data.length; i++){
		htmlString += "<h5> name: " + data[i].name +  
					  "</h5><h5> species: " + data[i].species +
					  "</h5><h5> foods likes: " + data[i].foods.likes + 
					  "</h5><h5> foods dislikes: " + data[i].foods.dislikes +
					  "</h5><hr>";
	}

	animalDiv.insertAdjacentHTML('beforeend',htmlString);

}

