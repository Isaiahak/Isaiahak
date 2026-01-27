package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

var Me = "../frontend/src/assets/Me.jpg"
var Climbing1 = "../frontend/src/assets/climbing1.mp4"
var Climbing2 = "../frontend/src/assets/"
var Camping = "../frontend/src/assets/"
var Running = "../frontend/src/assets/"
var BikeView = "../frontend/src/assets/"
var BikeView2 = "../frontend/src/assets/"

var aboutMeSection1 = " Hello my name is Isaiah Ashton-Kenny, I am a software engineering student learning full-stack development."
var aboutMeSection2 = "When I am not programming, You can find me outside running, riding my bike or climbing rocks"
var aboutMeSection3 = " Currently I tackling full-stack development by working on online workflow alternative to jira and confluence"
var sectionTexts = []string{aboutMeSection1, aboutMeSection2, aboutMeSection3}

var AboutImages1 = []string{Me}
var AboutImages2 = []string{Running, BikeView, Climbing1, Climbing2, BikeView2, Camping}
var AboutImages3 = []string{}
var sectionImages = [][]string{AboutImages1, AboutImages2, AboutImages3}

var ProgressBar = `
<div class="mx-auto self-start w-[90%] md:w-[60rem]">
	<div class="flex h-4 mt-4 rounded-md self-start shadow-2xl/30 shadow-gray-500 animate-progress-bar md:animate-progress-bar-md " />
</div>

`

var Section1 = `
<div id="about-1" class="flex flex-col w-[90%] h-64 md:h-[30rem] md:w-[60rem] justify-center bg-primary rounded-md  shadow-2xl/30 border-2 border-border mx-auto ">
	<div class="flex flex-row gap-2">
		<div class=" ml-4 md:ml-10">
			<img src={image[0]} class=" w-90 h-40 md:w-[40rem] md:h-90 rounded-md " />
		</div>
		<p class="text-lg md:text-2xl text-center text-text self-center mx-2 md:mx-18">{text}</p>
	</div>
</div>
`

var Section2 = `
<div id="about-2" class="flex flex-col w-[90%] md:w-[60rem] rounded-md gap-4 mx-auto">
	<div class="flex flex-col w-full h-[6rem] justify-center bg-primary border-2 border-border rounded-md shadow-2xl/30">
		<p class=" mx-2 text-xl text-text">{text}</p>
	</div>
	<div class="flex flex-row gap-x-4 md:w-[60rem] self-center justify-center">
		<div class="flex flex-col bg-primary border-2 w-[8.2rem] h-[9rem] place-self-center overflow-hidden md:w-[19.33rem] md:h-[22rem] shadow-2xl/30 border-border rounded-md ">
			<img class="opacity-100 h-full" src={image[0]}/>
			<img class="opacity-0 h-0" src={image[1]}/>
		</div>
		<div class="bg-primary border-2 w-[8.2rem] h-[9rem] overflow-hidden md:w-[22.33rem] md:h-[24rem] shadow-2xl/30 border-border rounded-md ">
			<video key={Climbing1} muted autoPlay preload="auto" class="w-full h-full opacity-100 object-fill" source={image[3]} type="video/mp4" />
			<video key={Climbing2} muted autoPlay preload="auto" class="w-full h-0 opacity-0 object-fill"  source={image[4]} type="video/mp4" />
		</div>
		<div class="flex flex-col bg-primary border-2 w-[8.2rem] h-[9rem] overflow-hidden place-self-center md:w-[19.33rem] md:h-[22rem] shadow-2xl/30 border-border rounded-md ">
			<img class="opacity-100 h-full" src={image[4]}/>
			<img class="opacity-0 h-0" src={image[5]}/>
		</div>
	</div>
</div>
`

var Section3 = `
<div id="about-3" class="flex flex-col w-[90%] md:w-[60rem] h-full gap-4 mx-auto ">
	<<div class="flex flex-col w-full h-[7rem] md:h-[15rem] self-center bg-primary border-2 shadow-2xl/30 border-border rounded-md">
		<h1 class="">
	{image}
	</h1>
	</div>
div class="flex flex-col w-full h-[7rem] md:h-[15rem] self-center justify-center shadow-2xl/30 bg-primary border-2 border-border rounded-md">
		<p class="mx-2 text-center text-text self-center">{text}</p>
	</div>
</div>
`
var sections = []string{Section1, Section2, Section3}

func buildAboutme(filePath string) (string, error) {
	//build sections
	var sectionsBuilder strings.Builder
	for index := range sections {
		sectionsBuilder.WriteString(buildSection(sectionTexts[index], sections[index], sectionImages[index]))
	}
	sectionsHTML := sectionsBuilder.String()

	aboutmeHTML, err := os.ReadFile(filePath)
	if err != nil {
		return "", fmt.Errorf("couldn't build aboutme due to:%s", err)
	}

	aboutme := string(aboutmeHTML)
	aboutme = fmt.Sprintf(aboutme, sectionsHTML)

	return aboutme, nil
}

func buildSection(sectionText, sectionHTML string, sectionImages []string) string {
	var inBracket bool
	var readCount bool
	var html strings.Builder
	var types strings.Builder
	index := -1
	for i := range sectionHTML {
		if inBracket {
			if readCount {
				index, _ = strconv.Atoi(string(sectionHTML[i]))
				readCount = false
			} else if sectionHTML[i] == '}' {
				element := types.String()
				if element == "image" {
					if index != -1 {
						html.WriteString(`"` + sectionImages[index] + `"`)
						index = -1
					}
				} else {
					html.WriteString(sectionText)
				}
				types.Reset()
				inBracket = false
			} else if sectionHTML[i] == '[' {
				readCount = true
			} else if sectionHTML[i] == ']' {
				continue
			} else {
				types.WriteByte(sectionHTML[i])
			}
		} else {
			if sectionHTML[i] == '{' {
				inBracket = true
			} else {
				html.WriteByte(sectionHTML[i])
			}
		}
	}
	sectionsHTML := html.String()

	return sectionsHTML
}
