package main

import (
	"fmt"
)

func buildWebsite() {
	nav, err := buildNav("../frontend/components/nav.html")
	if err != nil {
		fmt.Errorf("couldn't build nav:", err)
	}
	aboutme, err := buildAboutme("../frontend/components/aboutme.html")
	if err != nil {
		fmt.Errorf("couldn't build aboutme:", err)
	}
	home, err := buildHome("../frontend/components/home.html")
	if err != nil {
		fmt.Errorf("couldn't build home:", err)
	}
	quicklinks, err := buildQuickLinks("../frontend/components/quicklinks.html")
	if err != nil {
		fmt.Errorf("couldnt build quicklinks:", err)
	}

}
