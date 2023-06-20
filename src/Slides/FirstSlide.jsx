import React from "react"
import Slide from "../Components/RevealComponents/Slide"
import JSX from "../Components/Highlight/JSX"


const demoCode = `const basicComponent = () => (
    <h1>This is a basic component</h1>
);`

export default function FirstSlide() {
	return (
		<Slide>
			{/* <h3>1st Slide: Basic application data structures</h3>
			<div className="flex justify-center w-full">
				<JSX code={demoCode} />
			</div> */}
			{/* <div className="relative flex h-[100vh] w-screen flex-col">
				<div className="w-full bg-red-400 h-1/3"></div>
				<div className="flex w-full h-1/3">
					<div className="w-1/2 h-full bg-orange-400"></div>
					<div className="w-1/2 h-full bg-sky-400"></div>
				</div>
				<div className="w-full bg-teal-400 h-1/3"></div>
			</div> */}
			{/* <div className="relative flex h-[100vh] w-screen flex-col">
				<img src={AviHi} className="absolute z-50 h-24 bottom-2 left-4" />
				<img src={AviHi} className="absolute z-50 h-24 bottom-2 right-4" />
			</div> */}
		</Slide>
	)
}
