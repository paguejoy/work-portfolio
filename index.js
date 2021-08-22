
const inquiryForm = document.querySelector('#inquiryForm');
console.log("code tracing outside");

inquiryForm.addEventListener("submit", (e) => {
	console.log("code tracing inside");

	e.preventDefault();

	let email = document.querySelector("#email").value;
	let subject = document.querySelector("#subject").value;
	let text = document.querySelector("#text").value;

	fetch("https://sheltered-anchorage-25061.herokuapp.com/email",
	// fetch("http://localhost:3000/email",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email: email,
				subject: subject,
				text: text
			})
		}
	)
	.then(result => result.json())
	.then(result => {
		console.log(result);

		if(result){
			alert("Message has been sent.");

			window.location.replace("./index.html");
		} else {
			alert("Something went wrong");
		}

	})
})


