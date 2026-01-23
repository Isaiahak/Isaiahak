package main

import (
	"fmt"
	"os"
)

func buildNav(filePath string) (string, error) {
	navHTML, err := os.ReadFile(filePath)
	if err != nil {
		return "", fmt.Errorf("couldn't build nav due to:", err)
	}
	nav := string(navHTML)
	return nav, nil
}
