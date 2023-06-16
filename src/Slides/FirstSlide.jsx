import React from "react"
import Slide from "../Components/RevealComponents/Slide"
import JSX from "../Components/Highlight/JSX"

const demoCode = `const basicComponent = () => (
    <h1>This is a basic component</h1>
);`

export default function FirstSlide() {
	return (
		<Slide>
			<h3>1st Slide: Basic application data structures</h3>
			<div className="flex w-full justify-center">
				<JSX code={demoCode} />
			</div>
		</Slide>
	)
}
