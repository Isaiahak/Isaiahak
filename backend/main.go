package main

import (
	"fmt"
	"net/http"
	"os"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		index, err := os.ReadFile("../frontend/dist/index.html")
		if err != nil {
			fmt.Println(err)
		}
		w.Write(index)
	})
	err := buildWebsite()
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println("started server")
	http.ListenAndServe("localhost:8080", nil)
	fmt.Println("started server")

}
