import React from "react"

import "./Themes/darcula.css"

import Deck from "./Components/RevealComponents/Deck"
import Slide from "./Components/RevealComponents/Slide"
import Slides from "./Slides"

function App() {
	return (
		<div className="App h-full">
			<Deck>{Slides}</Deck>
		</div>
	)
}

export default App
