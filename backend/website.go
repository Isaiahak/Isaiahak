package main

import (
	"fmt"
	"os"
	"strings"
)

func buildWebsite() error {
	nav, err := buildNav("../frontend/components/nav.html")
	if err != nil {
		return fmt.Errorf("couldn't build nav:%s", err)
	}
	aboutme, err := buildAboutme("../frontend/components/aboutme.html")
	if err != nil {
		return fmt.Errorf("couldn't build aboutme:%s", err)
	}
	home, err := buildHome("../frontend/components/home.html")
	if err != nil {
		return fmt.Errorf("couldn't build home:%s", err)
	}
	quicklinks, err := buildQuickLinks("../frontend/components/quicklinks.html")
	if err != nil {
		return fmt.Errorf("couldn't build quicklinks:%s", err)
	}
	projects, err := buildProjects("../frontend/components/projects.html")
	if err != nil {
		return fmt.Errorf("couldn't build projects:%s", err)
	}

	indexHTML, err := os.ReadFile("../frontend/index.html")
	if err != nil {
		return fmt.Errorf("couldn't build due to index:%s", err)
	}
	index := string(indexHTML)

	index = buildComponents(index, nav, home, aboutme, projects, quicklinks)

	err = os.WriteFile("../frontend/dist/index.html", []byte(index), 0644)
	if err != nil {
		return fmt.Errorf("couldn't save index to the dist file:%s", err)
	}

	return nil
}

func buildComponents(index, nav, home, aboutme, projects, quicklinks string) string {
	var inBracket bool
	var html strings.Builder
	var types strings.Builder
	for i := range index {
		if inBracket {
			if index[i] == '}' {
				element := types.String()
				switch element {
				case "nav":
					html.WriteString(nav)
				case "home":
					html.WriteString(home)
				case "aboutme":
					html.WriteString(aboutme)
				case "projects":
					html.WriteString(projects)
				default:
					html.WriteString(quicklinks)
				}
				inBracket = false
				types.Reset()
			} else {
				types.WriteByte(index[i])
			}
		} else {

			if index[i] == '{' {
				inBracket = true
			} else {
				html.WriteByte(index[i])
			}
		}
	}
	index = html.String()

	return index
}
