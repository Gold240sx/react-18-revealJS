import React from "react"
import Slide from "../Components/RevealComponents/Slide"
import Sky from "../assets/Images/sky.png"
import Trees from "../assets/Images/trees.png"
import Hill from "../assets/Images/hill.png"
import Fire from "../assets/Images/campfire.png"
// import AviHi from "../assets/Images/Avi-Hi.png"

const ThirdSlide = () => {
	return (
		<Slide>
			{/* <div className="relative flex h-[100vh] w-screen flex-col">
				<img
					src={Sky}
					className="absolute object-cover w-screen h-screen m-0 max-h-none max-w-none"
					style={{ margin: "unset", maxWidth: "unset", maxHeight: "unset", display: "flex", verticalAlign: "unset" }}
				/>
				<img
					src={Trees}
					className="absolute bottom-32 left-0 right-0 min-h-[16rem] w-full scale-125 overflow-visible object-cover lg:bottom-[30%]"
				/>
				<img src={Hill} className="absolute -bottom-10 left-0 right-0 min-h-[16rem] w-full scale-125 overflow-visible" />
				<img src={AviHi} className="absolute z-50 w-1/2 min-h-64 bottom-10 left-4" />
				<img src={Fire} className="absolute z-40 w-1/6 min-h-40 bottom-16 right-24" />
			</div> */}
		</Slide>
	)
}

export default ThirdSlide
