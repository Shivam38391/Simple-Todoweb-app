"use strict";




//function to get csrf token to send csrf in ajax request	

		function getCookie(name) {
			let cookieValue = null;
			if (document.cookie && document.cookie !== '') {
				const cookies = document.cookie.split(';');
				for (let i = 0; i < cookies.length; i++) {
					const cookie = cookies[i].trim();
					// Does this cookie string begin with the name we want?
					if (cookie.substring(0, name.length + 1) === (name + '=')) {
						cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
						break;
					}
				}
			}
			return cookieValue;
		}
		const csrftoken = getCookie('csrftoken');


//function to get csrf token to send csrf in ajax request		



buildList()

function buildList(){
    var wrapper = document.getElementById("list-wrapper")

	// just empty div , without this it repeating the data twice beacause im calling the function two times
	wrapper.innerHTML = " "    

    var url = "http://127.0.0.1:8000/api/todo/"
	// url for get data in decending order 
	var url2 = "http://127.0.0.1:8000/api/todo/?ordering=-updated_at"

    fetch(url2)
    .then((resp)  => resp.json())
    .then(function(data){
        console.log("data: " ,data)
        console.log(typeof data)

		var list = data

		for (var i in list){
			// destructuring the object 
			const {id,title, created_at, updated_at} = list[i]

			// creacting inner html with dyanamic data
			var item = `

		<div id="data-row-${id}" class="task-wrapper flex-wrapper">
			<div style="flex:4">
				<span class="title">${title}</span>
			</div>
			<div style="flex:2">
				<span class="title">${updated_at.slice(0,10)}, ${updated_at.slice(11,19)}</span>
			</div>
			<div style="flex:1">
				<button id = "edit-${id}" class="btn btn-sm btn-outline-info edit">Edit</button>
			</div>
			<div style="flex:1">
				<button class="btn btn-sm btn-outline-dark delete">delete</button>
			</div>
		
		</div>

			`
			// updtaing the div with items
			wrapper.innerHTML += item



		}

		// 2ndloop
		for (var i in list){
			var editbtn = document.getElementsByClassName(`edit`)[i]
			editbtn.addEventListener("click", function(){
				editItem(list[i]);
			})
		}

    })
}



// ---------------------------------------------

var form = document.getElementById('form-wrapper')




form.addEventListener('submit', function(e){
	//preventing the default behaviour on submitting
	// e.preventDefault()
console.log(csrftoken)

	var title = document.getElementById('title').value

	var url = "http://127.0.0.1:8000/api/todo/"

	fetch(url, 
		{method: 'POST', 
		headers: {'Content-Type': 'application/json', 
		'X-CSRFToken': csrftoken,},
		//sending the data to server in json format
		body: JSON.stringify({'title':title, "status": false,
		"user": null})
	}
	).then(function(response) {
		// again calling the buildlist function the render data in the html
		buildList()
		// to reset the form input to blank
		document.getElementById('form').reset()
	})



})

function editItem(item) {
	console.log(`editItem ${item.title}`)
}

























































































// const request =  fetch('http://127.0.0.1:8000/api/todo/')
// .then(function (response) {
//     console.log(response) 
//     return response.json(); 
// })
// .then(function (data){
//     console.log(data); 

// })

  // distructuring is done here


