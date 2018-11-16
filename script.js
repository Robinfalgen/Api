window.addEventListener('load',init);

function readmore(){
  // visar dolt p element genom att ge den en ny klass
	var des = this.id;
  var pelement = document.getElementsByName(des)[0].setAttribute("class", "vis");
  
  

  
	}

	
function init(){
  //hämtar api
var request = new XMLHttpRequest();

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {

  
  var data = JSON.parse(this.response);
  
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {

      //skapar element baserat på antalet data som hämtas
      var box = document.getElementById('box');
      box.innerHTML;
      var container = document.createElement('div');
      box.appendChild(container);
      var title = document.createElement('h3');
      title.textContent = movie.title;
      container.appendChild(title);
      
      var read = document.createElement("button");
      var readtext = document.createTextNode("Read more");
      read.setAttribute("id", movie.id);
      read.addEventListener("click", readmore);
      read.appendChild(readtext);
      container.appendChild(read);
      var description = document.createElement('p');
      description.textContent = movie.description;
      description.setAttribute('name', movie.id);
      container.appendChild(description);



      
    });
  } 
}

request.send();



}

