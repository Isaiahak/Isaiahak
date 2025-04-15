import "../styling/AboutMe.css"
function AboutMe(){

	const text = {
		fontSize: "20px", // figurefont size stuff
	}
	return(
		<div className="aboutme-container">
			<div className="description-container">
				<p style={text} className="description">
					yooooo whats going on its your boy isiaiah and this is my website :), I move all things programming related from game dev to backend,
					to even frontend ( jk I hated making this website). besides from programming I love rock climbing, biking, food and unfortunately video games.
					Currently I am experimenting with Go, and Odin for backend development and systems development and Dabbling in JS for frontend ( as you can see its 
						a work in progress)
				</p>
			</div>
		</div>
	)
}

export default AboutMe;