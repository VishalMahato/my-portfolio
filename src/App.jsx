import { useState } from "react";

import "./App.css";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";


function App() {
	return (
		<>
			<div className="container mx-auto max-w-7xl">
				<Navbar />
				<Hero />
				
			</div>
		</>
	);
}

export default App;
