import React from "react"
import Slide from "../Components/RevealComponents/Slide"

export default function TitleSlide() {
	return (
		<Slide>
			<h2 className="text-red-600">Title Slide: Structuring data access in front-end applications</h2>
			<div class="r-stack">
				<img class="fragment" src="https://placekitten.com/450/300" width="450" height="300" />
				<img class="fragment" src="https://placekitten.com/300/450" width="300" height="450" />
				<img class="fragment" src="https://placekitten.com/400/400" width="400" height="400" />
			</div>
		</Slide>
	)
}
