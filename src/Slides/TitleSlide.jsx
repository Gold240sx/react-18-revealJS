import React, { useEffect, useState } from "react"
import Slide from "../Components/RevealComponents/Slide"
import Sky from "../assets/Images/sky.png"
import Trees from "../assets/Images/trees.png"
import Hill from "../assets/Images/hill.png"
import Fire from "../assets/Images/campfire.png"
import Avi from "../assets/Images/Avi.png"
import AviGreet from "../assets/Images/Avi-Greet.png"
import AviThanks from "../assets/Images/Avi-Thanks.png"
import AviEnjoy from "../assets/Images/Avi-Enjoy.png"

export default function TitleSlide() {
	const [step, setStep] = useState(1)

	// for (let i = 1; i < 6; i++) {
	while (step < 6) {
		setTimeout(() => {
			setStep[step + 1]
		}, [500])
	}

	if (step === 6) {
		setStep(1)
	}

	return (
		<>
			{/* If wrapped in a div the background becomes the background for all slides.
            otherwise, if  wrapped in a "<></>", the content will only be the background for the single slide." 
        */}
			<Slide>
				<div className="relative flex h-[100vh] w-screen flex-col">
					{step !== 6 && (
						<button
							onClick={() => {
								setStep(step + 1)
								console.log({ step })
							}}
							className="min-h-40 absolute right-10 top-16 z-40 w-fit animate-pulse cursor-pointer rounded-xl bg-sky-400 px-4 py-2 text-xl hover:bg-sky-500 active:bg-sky-800">
							Click Me
						</button>
					)}
					{/* <p className="z-50">{step}</p> */}
					<img
						src={Sky}
						className="absolute m-0 h-[80vh] max-h-none w-screen max-w-none object-cover"
						style={{ margin: "unset", maxWidth: "unset", maxHeight: "unset", display: "flex", verticalAlign: "unset" }}
					/>
					<img src={Trees} className="absolute bottom-[140px] left-0 right-0 w-full scale-125 overflow-visible" />
					<img src={Hill} className="absolute -bottom-10 left-0 right-0 min-h-[14rem] w-full scale-125 overflow-visible" />
					{step === 2 && <img src={Avi} className="min-h-64 absolute bottom-10 left-4 z-50 w-1/2" />}
					{step === 3 && <img src={AviGreet} className="min-h-64 absolute bottom-10 left-4 z-50 w-1/2" />}
					{step === 4 && <img src={AviThanks} className="min-h-64 absolute bottom-10 left-4 z-50 w-1/2" />}
					{step === 5 && <img src={AviEnjoy} className="min-h-64 absolute bottom-10 left-4 z-50 w-1/2" />}
					<img src={Fire} className="min-h-40 absolute bottom-16 right-24 z-40 w-1/6" />
				</div>
			</Slide>
		</>
	)
}
