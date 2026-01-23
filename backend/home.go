package main

import (
	"fmt"
	"os"
)

var email = "isaiahkenny321123@gmail.com"

var script = `
<script>
	var email = document.getElementById("email")
	function handleEmailClick(){
		handleEmail = async () => {
			try {
				await navigator.clipboard.writeText(email)
			}
			catch (error) {
				console.error('Failed to copy email', error)
			}
		}

	}
	email.addEventListener("click", handleEmailClick)
</script>
`
var usefulLinks = `
<div className='mt-4 flex flex-row gap-4 md:mt-24 justify-center place-content center'>
	<div className="md:py-4 md:px-10 py-3 px-6 bg-secondary rounded-2xl text-gray-100 hover:bg-primary ">
		<button className="useful-link cursor-copy ">
			<span className="">Copy Email</span>
		</button>
	</div>

	<div className="md:py-4 md:px-10 py-3 px-6 bg-secondary rounded-2xl text-gray-100 hover:bg-primary ">
		<a href="/IsaiahAshtonKennyCurrentResume.pdf" download>Download Resume</a>
	</div>

	<div className="md:py-4 md:px-10  py-3 px-6 bg-secondary rounded-2xl text-gray-100 hover:bg-primary ">
		<a href="https://www.linkedin.com/in/isaiah-ashton-kenny" >LinkedIn</a>
	</div>
</div>

`

func buildHome(filePath string) (string, error) {
	homeHTML, err := os.ReadFile(filePath)
	if err != nil {
		return "", fmt.Errorf("couldn't build home due to:", err)
	}
	home := string(homeHTML)
	home = fmt.Sprintf(home, usefulLinks)

	return home, nil
}
