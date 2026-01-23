package main

import (
	"fmt"
	"os"
)

var links = `
<nav className=" mt-4 flex flex-col w-full h-full gap-4 md:w-80rem md:h-full">
	<a href="https://github.com/Isaiahak" className="self-center text-gray-200 hover:underline hover:text-white">Github</a>
	<a href="https://www.linkedin.com/in/isaiah-ashton-kenny" className="self-center text-gray-200 hover:underline hover:text-white">LinkedIn</a>
	<a href="/Isaiah Ashton-Kenny Resume.pdf" className="self-center text-gray-200 hover:underline hover:text-white" download>Download Resume</a>
</nav>


`

func buildQuickLinks(filePath string) (string, error) {
	quicklinkHTML, err := os.ReadFile(filePath)
	if err != nil {
		return "", fmt.Errorf("couldn't build quicklinks due to:", err)
	}
	quicklinks := string(quicklinkHTML)
	quicklinks = fmt.Sprintf(quicklinks, links)
	return quicklinks, nil
}
